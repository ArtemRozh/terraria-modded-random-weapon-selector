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

export class WeaponSelectorComponent  { 
  availableWeapons: any[] = [];
  selectedWeapon: any = { name: "None" };
  currentIndex = 0;

  constructor(
    private weaponDataService: WeaponDataService,
    public selectorState: WeaponSelectorStateService
  ) {}

  get progression() {
    return this.selectorState.progression;
  }

  get availableToRollWeapons() {
    return this.availableWeapons.filter(el => el.banned !== true);
  }

  get rarityColorVar(): string {
    if (!this.selectedWeapon?.rarity) return 'var(--white-rarity)';
    
    const slug = this.selectedWeapon.rarity.toLowerCase().replace(/\s+/g, '-');
    return `var(--${slug}-rarity)`;
  }

  ngOnInit() {
    this.selectorState.loadState();

    if (!this.selectorState.progression || this.selectorState.progression.length === 0) {
        const initialProgression = vanillaProgression;
        console.log(vanillaProgression)
        this.selectorState.progression = initialProgression;
    }

    this.currentIndex = this.selectorState.currentIndex;
    this.selectedWeapon = this.selectorState.selectedWeapon;
    this.updateAvailableWeapons();
  }

  changeStep(offset: number) {
    const newIndex = this.currentIndex + offset;
    if (newIndex >= 0 && newIndex < this.progression.length) {
      this.currentIndex = newIndex;
      this.selectorState.currentIndex = this.currentIndex;
      this.updateAvailableWeapons();
    }
  }

  changeProgressionByInput(newIndex: string) {
    const index = Number(newIndex) - 1;
    if (index >= 0 && index < this.progression.length) {
      this.currentIndex = index;
      this.selectorState.currentIndex = index;
      this.updateAvailableWeapons();
    }
  }

  selectRandomWeapon() {
    this.selectedWeapon = this.weaponDataService.getRandomWeapon(
      this.progression,
      this.progression[this.currentIndex]?.step,
      this.selectorState.clearSwich,
      this.selectorState.bannedWeaponsMap,
      this.selectorState.banSwitch,
      this.selectorState.availableContent
    );
    this.selectorState.selectedWeapon = this.selectedWeapon;
    this.updateAvailableWeapons();
  }

  private updateAvailableWeapons() {
    this.availableWeapons = this.weaponDataService.getWeaponsByProgression(
      this.progression,
      this.progression[this.currentIndex]?.step,
      this.selectorState.clearSwich,
      this.selectorState.bannedWeaponsMap,
      this.selectorState.availableContent
    );
    this.selectorState.availableWeapons = this.availableWeapons;
  }
}