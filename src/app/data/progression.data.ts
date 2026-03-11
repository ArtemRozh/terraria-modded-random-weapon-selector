import { infernumProgression } from "./content/calamity-infernum/infernumProgression.data";
import { calamityProgression } from "./content/calamity/calamityProgression.data";
import { starsAboveProgression } from "./content/stars-above/starsAboveProgression.data";
import { thoriumProgression } from "./content/thorium/thoriumProgression.data";
import { Boss } from "./content/vanilla/vanillaBoss.data";

export const enum ContentLabels{  // ensure that labels are the same in weapons.data and mod-weapon folder stuff
    Vanilla = "Vanilla",
    Calamity = "Calamity",
    StarsAbove = "Stars Above",
    Thorium = "Thorium",
    CalamityInfernum = "Calamity Infernum"
}

// progression reset points
export const vanillaMajorProgressionResetPoints = [
    {step: Boss.WallOfFlesh},
    {step: Boss.MoonLord}
]

export const allMajorProgressionResetPoints = [
    {resetPoints: vanillaMajorProgressionResetPoints}
]

// Here goes all modded progressions
export const allModdedProgression = [
    { progression: calamityProgression, label: ContentLabels.Calamity },
    { progression: starsAboveProgression, label: ContentLabels.StarsAbove },
    { progression: infernumProgression, label: ContentLabels.CalamityInfernum },
    { progression: thoriumProgression, label: ContentLabels.Thorium },
]

export const allContent = [
    {label: ContentLabels.Vanilla, active: true}, 
    {label: ContentLabels.Calamity, active: false}, 
    {label: ContentLabels.StarsAbove, active: false},
    {label: ContentLabels.CalamityInfernum, active: false, requires: ContentLabels.Calamity}, 
    {label: ContentLabels.Thorium, active: false}, 
]