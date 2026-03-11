import { Boss } from "../vanilla/vanillaBoss.data";
import { Calamityboss } from "./calamityBoss.data";

export const calamityProgression = [
    {step: Calamityboss.DesertScourge, after: Boss.KingSlime},
    {step: Calamityboss.Crabulon, after: Boss.EyeOfCthulhu},
    {step: Calamityboss.CalamityEvil, after: Boss.EvilBoss},
    {step: Calamityboss.SlimeGod, after: Boss.Skeletron},
    {step: Calamityboss.Cryogen, after: Boss.QueenSlime},
    {step: Calamityboss.AquaticScourge, after: Boss.Destroyer},
    {step: Calamityboss.Brimstone, after: Calamityboss.AquaticScourge},
    {step: Calamityboss.CababitasClone, after: Boss.Prime},
    {step: Calamityboss.Leviathan, after: Boss.Plantera},
    {step: Calamityboss.AstrumAureus, after: Calamityboss.Leviathan},
    {step: Calamityboss.Plaguebringer, after: Boss.Duke},
    {step: Calamityboss.Ravager, after: Boss.Empress},
    {step: Calamityboss.AstrumDeus, after: Boss.Cultist},
    {step: Calamityboss.ProfanedGuardians, after: Boss.MoonLord},
    {step: Calamityboss.Dragonfly, after: Calamityboss.ProfanedGuardians},
    {step: Calamityboss.Providence, after: Calamityboss.Dragonfly},

    //{step: Calamityboss.Servant1, after: Calamityboss.Providence},
    //{step: Calamityboss.ServantRest, after: Calamityboss.Servant1},
    
    {step: Calamityboss.Weaver, after: Calamityboss.Providence},
    {step: Calamityboss.Signus, after: Calamityboss.Weaver},
    {step: Calamityboss.Void, after: Calamityboss.Signus},
    
    //{step: Calamityboss.Polterghast, after: Calamityboss.ServantRest},
    {step: Calamityboss.Polterghast, after: Calamityboss.Void},

    {step: Calamityboss.OldPuke, after: Calamityboss.Polterghast},
    {step: Calamityboss.DOG, after: Calamityboss.OldPuke},
    {step: Calamityboss.Yharon, after: Calamityboss.DOG},
    {step: Calamityboss.ExoMechs, after: Calamityboss.Yharon},
    {step: Calamityboss.SupremeCababitas, after: Calamityboss.ExoMechs},
    {step: Calamityboss.BossRush, after: Calamityboss.SupremeCababitas},
];