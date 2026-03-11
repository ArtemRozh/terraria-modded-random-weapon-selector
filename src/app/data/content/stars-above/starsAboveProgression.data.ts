import { Boss } from "../vanilla/vanillaBoss.data";
import { StarsAboveBoss } from "./starsAboveBoss.data";

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
