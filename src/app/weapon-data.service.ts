import { Injectable } from '@angular/core';
import { allWeaponData } from './data/weapon.data';
import { allContent, ContentLabels, Boss, allMajorProgressionResetPoints } from './data/progression.data';
import { allWeaponChanges } from './data/crossModSupport.data';

@Injectable({
  providedIn: 'root'
})
export class WeaponDataService {
  private progression: { step: string }[] = [];
  private currentStep: string = '';
  private clearSwitch: boolean = false;

  constructor() {}

  private gatherAvailableWeapons(availableContent: { label: string; active: boolean }[]): any[] {
    const weaponsList: any[] = [];

    for (const weaponList of allWeaponData) {
      const index = availableContent.findIndex((element) => element.label == weaponList.source);

      if (index !== -1 && availableContent[index].active) {
        const modifiedList = weaponList.weapons.map(weapon => ({
          ...weapon,
          banned: false,
          source: weaponList.source
        }));
        weaponsList.push(...modifiedList);
        }
    }

    return this.applyCrossModChanges(weaponsList, availableContent);
  }

  getWeaponsByProgression(
    progression: { step: string }[],
    currentStep: string,
    clearSwitch: boolean,
    bannedMap: Record<string, boolean> = {},
    availableContent: { label: string; active: boolean }[]
  ): any[] {
    const weapons = this.gatherAvailableWeapons(availableContent);

    this.progression = progression;
    this.currentStep = currentStep;
    this.clearSwitch = clearSwitch;

    let filteredWeapons = this.filterWeaponsByProgression(weapons, progression, currentStep, clearSwitch);

    filteredWeapons = filteredWeapons.map(wep => ({
      ...wep,
      banned: bannedMap[wep.name] ?? false
    }));

    return filteredWeapons;
  }

  private filterWeaponsByProgression(
    weapons: any[],
    progression: { step: string }[],
    currentStep: string, 
    clearSwitch: boolean
  ): any[] {
    const currentIndex = progression.findIndex(p => p.step === currentStep);

    if (currentIndex === -1) {
      return weapons;
    }

    const isVanillaDisabled = !allContent.find(c => c.label === ContentLabels.Vanilla)?.active;

    return weapons.filter(w => {
      if (isVanillaDisabled && w.source === ContentLabels.Vanilla) {
        return false;
      }
      
      const tierIndex = (w.tier === Boss.PreBoss) ? -1 : progression.findIndex(p => p.step === w.tier);

      // test only
      //const certainBool = true;

      //if (certainBool) {
      //  if (tierIndex === -1) {
      //    return currentIndex === 0;
      //  }

      //  return tierIndex === currentIndex - 1;
      //}

      // end of test only

      let disappearIndex = progression.length; 

      const resetPoints = allMajorProgressionResetPoints.flatMap(r => r.resetPoints || []);

      for (const rp of resetPoints) {
        const rpIndex = progression.findIndex(p => p.step === rp.step);

        if (rpIndex > tierIndex) {
            disappearIndex = rpIndex;
            break;
        }
      }

      if (clearSwitch) {
        disappearIndex = progression.length;
      }

      return tierIndex < currentIndex && currentIndex <= disappearIndex;
    });
  }

  getWeapons(
    bannedMap: Record<string, boolean> = {},
    availableContent: { label: string; active: boolean }[]
  ): any[] {
    const filtered = this.getWeaponsByProgression(this.progression, this.currentStep, this.clearSwitch, bannedMap, availableContent);
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  getRandomWeapon(
    bannedMap: Record<string, boolean> = {},
    banSwitch: boolean,
    availableContent: { label: string; active: boolean }[]
  ): any {
    const availableList = this.getWeapons(bannedMap, availableContent).filter(element => !element.banned);

    if (availableList.length === 0) return {name: 'Copper Shortsword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss};

    const randomIndex = Math.floor(Math.random() * availableList.length);

    if(banSwitch){
      availableList[randomIndex].banned = true;
      bannedMap[availableList[randomIndex].name] = availableList[randomIndex].banned;
    }

    return availableList[randomIndex];
  }

  private applyCrossModChanges(
    weapons: any[],
    availableContent: { label: string; active: boolean }[]
  ): any[] 
  {
    const activeLabels = new Set(
      availableContent.filter(c => c.active).map(c => c.label)
    );

    const modifiedWeapons = [...weapons];

    for (const changeGroup of allWeaponChanges) {
      const isActive = changeGroup.requiredLabels.every(label => activeLabels.has(label));
      if (isActive) {
        for (const override of changeGroup.changes) {
          const index = modifiedWeapons.findIndex(w => w.name === override.name);
          if (index !== -1) {
            modifiedWeapons[index] = {
              ...modifiedWeapons[index],
              ...override
            };
          }
        }
      }
    }

    return modifiedWeapons;
  }
}