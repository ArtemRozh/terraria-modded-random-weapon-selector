import { Calamityboss } from "../calamity/calamityBoss.data";
import { Boss } from "../vanilla/vanillaBoss.data";
import { InfernumBoss } from "./infernumBoss.data";

export const infernumProgression: { step: string; after: string }[]  = [
    {step: InfernumBoss.BereftVassal, after: Boss.Cultist},
    {step: InfernumBoss.PrimordialWyrm, after: Calamityboss.Yharon},
]
