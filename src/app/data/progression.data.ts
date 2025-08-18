export const enum Boss {
    PreBoss = "Pre boss",
    KingSlime = "King Slime",
    EyeOfCthulhu = "Eye of Cthulhu",
    EvilBoss = "Evil Boss",
    QueenBee = "Queen Bee",
    Deerclops = "Deerclops",
    Skeletron = "Skeletron",
    WallOfFlesh = "Wall of Flesh",
    QueenSlime = "Queen Slime",
    
    MechBoss1 = "1st Mech Boss",
    MechBossRest = "Rest Mech Bosses",

    Plantera = "Plantera",
    Golem = "Golem",
    Duke = "Duke Fishron",
    Empress = "Empress of Light",
    Cultist = "Lunatic Cultist",
    MoonLord = "Moon lord",

    FirstMech = "FirstMech",

    Destroyer = "The Destroyer",
    Twinks = "The Twins",
    Prime = "Skeletron Prime",

    MechRest = "PostMech",

}

export const enum Calamityboss{
    DesertScourge = "Desert Scourge",
    Crabulon = "Crabulon",
    CalamityEvil = "Hive Mind or Perforators",
    SlimeGod = "The Slime God",
    Cryogen = "Cryogen",
    AquaticScourge = "Aquatic Scourge",
    Brimstone = "Brimstone Elemental",
    CababitasClone = "Calamitas Clone",
    Leviathan = "Leviathan and Anahita",
    AstrumAureus = "Astrum Aureus",
    Plaguebringer = "The Plaguebringer Goliath",
    Ravager = "Ravager",
    AstrumDeus = "Astrum Deus",
    ProfanedGuardians = "Profaned Guardians",
    Dragonfly = "Dragonfolly",
    Providence = "Providence, the Profaned Goddess",


    Polterghast = "Polterghast",    
    OldPuke = "The Old Duke",
    DOG = "The Devourer of Gods",
    Yharon = "Yharon, Dragon of Rebirth",
    ExoMechs = "Exo Mechs",
    SupremeCababitas = "Supreme Witch, Calamitas",
    BossRush = "End Game (Boss Rush, etc.)",

    Servant1 = "1st Servant of The Scourge",
    ServantRest = "Rest Servants of The Scourge",

    
    FirstServant = "PreServants",
    Weaver = "Storm Weaver",  
    Void = "Ceaseless Void", 
    Signus = "Signus, Envoy of the Devourer", 
    PostServants = "PostServants",
}

export const enum StarsAboveBoss{
    Vagrant = "The Vagrant of Space and Time",
    Thespian = "Thespian, the Act of Alchemy",
    Dioskouroi = "Dioskouroi, the Twin Forces",
    Penthesilea = "Penthesilea, the Witch of Ink",
    WaifuDuo = "Asphodene and Eridani",
    Nalhaun = "Nalhaun, The Burnished King",
    Arbitration = "Arbitration",
    WarriorOfLight = "The Warrior Of Light",
    Tsukiyomi = "Tsukiyomi, the First Starfarer"
}

export const enum ContentLabels{  // ensure that labels are the same in weapons.json
    Vanilla = "Vanilla",
    Calamity = "Calamity",
    StarsAbove = "Stars Above"
}

export const vanillaProgression = [
    {step: Boss.KingSlime},
    {step: Boss.EyeOfCthulhu},
    {step: Boss.EvilBoss},
    {step: Boss.QueenBee},
    {step: Boss.Deerclops},
    {step: Boss.Skeletron},
    {step: Boss.WallOfFlesh},
    {step: Boss.QueenSlime},

    {step: Boss.MechBoss1},
    {step: Boss.MechBossRest},

    {step: Boss.Plantera},
    {step: Boss.Golem},
    {step: Boss.Duke},
    {step: Boss.Empress},
    {step: Boss.Cultist},
    {step: Boss.MoonLord}
];

export const calamityProgression = [
    {step: Calamityboss.DesertScourge, after: Boss.KingSlime},
    {step: Calamityboss.Crabulon, after: Boss.EyeOfCthulhu},
    {step: Calamityboss.CalamityEvil, after: Boss.EvilBoss},
    {step: Calamityboss.SlimeGod, after: Boss.Skeletron},
    {step: Calamityboss.Cryogen, after: Boss.QueenSlime},
    {step: Calamityboss.AquaticScourge, after: Boss.MechBoss1},
    {step: Calamityboss.Brimstone, after: Calamityboss.AquaticScourge},
    {step: Calamityboss.CababitasClone, after: Boss.MechBossRest},
    {step: Calamityboss.Leviathan, after: Boss.Plantera},
    {step: Calamityboss.AstrumAureus, after: Calamityboss.Leviathan},
    {step: Calamityboss.Plaguebringer, after: Boss.Duke},
    {step: Calamityboss.Ravager, after: Boss.Empress},
    {step: Calamityboss.AstrumDeus, after: Boss.Cultist},
    {step: Calamityboss.ProfanedGuardians, after: Boss.MoonLord},
    {step: Calamityboss.Dragonfly, after: Calamityboss.ProfanedGuardians},
    {step: Calamityboss.Providence, after: Calamityboss.Dragonfly},

    {step: Calamityboss.Servant1, after: Calamityboss.Providence},
    {step: Calamityboss.ServantRest, after: Calamityboss.Servant1},

    {step: Calamityboss.Polterghast, after: Calamityboss.ServantRest},
    {step: Calamityboss.OldPuke, after: Calamityboss.Polterghast},
    {step: Calamityboss.DOG, after: Calamityboss.OldPuke},
    {step: Calamityboss.Yharon, after: Calamityboss.DOG},
    {step: Calamityboss.ExoMechs, after: Calamityboss.Yharon},
    {step: Calamityboss.SupremeCababitas, after: Calamityboss.ExoMechs},
    {step: Calamityboss.BossRush, after: Calamityboss.SupremeCababitas},
];

export const starsAboveProgression: { step: string; after: string }[]  = [
    {step: StarsAboveBoss.Vagrant, after: Boss.EyeOfCthulhu},
    {step: StarsAboveBoss.Thespian, after: Boss.EvilBoss},
    {step: StarsAboveBoss.Dioskouroi, after: Boss.Skeletron},
    {step: StarsAboveBoss.Penthesilea, after: Boss.Plantera},
    {step: StarsAboveBoss.WaifuDuo, after: StarsAboveBoss.Penthesilea},
    {step: StarsAboveBoss.Nalhaun, after: Boss.Golem},
    {step: StarsAboveBoss.Arbitration, after: Boss.Empress},
    {step: StarsAboveBoss.WarriorOfLight, after: Boss.MoonLord},
    {step: StarsAboveBoss.Tsukiyomi, after: StarsAboveBoss.WarriorOfLight},
]

// Add new if needed

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
]

export const allContent = [
    {label: ContentLabels.Vanilla, active: true}, 
    {label: ContentLabels.Calamity, active: true}, 
    {label: ContentLabels.StarsAbove, active: true}
]