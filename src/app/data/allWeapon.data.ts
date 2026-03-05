import { ContentLabels } from "./progression.data";
import { vanillaWeaponData } from "./weapon.data";
import { calamityWeaponData } from "./mod-weapon/calamityWeapon.data";
import { starsAboveWeaponData } from "./mod-weapon/starsAboveWeapon.data";


export const allWeaponData=[
    {weapons: vanillaWeaponData, source: ContentLabels.Vanilla},
    {weapons: calamityWeaponData, source: ContentLabels.Calamity},
    {weapons: starsAboveWeaponData, source: ContentLabels.StarsAbove}
];
