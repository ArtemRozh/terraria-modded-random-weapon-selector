import { Injectable } from '@angular/core';
import { allContent, ContentLabels, Boss, Calamityboss, StarsAboveBoss } from './data/progression.data';
import { Filter, Sort } from './data/filter.data';

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
    const state = {
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
    
    localStorage.setItem(this.storageKey, JSON.stringify(state));
  } 

  loadState() {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) return;

    try {
      const state = JSON.parse(raw);
      this._currentIndex = state.currentIndex || 0;
      this._availableContent = state.availableContent || [...allContent];
      this._progression = state.progression || [];
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

  arrayEquals(a:any[], b:any[]){
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }

    return true;
  }
}
