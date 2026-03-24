import { ContentLabels } from "./progression.data";
import { Calamityboss } from "./content/calamity/calamityBoss.data";
import { StarsAboveBoss } from "./content/stars-above/starsAboveBoss.data";
import { Boss } from "./content/vanilla/vanillaBoss.data";

export const calamityToVanillaWeaponChanges = [
    {name: 'Nights Edge', image: 'weapon-images/Vanilla/Default.png',  tier: [Calamityboss.SlimeGod]},
    {name: 'Zenith', image: 'weapon-images/Vanilla/Default.png',  tier: [Calamityboss.Yharon]},
	{name: 'Trimarang', image: 'weapon-images/Vanilla/Default.png',  tier: [Calamityboss.DesertScourge]},
];

export const calamityToStarsAboveWeaponChanges = [
	{name: 'Cosmic Destroyer', image: 'https://starsabovemod.wiki.gg/images/Cosmic_Destroyer.png?76c893', tier: [Calamityboss.DOG, StarsAboveBoss.Tsukiyomi], tags: [], class: 'Ranged', rarity: 'Red'},//
	{name: 'Sunset of the Sun God', image: 'https://starsabovemod.wiki.gg/images/Sunset_of_the_Sun_God.png?cf22a6', tier: [Calamityboss.Yharon, StarsAboveBoss.Tsukiyomi], tags: [], class: 'Melee', rarity: 'Red'},//
	{name: 'Penthesileas Muse', image: 'https://starsabovemod.wiki.gg/images/Penthesilea%27s_Muse.png?f6be7d', tier: [StarsAboveBoss.Penthesilea, Calamityboss.Providence], tags: [], class: 'Melee', rarity: 'Red'},//
	{name: 'Hullwrought MK. II', image: 'https://starsabovemod.wiki.gg/images/Hullwrought_MK._II.png?a15508', tier: [StarsAboveBoss.Vagrant, Calamityboss.Providence], tags: [], class: 'Melee', rarity: 'Red'},//
	{name: 'Vermilion Riposte', image: 'https://starsabovemod.wiki.gg/images/thumb/Vermilion_Riposte.png/172px-Vermilion_Riposte.png?69415d', tier: [Calamityboss.Providence, StarsAboveBoss.WarriorOfLight], tags: [], class: 'Mystic', rarity: 'Red'},//
	{name: 'Ultima Thule', image: 'https://starsabovemod.wiki.gg/images/thumb/Ultima_Thule.png/210px-Ultima_Thule.png?5f2d46', tier: [Calamityboss.SupremeCababitas, StarsAboveBoss.Tsukiyomi], tags: [], class: 'Celestial', rarity: 'Rainbow'},//
	{name: 'Catalysts Memory', image: 'https://starsabovemod.wiki.gg/images/Catalyst%27s_Memory.png?ff68c2', tier: [Boss.Empress, Calamityboss.Yharon], tags: [], class: 'Celestial', rarity: 'Red'},//
	{name: 'Bury The Light', image: 'https://starsabovemod.wiki.gg/images/Bury_The_Light.png?911032', tier: [Boss.KingSlime, Boss.EyeOfCthulhu, Boss.EvilBoss, Boss.QueenBee, Boss.Deerclops, Boss.Skeletron, Boss.WallOfFlesh, Boss.QueenSlime, Boss.Destroyer, Boss.Twinks, Boss.Prime, Boss.Plantera, Boss.Golem, Boss.Duke, Boss.Empress, Boss.MoonLord, Calamityboss.Yharon, StarsAboveBoss.WarriorOfLight], tags: [], class: 'Celestial', rarity: 'Rainbow'},//
	{name: 'Virtues Edge', image: 'https://starsabovemod.wiki.gg/images/thumb/Virtue%27s_Edge.png/49px-Virtue%27s_Edge.png?6e998a', tier: [Calamityboss.DOG], tags: [], class: 'Celestial', rarity: 'Red'},//
];

export const allWeaponChanges = [
    {changes: calamityToVanillaWeaponChanges, requiredLabels: [ContentLabels.Calamity]},
    {changes: calamityToStarsAboveWeaponChanges, requiredLabels: [ContentLabels.Calamity, ContentLabels.StarsAbove]},
];