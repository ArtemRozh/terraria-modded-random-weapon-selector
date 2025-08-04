import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeaponDataService } from '../weapon-data.service';
import { WeaponSelectorStateService } from '../weapon-selector-state.service';
import { vanillaProgression, allModdedProgression, allContent, ContentLabels } from '../data/progression.data';

@Component({
  selector: 'app-weapon-selector',
  imports: [CommonModule, FormsModule],
  templateUrl: './weapon-selector.component.html',
  styleUrl: './weapon-selector.component.css'
})

export class WeaponSelectorComponent { 
  availableContent = [...allContent];
  progression = this.mergeProgressions(vanillaProgression, allModdedProgression);
  availableWeapons: any[] = [];
  selectedWeapon: {name: string; [key: string]: any} = {name: "None"};
  switch:boolean = false;
  clearSwitch:boolean = false;
  banSwitch:boolean = false;

  currentIndex = 0; 

  constructor(private weaponDataService: WeaponDataService,
  private selectorState: WeaponSelectorStateService) {
      this.updateAvailableWeapons();
  }

  get availableContentFiltered() {
    return this.availableContent.filter(el => el.label !== ContentLabels.Vanilla);
  }

  get availableToRollWeapons(){{
    return this.availableWeapons.filter(el => el.banned !== true);
  }}

  ngOnInit() {
    this.selectorState.loadState();

    this.currentIndex = this.selectorState.currentIndex;
    this.availableContent = [...this.selectorState.availableContent];
    this.clearSwitch = this.selectorState.clearSwich;
    this.progression = this.mergeProgressions(vanillaProgression, allModdedProgression);

    this.updateAvailableWeapons();

    this.selectedWeapon = this.selectorState.selectedWeapon;
    this.switch = this.selectorState.switch;
    this.banSwitch = this.selectorState.banSwitch;
  }

  changeStep(offset: number) {
    const newIndex = this.currentIndex + offset;

    if (newIndex >= 0 && newIndex < this.progression.length) {
      this.currentIndex = newIndex;

      this.updateAvailableWeapons();

      this.selectorState.currentIndex = this.currentIndex;
      this.selectorState.availableWeapons = this.availableWeapons;
    }
  }

  changeVanillaWeaponsAvailabillity(){
    const index = this.availableContent.findIndex((element) => element.label === ContentLabels.Vanilla);

    if(index !== -1){
      this.availableContent[index].active = !this.availableContent[index].active;

      //this.currentIndex = 0;

      this.updateAvailableWeapons();

      this.selectorState.availableContent = [...this.availableContent];
      this.selectorState.currentIndex = this.currentIndex;
      this.selectorState.availableWeapons = this.availableWeapons;

      //this.switch = !this.switch;
      this.selectorState.switch = this.switch;
    }

  }

  clearWeaponsOnDifficultyChange(){
    //this.clearSwitch = !this.clearSwitch;
    this.selectorState.clearSwich = this.clearSwitch;

    //this.currentIndex = 0;
    this.selectorState.currentIndex = this.currentIndex;

    this.updateAvailableWeapons();
  }

  banWeaponsOnRoll(){
    this.selectorState.banSwitch = this.banSwitch;
  }
  
  mergeProgressions(
    vanilla: {step: string}[],
    mods: { progression: { step: string; after: string }[]; label: string }[]
  ): {step: string}[] {
    const filteredMods = this.filterAvailableMods(mods, this.availableContent);
    return this.insertModSteps(vanilla, filteredMods);
  }

  filterAvailableMods(
    mods: { progression: { step: string; after: string }[]; label: string }[],
    availableContent: { label: string; active: boolean }[]
  ): { step: string; after: string }[][] {
    const availableMods: { step: string; after: string }[][] = [];

    for (const mod of mods) {
      const index = availableContent.findIndex((element) => element.label === mod.label);

      if (index !== -1 && availableContent[index].active) {
        availableMods.push(mod.progression);
      }
  }

    return availableMods;
  }

  insertModSteps(
    base: { step: string }[],
    mods: { step: string; after: string }[][]
  ): { step: string }[] {
    const final = [...base];

    for (const mod of mods) {
      for (const modStep of mod) {
        const index = final.findIndex((element) => element.step === modStep.after);
        if (index !== -1) {
          final.splice(index + 1, 0, { step: modStep.step });
        }
      }
    }

    return final;
  }

  modifyProgression(
    label: string,
    value: boolean
  ){
    const index = this.availableContent.findIndex((element) => element.label === label);

    if(index !== -1){
      this.availableContent[index].active = value;
    }

    this.progression = this.mergeProgressions(vanillaProgression, allModdedProgression);
    this.currentIndex = 0;

    this.updateAvailableWeapons();

    this.selectorState.availableContent = [...this.availableContent];
    this.selectorState.currentIndex = this.currentIndex;
    this.selectorState.availableWeapons = this.availableWeapons;
  }

  selectRandomWeapon(){
    this.selectedWeapon = this.weaponDataService.getRandomWeapon(this.selectorState.bannedWeaponsMap, this.banSwitch, this.availableContent);
    this.selectorState.selectedWeapon = this.selectedWeapon;
    this.availableWeapons = this.weaponDataService.getWeapons(this.selectorState.bannedWeaponsMap, this.availableContent);
  }

  clearBannedWeapons(){
    this.selectorState.bannedWeaponsMap = {};
    this.updateAvailableWeapons();
  }

  private updateAvailableWeapons(): void {
    this.availableWeapons = this.weaponDataService.getWeaponsByProgression(
      this.progression,
      this.progression[this.currentIndex].step,
      this.clearSwitch,
      this.selectorState.bannedWeaponsMap,
      this.availableContent
    );
  }
}
