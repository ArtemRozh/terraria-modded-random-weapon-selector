import { Injectable } from '@angular/core';
import { allContent, ContentLabels, Boss, Calamityboss, StarsAboveBoss } from './data/progression.data';
import { Filter, Sort } from './data/filter.data';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class WeaponSelectorStateService {
  private _currentIndex = 0;
  private _availableContent = [...allContent];
  private _progression: { step: string }[] = [];
  private _availableWeapons: any[] = [];
  private _selectedWeapon: {name: string; [key: string]: any} = { name: "None" };
  private _switch = false;
  private _clearSwich = false;
  private _banSwitch = false;
  private _bannedWeaponsMap: Record<string, boolean> = {};

  private _filterState: string = "";
  private _sortingState: string = "";
  private _isReverse: boolean = false;

  private storageKey = 'weaponSelectorState';

  // modernization block

  private legacyTags: string[] = [Boss.MechBoss1, Boss.MechBossRest, Calamityboss.Servant1, Calamityboss.ServantRest] 
  private replacementTags: string[] = [Boss.Destroyer, Boss.Twinks, Boss.Prime, Calamityboss.Signus, Calamityboss.Weaver, Calamityboss.Void]

  //

  get currentIndex() {
    return this._currentIndex;
  }
  set currentIndex(value: number) {
    this._currentIndex = value;
    this.saveState();
  }

  get availableContent() {
    return this._availableContent;
  }
  
  set availableContent(value: { label: ContentLabels; active: boolean }[]) {
    this._availableContent = value;
    this.saveState();
  }

  get progression() {
    return this._progression;
  }
  set progression(value: { step: string }[]) {
    this._progression = value;
    this.saveState();
  }
  
  get availableWeapons() {
    return this._availableWeapons;
  }
  set availableWeapons(value: any[]) {
    this._availableWeapons = value;
    this.saveState();
  }

  get selectedWeapon() {
    return this._selectedWeapon;
  }
  set selectedWeapon(value: {name: string; [key: string]: any}) {
    this._selectedWeapon = value;
    this.saveState();
  }

  get switch() {
    return this._switch;
  }
  set switch(value: boolean) {
    this._switch = value;
    this.saveState();
  }

  get isReverse() {
    return this._isReverse;
  }
  set isReverse(value: boolean) {
    this._isReverse = value;
    this.saveState();
  }

  get filterState() {
    return this._filterState;
  }
  
  set filterState(value: string) {
    this._filterState = value;
    this.saveState();
  }

  get sortingState() {
    return this._sortingState;
  }
  
  set sortingState(value: string) {
    this._sortingState = value;
    this.saveState();
  }

  get banSwitch() {
    return this._banSwitch;
  }
  set banSwitch(value: boolean) {
    this._banSwitch = value;
    this.saveState();
  }

  get bannedWeaponsMap() {
    return this._bannedWeaponsMap;
  }

  set bannedWeaponsMap(value: Record<string, boolean>) {
    this._bannedWeaponsMap = value;
    this.saveState();
  }

  get clearSwich() {
    return this._clearSwich;
  }

  set clearSwich(value: boolean) {
    this._clearSwich = value;
    this.saveState();
  }

  saveState() {
    const state = this.getState();
    
    localStorage.setItem(this.storageKey, JSON.stringify(state));
  } 

  loadState() {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) return;

    try {
      const state = JSON.parse(raw);
      this._currentIndex = state.currentIndex || 0;
      this._availableContent = state.availableContent || [...allContent];
      this._progression = this._progression = this.modernizeProgression(state.progression || []);
      this._selectedWeapon = state.selectedWeapon || { name: "None" };
      this._switch = state.switch || false;
      this._clearSwich = state.clearSwich || false;
      this._banSwitch = state.banSwitch || false;
      this._bannedWeaponsMap = state.bannedWeaponsMap || {};
      this._filterState = state.filterState || Filter.All;
      this.sortingState = state.sortingState || Sort.Alphabet;
      this.isReverse = state.isReverse || false;
    } catch (e) {
      console.warn('Failed to load saved state:', e);
    }
  }

  getState(){
    return {
        currentIndex: this._currentIndex,
        availableContent: this._availableContent,
        progression: this._progression,
        selectedWeapon: this._selectedWeapon,
        switch: this._switch,
        clearSwich: this._clearSwich,
        banSwitch: this._banSwitch,
        bannedWeaponsMap: this._bannedWeaponsMap,
        filterState: this._filterState,
        sortingState: this._sortingState,
        isReverse: this._isReverse
      };
  }

  saveStateToFile(){
    try {
      const state = this.getState();

      const json = JSON.stringify(state, null, 2);
      const blob = new Blob([json], { type: "application/json;charset=utf-8" });
      saveAs(blob, "weaponSelectorState.json");
    } catch (e) {
      alert("Failed to save state: " + e);
    }
  }

  loadStateFromFile(json: string): string | null {
    try {
      const parsed = JSON.parse(json);

      if (!parsed || typeof parsed !== 'object') {
        return 'Invalid file format: not an object';
      }

      const requiredKeys = [
        'currentIndex', 'availableContent', 'progression', 'selectedWeapon',
        'switch', 'clearSwich', 'banSwitch', 'bannedWeaponsMap',
        'filterState', 'sortingState', 'isReverse'
      ];

      for (const key of requiredKeys) {
        if (!(key in parsed)) {
          return `Invalid file format: missing key "${key}"`;
        }
      }


      this._currentIndex = parsed.currentIndex;
      this._availableContent = parsed.availableContent;
      this._progression = parsed.progression;
      this._selectedWeapon = parsed.selectedWeapon;
      this._switch = parsed.switch;
      this._clearSwich = parsed.clearSwich;
      this._banSwitch = parsed.banSwitch;
      this._bannedWeaponsMap = parsed.bannedWeaponsMap;
      this._filterState = parsed.filterState;
      this._sortingState = parsed.sortingState;
      this._isReverse = parsed.isReverse;

      this.saveState(); 
      
      return null;

    } catch (e: any) {
      return 'Failed to parse JSON: ' + (e.message || e.toString());
    }
  }

  arrayEquals(a:any[], b:any[]){
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }

    return true;
  }

  modernizeProgression(progression: { step: string }[]): { step: string }[] {
    const result: { step: string }[] = [];

    let replacedMechBoss = false;
    let replacedServant = false;

    for (const item of progression) {
      const step = item.step;

      if (
        step === Boss.MechBoss1 ||
        step === Boss.MechBossRest ||
        step === Calamityboss.Servant1 ||
        step === Calamityboss.ServantRest
      ) {
        if (step === Boss.MechBoss1 && !replacedMechBoss) {
          result.push(
            { step: this.replacementTags[0] },
            { step: this.replacementTags[1] },
            { step: this.replacementTags[2] }
          );
          replacedMechBoss = true;
        } else if (step === Calamityboss.Servant1 && !replacedServant) {
          result.push(
            { step: this.replacementTags[3] },
            { step: this.replacementTags[4] },
            { step: this.replacementTags[5] }
          );
          replacedServant = true;
        }
        continue;
      }

      result.push(item);
    }

    return result;
  }
}