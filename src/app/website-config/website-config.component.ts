import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeaponDataService } from '../weapon-data.service';
import { WeaponSelectorStateService } from '../weapon-selector-state.service';
import { allContent, allModdedProgression, ContentLabels, vanillaProgression } from '../data/progression.data';

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
    if (index !== -1) {
      this.availableContent[index].active = value;
      this.syncChanges();
    }
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
}