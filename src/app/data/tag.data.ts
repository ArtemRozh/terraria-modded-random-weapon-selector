import { Boss } from "./content/vanilla/vanillaBoss.data";

export const enum VanillaTag {
    Corruption = "Corruption",
    Crimson = "Crimson",
    FinalUpdate = "1.4.4.5 Content"
}

export const enum CalamityTag {
    PreBossHellstone = "Reaver Shark Victim",
    MythrilOrichalcum = "Mech Boss 1 Victim",
    TitaniumAdamantite = "Mech Boss 2 Victim",
    Hollow = "Mech Boss Rest Victim",
}

export const CalamityTagReplacer = [
    {tag: CalamityTag.PreBossHellstone, replacedTier: Boss.EvilBoss, tierToReplace: Boss.PreBoss},
    {tag: CalamityTag.MythrilOrichalcum, replacedTier: Boss.MechBoss1, tierToReplace: Boss.WallOfFlesh},
    {tag: CalamityTag.TitaniumAdamantite, replacedTier: Boss.MechBoss2, tierToReplace: Boss.WallOfFlesh},
    {tag: CalamityTag.Hollow, replacedTier: Boss.MechBossRest, tierToReplace: Boss.MechBoss1},
]

export const enum StarsAboveTag {
    Eridani = "Eridani",
    Asphodene = "Asphodene"
}