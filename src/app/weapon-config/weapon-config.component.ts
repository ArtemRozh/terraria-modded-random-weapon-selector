import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponDataService } from '../weapon-data.service';
import { WeaponSelectorStateService } from '../weapon-selector-state.service';
import { Filter, Sort } from '../data/filter.data';
import { FormsModule } from '@angular/forms';
import { Boss } from '../data/progression.data';

@Component({
  selector: 'app-weapon-config',
  imports: [CommonModule, FormsModule],
  templateUrl: './weapon-config.component.html',
  styleUrl: './weapon-config.component.css'
})
export class WeaponConfigComponent {
  availableWeapons: any[] = [];
  displayWeapons: any[] = [];

  bannedColor: string = '#b0392e';
  nonBannedColor:string = '#4faa5a';

  filterState: string = Filter.All;
  sortingState: string = Sort.Alphabet;
  isReverse: boolean = false;

  constructor(private weaponDataService: WeaponDataService,
      private selectorState: WeaponSelectorStateService
  ) {}

  getBackgroundColor(isBanned: boolean): string{
    if(isBanned){
      return this.bannedColor;
    } 

    return this.nonBannedColor;
  }

  changeDisplay(filter: string){
    switch(filter){
      case Filter.All:
        this.displayWeapons = [...this.availableWeapons];
        break;
      case Filter.Available:
        this.displayWeapons = [...this.availableWeapons].filter(weapon => (weapon.banned !== true));
        break;
      case Filter.Banned:
        this.displayWeapons = [...this.availableWeapons].filter(weapon => (weapon.banned !== false));
        break;
      default:
        this.displayWeapons = [...this.availableWeapons];
    }

    this.filterState = filter
    this.selectorState.filterState = this.filterState
  }

  changeSort(sort: string){
    const progression: { step: string }[] = this.selectorState.progression
    console.log(progression)

    // messy but eh
    switch(sort){
      case Sort.Alphabet:
        if(!this.isReverse){
          this.displayWeapons = [...this.displayWeapons].sort((a, b) => a.name.localeCompare(b.name));
        } 
        else{
          this.displayWeapons = [...this.displayWeapons].sort((a, b) => b.name.localeCompare(a.name));
        }
        break;
      case Sort.Progression:
        if (!this.isReverse) {
          this.displayWeapons = [...this.displayWeapons].sort(
            (a, b) =>
              this.getProgressionIndex(a, progression) -
              this.getProgressionIndex(b, progression)
          );
        } else {
          this.displayWeapons = [...this.displayWeapons].sort(
            (a, b) =>
              this.getProgressionIndex(b, progression) -
              this.getProgressionIndex(a, progression)
          );
        }
        break;
      default:
        this.displayWeapons = [...this.availableWeapons];
    }

    this.sortingState = sort
    this.selectorState.sortingState = this.sortingState
  }

  changeReverse(){
    this.changeSort(this.sortingState)
    this.selectorState.isReverse = this.isReverse
  }

  getProgressionIndex(
    weapon: any,
    progression: { step: string }[]
  ): number {
    if (weapon.tier === Boss.PreBoss) {
      return -1;
    }

    return progression.findIndex(p => p.step === weapon.tier);
  }

  searchFor(query: string){
    if(query === ""){
      this.changeDisplay(this.filterState)
      this.changeSort(this.sortingState)
      return
    }

    query = query.toLowerCase()

    this.changeDisplay(this.filterState)
    this.displayWeapons = [...this.displayWeapons].filter(weapon => (weapon.name.toLowerCase().includes(query)))
    this.changeSort(this.sortingState)
  }

  swapWeaponState(weapon: { banned: boolean; name: string; [key: string]: any }) {
    weapon.banned = !weapon.banned;

    const bannedMap = { ...this.selectorState.bannedWeaponsMap };
    bannedMap[weapon.name] = weapon.banned;
    this.selectorState.bannedWeaponsMap = bannedMap;

    const weaponIndex = this.availableWeapons.findIndex(w => w.name === weapon.name);
    if (weaponIndex !== -1) {
      this.availableWeapons[weaponIndex].banned = weapon.banned;
    }
  }

  ngOnInit(): void {
    this.availableWeapons = this.selectorState.availableWeapons;
    this.filterState = this.selectorState.filterState || Filter.All;
    this.sortingState = this.selectorState.sortingState || Sort.Alphabet;
    this.isReverse = this.selectorState.isReverse
    
    if (!this.availableWeapons || this.availableWeapons.length === 0) {
      this.availableWeapons = this.weaponDataService.getWeapons(this.selectorState.bannedWeaponsMap, this.selectorState.availableContent);
    }

    const bannedMap = this.selectorState.bannedWeaponsMap;
    this.availableWeapons = this.availableWeapons.map(weapon => ({
      ...weapon,
      banned: bannedMap[weapon.name] ?? false
    }));

    this.selectorState.availableWeapons = [...this.availableWeapons]; 
    
    this.availableWeapons = this.availableWeapons.sort((a, b) => a.name.localeCompare(b.name));
    this.displayWeapons = this.availableWeapons
    this.changeDisplay(this.filterState)
    this.changeSort(this.sortingState)
  }
}
