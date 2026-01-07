import { Injectable } from '@angular/core';
import { allWeaponData } from './data/weapon.data';
import { allContent, ContentLabels, Boss, allMajorProgressionResetPoints, Calamityboss } from './data/progression.data';
import { allWeaponChanges } from './data/crossModSupport.data';
import seedrandom from 'seedrandom';

@Injectable({
  providedIn: 'root'
})
export class WeaponDataService {
  // related bosses
  private mechBosses: string[] = [ Boss.Destroyer, Boss.Twinks, Boss.Prime ]
  private mechBossesTags: string[] = [Boss.MechBoss1, Boss.MechBoss2, Boss.MechBossRest]

  private calamityServants: string[] = [ Calamityboss.Signus, Calamityboss.Weaver, Calamityboss.Void ]
  private calamityServantsTags: string[] = [Calamityboss.PostServants]


  constructor() {
  }

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
      
      let tierIndex = (w.tier === Boss.PreBoss) ? -1 : progression.findIndex(p => p.step === w.tier);

      if(this.mechBossesTags.includes(w.tier) || this.calamityServantsTags.includes(w.tier)) {
        tierIndex = this.getRelatedBossesTier(progression, w.tier)
      }

      // test only
      // const certainBool = true;

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

  getRelatedBossesTier(progression: { step: string }[], tier: string): number {
    // vanilla helper and modded helper
    const helperArray: string|any = []

    // filling the array with steps, if any new needed add condition here
    for (const prog of progression) {
      if(this.mechBosses.includes(prog.step) || this.calamityServants.includes(prog.step)){
        helperArray.push(prog.step)
      }
    }

    // finding the last step, if any new needed add another if here
    for (let i = helperArray.length - 1; i >= 0; i--){
      if(tier === this.mechBossesTags[2] && this.mechBosses.includes(helperArray[i])) {
        return progression.findIndex(p => p.step === helperArray[i]);
      } 

      if(tier === this.calamityServantsTags[0] && this.calamityServants.includes(helperArray[i])) {
        return progression.findIndex(p => p.step === helperArray[i]);
      }
    }

    // finding first or second step, if any new needed add another ifs here
    let helperCount = 0
    for(const prog of helperArray){
      if(tier === this.mechBossesTags[0] && this.mechBosses.includes(prog)) {
        return progression.findIndex(p => p.step === prog);
      } 

      if(tier === this.mechBossesTags[1] && this.mechBosses.includes(prog)) {
        if(helperCount === 1) {
          return progression.findIndex(p => p.step === prog);
        }
        helperCount++
      } 
    }

    return -1
  }

  getRandomWeapon(
    progression: { step: string }[],
    currentStep: string,
    clearSwitch: boolean,
    bannedMap: Record<string, boolean>,
    banSwitch: boolean,
    availableContent: { label: string; active: boolean }[]
  ): any {
    const availableList = this.getWeaponsByProgression(
      progression,
      currentStep,
      clearSwitch,
      bannedMap,
      availableContent
    ).filter(w => !w.banned);

    if (availableList.length === 0) return {name: 'Copper Shortsword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss};

    const date1 = new Date("6969-06-09T00:00:00Z");
    const date2 = new Date()

    const dateDiff = date1.getTime() - date2.getTime();
    const randomToken = "final_update_" + Math.floor(Math.random() * 200);

    const finalSeed = `${dateDiff}-${randomToken}`;

    console.log(finalSeed);
    
    const rng = seedrandom(finalSeed);
    const randomIndex = Math.floor(rng() * availableList.length);

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