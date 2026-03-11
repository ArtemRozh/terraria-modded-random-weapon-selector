import { ContentLabels } from "./progression.data";
import { vanillaWeaponData } from "./content/vanilla/weapon.data";
import { calamityWeaponData } from "./content/calamity/calamityWeapon.data";
import { starsAboveWeaponData } from "./content/stars-above/starsAboveWeapon.data";
import { infernumWeaponData } from "./content/calamity-infernum/infernumWeapon.data";
import { thoriumWeaponData } from "./content/thorium/thoriumWeapon.data";


export const allWeaponData=[
    {weapons: vanillaWeaponData, source: ContentLabels.Vanilla},
    {weapons: calamityWeaponData, source: ContentLabels.Calamity},
    {weapons: starsAboveWeaponData, source: ContentLabels.StarsAbove},
    {weapons: infernumWeaponData, source: ContentLabels.CalamityInfernum},
    {weapons: thoriumWeaponData, source: ContentLabels.Thorium},
];
