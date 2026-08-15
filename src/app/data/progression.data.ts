import { starsAboveProgression } from "./content/stars-above/starsAboveProgression.data";
import { thoriumProgression } from "./content/thorium/thoriumProgression.data";
import { Boss } from "./content/vanilla/vanillaBoss.data";

export const enum ContentLabels{  // ensure that labels are the same in weapons.data and mod-weapon folder stuff
    Vanilla = "Vanilla",
    StarsAbove = "Stars Above",
    Thorium = "Thorium",
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
    { progression: starsAboveProgression, label: ContentLabels.StarsAbove },
    { progression: thoriumProgression, label: ContentLabels.Thorium },
]

export const allContent = [
    {label: ContentLabels.Vanilla, active: true}, 
    {label: ContentLabels.StarsAbove, active: false},
    {label: ContentLabels.Thorium, active: false}, 
    {label: ContentLabels.Vanilla, active: true, requires: ContentLabels.Vanilla}, // a dud, because breaks otherwise
]