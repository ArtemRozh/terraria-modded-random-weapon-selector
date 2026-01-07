import { ContentLabels, Boss, Calamityboss, StarsAboveBoss } from "./progression.data";

export const calamityToVanillaWeaponChanges = [
    {name: 'Nights Edge', image: 'weapon-images/Vanilla/Default.png',  tier: Calamityboss.SlimeGod},
    {name: 'Excalibur', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBossRest},
    {name: 'Gungnir', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBossRest},
	{name: 'Light Disc', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBossRest},
	{name: 'Hallowed Repeater', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBossRest},
    {name: 'Super Star Shooter', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBossRest},
    {name: 'Durendal', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBossRest},
    {name: 'Hallowed Jousting Lance', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBossRest},
    {name: 'Zenith', image: 'weapon-images/Vanilla/Default.png',  tier: Calamityboss.Yharon},
	{name: 'Trimarang', image: 'weapon-images/Vanilla/Default.png',  tier: Calamityboss.DesertScourge},
	{name: 'Volcano', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},
	{name: 'Phoenix Blaster', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},
	{name: 'Imp Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},

	{name: 'Orichalcum Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},// Modified by calamity (?)
	{name: 'Orichalcum Halberd', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},// Modified by calamity (?)
	{name: 'Orichalcum Repeater', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},// Modified by calamity (?)
	{name: 'Titanium Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss2},// Modified by calamity (?)
	{name: 'Titanium Trident', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss2},// Modified by calamity (?)
	{name: 'Titanium Repeater', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss2},// Modified by calamity (?)
	{name: 'Mythril Halberd', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},// Modified by calamity (?)
	{name: 'Mythril Repeater', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},// Modified by calamity (?)
	{name: 'Mythril Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},// Modified by calamity (?)
	{name: 'Adamantite Repeater', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss2},// Modified by calamity (?)
	{name: 'Adamantite Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss2},// Modified by calamity (?)
	{name: 'Adamantite Glaive', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss2},// Modified by calamity (?)
	
    {name: 'Spirit Flame', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss2},//
];

export const calamityToStarsAboveWeaponChanges = [
	{name: 'Virtues Edge', image: 'weapon-images/StarsAbove/Default.png',  tier: Calamityboss.DOG},
	{name: 'Bury The Light', image: 'weapon-images/StarsAbove/Default.png',  tier: Calamityboss.Yharon},
	{name: 'Catalysts Memory', image: 'weapon-images/StarsAbove/Default.png',  tier: Calamityboss.Yharon},
	{name: 'Ultima Thule', image: 'weapon-images/StarsAbove/Default.png',  tier: Calamityboss.SupremeCababitas},
	{name: 'Vermilion Riposte', image: 'weapon-images/StarsAbove/Default.png',  tier: Calamityboss.Providence},
	{name: 'Hullwrought MK. II', image: 'weapon-images/StarsAbove/Default.png',  tier: Calamityboss.Providence},
	{name: 'Memento Muse', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MechBossRest},
	{name: 'Penthesileas Muse', image: 'weapon-images/StarsAbove/Default.png',  tier: Calamityboss.Providence},
	{name: 'Armaments of the Sky Striker', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MechBossRest},
	{name: 'Phasmasaber', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MechBossRest},
	{name: 'Sunset of the Sun God', image: 'weapon-images/StarsAbove/Default.png',  tier: Calamityboss.Yharon},
	{name: 'Cosmic Destroyer', image: 'weapon-images/StarsAbove/Default.png',  tier: Calamityboss.DOG},
	{name: 'Ride the Bull', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MechBossRest},
	{name: 'Seaborn Apalistik', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MechBossRest},
];

export const allWeaponChanges = [
    {changes: calamityToVanillaWeaponChanges, requiredLabels: [ContentLabels.Calamity]},
    {changes: calamityToStarsAboveWeaponChanges, requiredLabels: [ContentLabels.Calamity, ContentLabels.StarsAbove]},
];