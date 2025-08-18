import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponDataService } from '../weapon-data.service';
import { WeaponSelectorStateService } from '../weapon-selector-state.service';

@Component({
  selector: 'app-weapon-config',
  imports: [CommonModule],
  templateUrl: './weapon-config.component.html',
  styleUrl: './weapon-config.component.css'
})
export class WeaponConfigComponent {
  availableWeapons: any[] = [];
  bannedColor: string = '#b0392e';
  nonBannedColor:string = '#4faa5a';

  constructor(private weaponDataService: WeaponDataService,
      private selectorState: WeaponSelectorStateService
  ) {}

  getBackgroundColor(isBanned: boolean): string{
    if(isBanned){
      return this.bannedColor;
    } 

    return this.nonBannedColor;
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
  }
}
