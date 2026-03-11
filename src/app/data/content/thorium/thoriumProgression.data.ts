import { Boss } from "../vanilla/vanillaBoss.data";
import { ThoriumBoss } from "./thoriumBoss.data";

export const thoriumProgression: { step: string; after: string }[]  = [
    {step: ThoriumBoss.ThunderBird, after: Boss.PreBoss},
    {step: ThoriumBoss.QueenJelly, after: Boss.EvilBoss},
    {step: ThoriumBoss.Viscount, after: Boss.EvilBoss},
    {step: ThoriumBoss.GraniteStorm, after: Boss.Skeletron},
    {step: ThoriumBoss.BuriedChampion, after: Boss.Skeletron},
    {step: ThoriumBoss.StarScouter, after: Boss.Skeletron},
    {step: ThoriumBoss.BoreanStrider, after: Boss.WallOfFlesh},
    {step: ThoriumBoss.FallenBeholder, after: Boss.WallOfFlesh},
    {step: ThoriumBoss.Lich, after: Boss.MechBossRest},
    {step: ThoriumBoss.ForgottenOne, after: Boss.Golem},
    {step: ThoriumBoss.ThePrimordials, after: Boss.MoonLord},
]
