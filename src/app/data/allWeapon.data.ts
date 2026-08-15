import { ContentLabels } from "./progression.data";
import { vanillaWeaponData } from "./content/vanilla/weapon.data";
import { starsAboveWeaponData } from "./content/stars-above/starsAboveWeapon.data";
import { thoriumWeaponData } from "./content/thorium/thoriumWeapon.data";


export const allWeaponData=[
    {weapons: vanillaWeaponData, source: ContentLabels.Vanilla},
    {weapons: starsAboveWeaponData, source: ContentLabels.StarsAbove},
    {weapons: thoriumWeaponData, source: ContentLabels.Thorium},
];
