import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeaponDataService } from '../weapon-data.service';
import { WeaponSelectorStateService } from '../weapon-selector-state.service';
import { allContent, allModdedProgression, ContentLabels } from '../data/progression.data';
import { vanillaProgression } from '../data/content/vanilla/vanillaProgression.data';
import { WorldEvil } from '../data/helper/worldEvil.data';
import { Starfarer } from '../data/helper/smallModHelper.data';

@Component({
  selector: 'app-website-config',
  imports: [CommonModule, FormsModule],
  templateUrl: './website-config.component.html',
  styleUrl: './website-config.component.css'
})
export class WebsiteConfigComponent {
  availableContent = [...allContent];
  switch: boolean = false;
  clearSwitch: boolean = false;
  banSwitch: boolean = false;
  progression: any[] = [];

  // Vanilla
  worldEvil: string = WorldEvil.Both;
  finalUpdateSwitch: boolean = false;

  // Stars Above
  starfarer: string = Starfarer.Asphodene;

  // Calamity
  preBossHellstoneSwitch: boolean = true;
  hardmodeOreShenanigansSwitch: boolean = true;

  constructor(
    private weaponDataService: WeaponDataService,
    public selectorState: WeaponSelectorStateService
  ) {}

  ngOnInit() {
    this.selectorState.loadState();

    this.availableContent = [...this.selectorState.availableContent];
    this.clearSwitch = this.selectorState.clearSwich;
    this.switch = this.selectorState.switch;
    this.banSwitch = this.selectorState.banSwitch;

    this.worldEvil = this.selectorState.worldEvil;
    this.finalUpdateSwitch = this.selectorState.finalUpdateSwitch;
    this.starfarer = this.selectorState.starfarer;
    this.preBossHellstoneSwitch = this.selectorState.preBossHellstoneSwitch;
    this.hardmodeOreShenanigansSwitch = this.selectorState.hardmodeOreShenanigansSwitch;

    if (!this.selectorState.progression || this.selectorState.progression.length === 0) {
      this.progression = this.fullModifyProgression();
      this.selectorState.progression = this.progression;
    } else {
      this.progression = this.selectorState.progression;
    }

    this.updateAvailableWeapons();
  }

  get availableContentFiltered() {
    return this.availableContent.filter(el => el.label !== ContentLabels.Vanilla);
  }

  changeVanillaWeaponsAvailabillity() {
    const index = this.availableContent.findIndex(el => el.label === ContentLabels.Vanilla);
    if (index !== -1) {
      this.availableContent[index].active = !this.availableContent[index].active;
      this.selectorState.switch = this.switch;
      this.syncChanges();
    }
  }

  modifyProgression(label: string, value: boolean) {
    const index = this.availableContent.findIndex(el => el.label === label);
    if (index === -1) return;

    this.availableContent[index].active = value;

    const masterData = allContent.find(c => c.label === label);

    if (value === true) {
      if (masterData?.requires) {
        const parentIndex = this.availableContent.findIndex(el => el.label === masterData.requires);
        if (parentIndex !== -1) {
          this.availableContent[parentIndex].active = true;
        }
      }
    } else {
      this.availableContent.forEach((content, i) => {
        const dependencyData = allContent.find(c => c.label === content.label);
        if (dependencyData?.requires === label) {
          this.availableContent[i].active = false;
        }
      });
    }

    this.syncChanges();
  }

  clearWeaponsOnDifficultyChange() {
    this.selectorState.clearSwich = this.clearSwitch;
    this.updateAvailableWeapons();
  }

  banWeaponsOnRoll() {
    this.selectorState.banSwitch = this.banSwitch;
  }

  clearBannedWeapons() {
    this.selectorState.bannedWeaponsMap = {};
    this.updateAvailableWeapons();
  }

  private syncChanges() {
    this.progression = this.fullModifyProgression();
    this.selectorState.progression = this.progression;
    this.selectorState.availableContent = [...this.availableContent];
    this.selectorState.currentIndex = 0;
    this.updateAvailableWeapons();
  }

  fullModifyProgression() { 
    return this.mergeProgressions(vanillaProgression, allModdedProgression); 
  }

  mergeProgressions(vanilla: any[], mods: any[]): any[] {
    const filteredMods = this.filterAvailableMods(mods, this.availableContent);
    return this.insertModSteps(vanilla, filteredMods);
  }

  filterAvailableMods(mods: any[], availableContent: any[]): any[][] {
    const availableMods: any[][] = [];
    for (const mod of mods) {
      const index = availableContent.findIndex(el => el.label === mod.label);
      if (index !== -1 && availableContent[index].active) {
        availableMods.push(mod.progression);
      }
    }
    return availableMods;
  }

  insertModSteps(base: any[], mods: any[][]): any[] {
    const final = [...base];
    for (const mod of mods) {
      for (const modStep of mod) {
        const index = final.findIndex(el => el.step === modStep.after);
        if (index !== -1) final.splice(index + 1, 0, { step: modStep.step });
      }
    }
    return final;
  }

  private updateAvailableWeapons() {
    this.selectorState.availableWeapons = this.weaponDataService.getWeaponsByProgression(
      this.progression,
      this.progression[this.selectorState.currentIndex]?.step,
      this.clearSwitch,
      this.selectorState.bannedWeaponsMap,
      this.availableContent
    );
  }

  saveStateToFile() { this.selectorState.saveStateToFile(); }

  loadStateFromFile(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (!this.selectorState.loadStateFromFile(reader.result as string)) location.reload();
    };
    reader.readAsText(file);
  }

  changeWorldEvil(option: number){
      switch (option) {
      case 1:
        this.worldEvil = WorldEvil.Crimson
        break;
      case 2:
        this.worldEvil = WorldEvil.Corruption
        break;
      case 3:
        this.worldEvil = WorldEvil.Both
        break;
      default:
        this.worldEvil = WorldEvil.Both
        break;
    }

    this.selectorState.worldEvil = this.worldEvil;
    this.updateAvailableWeapons();
  }

  checkWorldEvil(option: number): boolean{
      switch (option) {
      case 1:
        return this.worldEvil === WorldEvil.Crimson
      case 2:
        return this.worldEvil === WorldEvil.Corruption
      case 3:
        return this.worldEvil === WorldEvil.Both
      default:
        return this.worldEvil === WorldEvil.Both
    }
  }

  changeStarfarer(option: number){
    switch (option) {
      case 1:
        this.starfarer = Starfarer.Asphodene
        break;
      case 2:
        this.starfarer = Starfarer.Eridani
        break;
      default:
        this.starfarer = Starfarer.Asphodene
        break;
    }

    this.selectorState.starfarer = this.starfarer;
    this.updateAvailableWeapons();
  }

  checkStarfarer(option: number): boolean{
    switch (option) {
      case 1:
        return this.starfarer === Starfarer.Asphodene
      case 2:
        return this.starfarer === Starfarer.Eridani
      default:
        return this.starfarer === Starfarer.Asphodene
    }
  }

  checkIfContentEnabled(option: number): boolean {
    let index = 0;

    switch (option) {
      case 1:
        index = this.availableContent.findIndex(c => c.label === ContentLabels.Vanilla)
        break;
      case 2:
        index = this.availableContent.findIndex(c => c.label === ContentLabels.Calamity)
        break;
      case 3:
        index = this.availableContent.findIndex(c => c.label === ContentLabels.StarsAbove)
        break;
      default:
        return false
    }

    return this.availableContent[index].active;
  }

  changePreBossHelstone() {
    this.selectorState.preBossHellstoneSwitch = this.preBossHellstoneSwitch;
    this.updateAvailableWeapons();
  }

  changeHardmodeOreShenanigansSwitch() {
    this.selectorState.hardmodeOreShenanigansSwitch = this.hardmodeOreShenanigansSwitch;
    this.updateAvailableWeapons();
  }

  changeFinalUpdate() {
    this.selectorState.finalUpdateSwitch = this.finalUpdateSwitch;
    this.updateAvailableWeapons();
  }
}