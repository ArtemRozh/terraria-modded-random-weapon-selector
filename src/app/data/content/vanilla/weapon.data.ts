import { VanillaTag } from "../../tag.data";
import { Boss } from "./vanillaBoss.data";

export const vanillaWeaponData = [
    {name: 'Iron Broadsword', image: 'https://terraria.wiki.gg/images/Iron_Broadsword.png?b2b3bd',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},// (?) is when its modified, but Idk if i need to change
    {name: 'Iron Shortsword', image: 'https://terraria.wiki.gg/images/Iron_Shortsword.png?64e97b',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Wooden Sword', image: 'https://terraria.wiki.gg/images/Wooden_Sword.png?7b2018',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Wooden Bow', image: 'https://terraria.wiki.gg/images/Wooden_Bow.png?f0c400',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Shuriken', image: 'https://terraria.wiki.gg/images/Shuriken.png?b67e3d',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Demon Bow', image: 'https://terraria.wiki.gg/images/Demon_Bow.png?914ed9',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Blue'},//
    {name: 'Lights Bane', image: 'https://terraria.wiki.gg/images/Light%27s_Bane.png?7932b6',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'}, //
    {name: 'Enchanted Boomerang', image: 'https://terraria.wiki.gg/images/Enchanted_Boomerang.png?56c041',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Vilethorn', image: 'https://terraria.wiki.gg/images/Vilethorn.png?187463',  tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
    {name: 'Starfury', image: 'https://terraria.wiki.gg/images/Starfury.png?e01256',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Green'},//
    {name: 'Flintlock Pistol', image: 'https://terraria.wiki.gg/images/Flintlock_Pistol.png?510e16',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Blue'},//
    {name: 'Musket', image: 'https://terraria.wiki.gg/images/Musket.png?11d540',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Blue'},//
    {name: 'Minishark', image: 'https://terraria.wiki.gg/images/Minishark.png?1a8a90',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Green'},//
    {name: 'Iron Bow', image: 'https://terraria.wiki.gg/images/Iron_Bow.png?70a75f',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Flower of Fire', image: 'https://terraria.wiki.gg/images/Flower_of_Fire.png?515566',  tier: [Boss.Skeletron], tags: [], class: 'Magic', rarity: 'Orange'},//
    {name: 'Magic Missile', image: 'https://terraria.wiki.gg/images/Magic_Missile.png?249740',  tier: [Boss.Skeletron], tags: [], class: 'Magic', rarity: 'Green'},//
    {name: 'Flamarang', image: 'https://terraria.wiki.gg/images/Flamarang.png?615f9d',  tier: [Boss.EvilBoss], tags: [], class: 'Melee', rarity: 'Orange'},//
    {name: 'Molten Fury', image: 'https://terraria.wiki.gg/images/Molten_Fury.png?682784',  tier: [Boss.EvilBoss], tags: [], class: 'Ranged', rarity: 'Orange'},//
    {name: 'Volcano', image: 'https://terraria.wiki.gg/images/Volcano.png?e0c908',  tier: [Boss.EvilBoss], tags: [], class: 'Melee', rarity: 'Orange'},// Calamity reaver shark buff
    {name: 'Space Gun', image: 'https://terraria.wiki.gg/images/Space_Gun.png?298a4d',  tier: [Boss.EvilBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
    {name: 'Bone', image: 'https://terraria.wiki.gg/images/Bone.png?6eb4f7',  tier: [Boss.Skeletron], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Muramasa', image: 'https://terraria.wiki.gg/images/Muramasa.png?3f0467',  tier: [Boss.Skeletron], tags: [], class: 'Melee', rarity: 'Green'},//
    {name: 'Aqua Scepter', image: 'https://terraria.wiki.gg/images/Aqua_Scepter.png?8a3c62',  tier: [Boss.Skeletron], tags: [], class: 'Magic', rarity: 'Green'},//
    {name: 'Harpoon', image: 'https://terraria.wiki.gg/images/Harpoon.png?3c8086',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Green'},//
    {name: 'Spiky Ball', image: 'https://terraria.wiki.gg/images/Spiky_Ball.png?875d21',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Ball O Hurt', image: 'https://terraria.wiki.gg/images/Ball_O%27_Hurt.png?f7ad2a',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Blue Moon', image: 'https://terraria.wiki.gg/images/Blue_Moon.png?5231d4',  tier: [Boss.Skeletron], tags: [], class: 'Melee', rarity: 'Green'},//
    {name: 'Handgun', image: 'https://terraria.wiki.gg/images/Handgun.png?9ef39c',  tier: [Boss.Skeletron], tags: [], class: 'Ranged', rarity: 'Green'},//
    {name: 'Water Bolt', image: 'https://terraria.wiki.gg/images/Water_Bolt.png?8f25bf',  tier: [Boss.Skeletron], tags: [], class: 'Magic', rarity: 'Green'},//
    {name: 'Breathing Reed', image: 'https://terraria.wiki.gg/images/Breathing_Reed.png?6e447c',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Blade of Grass', image: 'https://terraria.wiki.gg/images/Blade_of_Grass.png?b18050',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Orange'},//
    {name: 'Thorn Chakram', image: 'https://terraria.wiki.gg/images/Thorn_Chakram.png?68c31c',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Orange'},//
    {name: 'Star Cannon', image: 'https://terraria.wiki.gg/images/Star_Cannon.png?eb100d',  tier: [Boss.EvilBoss], tags: [], class: 'Ranged', rarity: 'Green'},//
    {name: 'Phaseblade (Any)', image: 'weapon-images/Vanilla/Default.png',  tier: [Boss.EvilBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Flamelash', image: 'https://terraria.wiki.gg/images/Flamelash.png?fc6def',  tier: [Boss.Skeletron], tags: [], class: 'Magic', rarity: 'Orange'},//
    {name: 'Phoenix Blaster', image: 'https://terraria.wiki.gg/images/Phoenix_Blaster.png?508d6f',  tier: [Boss.Skeletron], tags: [], class: 'Ranged', rarity: 'Orange'},// Calamity reaver shark buff
    {name: 'Sunfury', image: 'https://terraria.wiki.gg/images/Sunfury.png?f032d3',  tier: [Boss.Skeletron], tags: [], class: 'Melee', rarity: 'Orange'},//
    {name: 'Sandgun', image: 'https://terraria.wiki.gg/images/Sandgun.png?56f492',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Green'},//
    {name: 'Demon Scythe', image: 'https://terraria.wiki.gg/images/Demon_Scythe.png?1d979b',  tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Orange'},//
    {name: 'Nights Edge', image: 'https://terraria.wiki.gg/images/Night%27s_Edge.png?464d44',  tier: [Boss.Skeletron], tags: [], class: 'Melee', rarity: 'Orange'},// Modified by calamity
    {name: 'Dark Lance', image: 'https://terraria.wiki.gg/images/Dark_Lance.png?e430f2',  tier: [Boss.Skeletron], tags: [], class: 'Melee', rarity: 'Orange'},//
    {name: 'Trident', image: 'https://terraria.wiki.gg/images/Trident.png?c9be64',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Throwing Knife', image: 'https://terraria.wiki.gg/images/Throwing_Knife.png?d5ae98',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Spear', image: 'https://terraria.wiki.gg/images/Spear.png?4e2e3d',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Blowpipe', image: 'https://terraria.wiki.gg/images/Blowpipe.png?b6da50',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Wooden Boomerang', image: 'https://terraria.wiki.gg/images/Wooden_Boomerang.png?fc4a4a',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Poisoned Knife', image: 'https://terraria.wiki.gg/images/Poisoned_Knife.png?5a6429',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Excalibur', image: 'https://terraria.wiki.gg/images/Excalibur.png?710f8b',  tier: [Boss.MechBoss1], tags: [], class: 'Melee', rarity: 'Pink'},// Modified by calamity
    {name: 'Dao of Pow', image: 'https://terraria.wiki.gg/images/Dao_of_Pow.png?29b047',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Pink'},//
    {name: 'Mythril Halberd', image: 'https://terraria.wiki.gg/images/Mythril_Halberd.png?93410e',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},// Modified by calamity (?)
    {name: 'Adamantite Glaive', image: 'https://terraria.wiki.gg/images/Adamantite_Glaive.png?ddff67',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},// Modified by calamity (?)
    {name: 'Breaker Blade', image: 'https://terraria.wiki.gg/images/Breaker_Blade.png?34e7fa',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},//
    {name: 'Clockwork Assault Rifle', image: 'https://terraria.wiki.gg/images/Clockwork_Assault_Rifle.png?1079d8',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Red'},//
    {name: 'Cobalt Repeater', image: 'https://terraria.wiki.gg/images/Cobalt_Repeater.png?84766c',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Red'},// Modified by calamity (?)
    {name: 'Mythril Repeater', image: 'https://terraria.wiki.gg/images/Mythril_Repeater.png?74326d',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Red'},// Modified by calamity (?)
    {name: 'Adamantite Repeater', image: 'https://terraria.wiki.gg/images/Adamantite_Repeater.png?f46139',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Red'},// Modified by calamity (?)
    {name: 'Adamantite Sword', image: 'https://terraria.wiki.gg/images/Adamantite_Sword.png?482ae4',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},// Modified by calamity (?)
    {name: 'Cobalt Sword', image: 'https://terraria.wiki.gg/images/Cobalt_Sword.png?15208c',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},// Modified by calamity (?)
    {name: 'Mythril Sword', image: 'https://terraria.wiki.gg/images/Mythril_Sword.png?9911ef',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},// Modified by calamity (?)
    {name: 'Ruler', image: 'https://terraria.wiki.gg/images/Ruler.png?528bdc',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Magical Harp', image: 'https://terraria.wiki.gg/images/Magical_Harp.png?95117d',  tier: [Boss.Twinks], tags: [], class: 'Magic', rarity: 'Pink'},// Mech soul weapon
    {name: 'Rainbow Rod', image: 'https://terraria.wiki.gg/images/Rainbow_Rod.png?2729d9',  tier: [Boss.Twinks], tags: [], class: 'Magic', rarity: 'Pink'},// Mech soul weapon
    {name: 'Ice Rod', image: 'https://terraria.wiki.gg/images/Ice_Rod.png?c8c96e',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Light Red'},//
    {name: 'Flamethrower', image: 'https://terraria.wiki.gg/images/Flamethrower.png?13c55b',  tier: [Boss.Prime], tags: [], class: 'Ranged', rarity: 'Pink'},// Mech soul weapon
    {name: 'Laser Rifle', image: 'https://terraria.wiki.gg/images/Laser_Rifle.png?9cb6c4',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Light Red'},//
    {name: 'Magic Dagger', image: 'https://terraria.wiki.gg/images/Magic_Dagger.png?87a45a',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Light Red'},// Possibly modified by calamity
    {name: 'Crystal Storm', image: 'https://terraria.wiki.gg/images/Crystal_Storm.png?abc018',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Light Red'},//
    {name: 'Cursed Flames', image: 'https://terraria.wiki.gg/images/Cursed_Flames.png?558ab7',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Light Red'},//
    {name: 'Megashark', image: 'https://terraria.wiki.gg/images/Megashark.png?536f44',  tier: [Boss.Destroyer], tags: [], class: 'Ranged', rarity: 'Pink'},// Mech soul weapon
    {name: 'Shotgun', image: 'https://terraria.wiki.gg/images/Shotgun.png?889d80',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Red'},//
    {name: 'Cobalt Naginata', image: 'https://terraria.wiki.gg/images/Cobalt_Naginata.png?440bce',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},// Modified by calamity (?)
    {name: 'Gungnir', image: 'https://terraria.wiki.gg/images/Gungnir.png?12c74f',  tier: [Boss.MechBoss1], tags: [], class: 'Melee', rarity: 'Pink'},// Modified by calamity
    {name: 'Light Disc', image: 'https://terraria.wiki.gg/images/Light_Disc.png?44fc04',  tier: [Boss.MechBoss1], tags: [], class: 'Melee', rarity: 'Pink'},// Modified by calamity
    {name: 'Hallowed Repeater', image: 'https://terraria.wiki.gg/images/Hallowed_Repeater.png?3290da',  tier: [Boss.MechBoss1], tags: [], class: 'Ranged', rarity: 'Light Red'},// Modified by calamity
    {name: 'Ebonwood Sword', image: 'https://terraria.wiki.gg/images/Ebonwood_Sword.png?d0a9df',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Ebonwood Bow', image: 'https://terraria.wiki.gg/images/Ebonwood_Bow.png?471a27',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Rich Mahogany Sword', image: 'https://terraria.wiki.gg/images/Rich_Mahogany_Sword.png?75acb9',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Rich Mahogany Bow', image: 'https://terraria.wiki.gg/images/Rich_Mahogany_Bow.png?536ca8',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Pearlwood Sword', image: 'https://terraria.wiki.gg/images/Pearlwood_Sword.png?cb4843',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Pearlwood Bow', image: 'https://terraria.wiki.gg/images/Pearlwood_Bow.png?b693d4',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Ice Boomerang', image: 'https://terraria.wiki.gg/images/Ice_Boomerang.png?74995f',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Keybrand', image: 'https://terraria.wiki.gg/images/Keybrand.png?54bbd7',  tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Yellow'},//
    {name: 'Cutlass', image: 'https://terraria.wiki.gg/images/Cutlass.png?3a6cfd',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},//
    {name: 'True Excalibur', image: 'https://terraria.wiki.gg/images/True_Excalibur.png?8df18b',  tier: [Boss.MechBossRest], tags: [], class: 'Melee', rarity: 'Yellow'},//
    {name: 'True Nights Edge', image: 'https://terraria.wiki.gg/images/True_Night%27s_Edge.png?a3304d',  tier: [Boss.MechBossRest], tags: [], class: 'Melee', rarity: 'Yellow'},//
    {name: 'Frostbrand', image: 'https://terraria.wiki.gg/images/Frostbrand.png?3584e9',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Pink'},//
    {name: 'Tactical Shotgun', image: 'https://terraria.wiki.gg/images/Tactical_Shotgun.png?7dbf6e',  tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Marrow', image: 'https://terraria.wiki.gg/images/Marrow.png?5f36a8',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Pink'},//
    {name: 'Unholy Trident', image: 'https://terraria.wiki.gg/images/Unholy_Trident.png?d10b77',  tier: [Boss.MechBoss1], tags: [], class: 'Magic', rarity: 'Light Purple'},//
    {name: 'Beam Sword', image: 'https://terraria.wiki.gg/images/Beam_Sword.png?8f6c5f',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},//
    {name: 'Ice Blade', image: 'https://terraria.wiki.gg/images/Ice_Blade.png?ae3e0a',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Ice Bow', image: 'https://terraria.wiki.gg/images/Ice_Bow.png?c2eca8',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Pink'},//
    {name: 'Frost Staff', image: 'https://terraria.wiki.gg/images/Frost_Staff.png?c18690',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Pink'},//
    {name: 'Amethyst Staff', image: 'https://terraria.wiki.gg/images/Amethyst_Staff.png?e65894',  tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'White'},//
    {name: 'Topaz Staff', image: 'https://terraria.wiki.gg/images/Topaz_Staff.png?5f039a',  tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'White'},//
    {name: 'Sapphire Staff', image: 'https://terraria.wiki.gg/images/Sapphire_Staff.png?7fa186',  tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
    {name: 'Emerald Staff', image: 'https://terraria.wiki.gg/images/Emerald_Staff.png?f0bb3d',  tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
    {name: 'Ruby Staff', image: 'https://terraria.wiki.gg/images/Ruby_Staff.png?d8b134',  tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
    {name: 'Diamond Staff', image: 'https://terraria.wiki.gg/images/Diamond_Staff.png?27d173',  tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Green'},//
    {name: 'Mushroom Spear', image: 'https://terraria.wiki.gg/images/Mushroom_Spear.png?d621b7',  tier: [Boss.MechBoss1], tags: [], class: 'Melee', rarity: 'Lime'},//
    {name: 'Terra Blade', image: 'https://terraria.wiki.gg/images/Terra_Blade.png?6df328',  tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Yellow'},//
    {name: 'Grenade Launcher', image: 'https://terraria.wiki.gg/images/Grenade_Launcher.png?328129',  tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Rocket Launcher', image: 'https://terraria.wiki.gg/images/Rocket_Launcher.png?51f09c',  tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Proximity Mine Launcher', image: 'https://terraria.wiki.gg/images/Proximity_Mine_Launcher.png?a5a588',  tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Nettle Burst', image: 'https://terraria.wiki.gg/images/Nettle_Burst.png?a2e6c3',  tier: [Boss.Plantera], tags: [], class: 'Magic', rarity: 'Lime'},//
    {name: 'Blood Butcherer', image: 'https://terraria.wiki.gg/images/Blood_Butcherer.png?460456',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Tendon Bow', image: 'https://terraria.wiki.gg/images/Tendon_Bow.png?20c619',  tier: [Boss.PreBoss], tags: [VanillaTag.Crimson]},//
    {name: 'The Undertaker', image: 'https://terraria.wiki.gg/images/The_Undertaker.png?edd4e9',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Blue'},//
    {name: 'The Meatball', image: 'https://terraria.wiki.gg/images/The_Meatball.png?a97e42',  tier: [Boss.EvilBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'The Rotted Fork', image: 'https://terraria.wiki.gg/images/The_Rotted_Fork.png?1033fd',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Cactus Sword', image: 'https://terraria.wiki.gg/images/Cactus_Sword.png?380fc5',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Coin Gun', image: 'https://terraria.wiki.gg/images/Coin_Gun.png?90b62a',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Purple'},//
    {name: 'Shadewood Sword', image: 'https://terraria.wiki.gg/images/Shadewood_Sword.png?c46e60',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Shadewood Bow', image: 'https://terraria.wiki.gg/images/Shadewood_Bow.png?1b4cee',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Umbrella', image: 'https://terraria.wiki.gg/images/Umbrella.png?8dcb98',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Boomstick', image: 'https://terraria.wiki.gg/images/Boomstick.png?8b821c',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Green'},//
    {name: 'Blowgun', image: 'https://terraria.wiki.gg/images/Blowgun.png?e86ce8',  tier: [Boss.QueenBee], tags: [], class: 'Ranged', rarity: 'Orange'},//
    {name: 'Enchanted Sword', image: 'https://terraria.wiki.gg/images/Enchanted_Sword_%28item%29.png?25013c',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Green'},//
    {name: 'Bee Gun', image: 'https://terraria.wiki.gg/images/Bee_Gun.png?cb3c58',  tier: [Boss.QueenBee], tags: [], class: 'Magic', rarity: 'Green'},//
    {name: 'Possessed Hatchet', image: 'https://terraria.wiki.gg/images/Possessed_Hatchet.png?b18424',  tier: [Boss.Golem], tags: [], class: 'Melee', rarity: 'Lime'},//
    {name: 'Bee Keeper', image: 'https://terraria.wiki.gg/images/Bee_Keeper.png?5c3fb7',  tier: [Boss.QueenBee], tags: [], class: 'Melee', rarity: 'Orange'},//
    {name: 'Beenade', image: 'https://terraria.wiki.gg/images/Beenade.png?85d560',  tier: [Boss.QueenBee], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Wasp Gun', image: 'https://terraria.wiki.gg/images/Wasp_Gun.png?8325d2',  tier: [Boss.Plantera], tags: [], class: 'Magic', rarity: 'Yellow'},//
    {name: 'Piranha Gun', image: 'https://terraria.wiki.gg/images/Piranha_Gun.png?6378b9',  tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Pygmy Staff', image: 'https://terraria.wiki.gg/images/Pygmy_Staff.png?6de44d',  tier: [Boss.Plantera], tags: [], class: 'Summon', rarity: 'Lime'},//
    {name: 'Bone Sword', image: 'https://terraria.wiki.gg/images/Bone_Sword.png?d84a7d',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Orange'},//
    {name: 'Leaf Blower', image: 'https://terraria.wiki.gg/images/Leaf_Blower.png?694746',  tier: [Boss.Plantera], tags: [], class: 'Magic', rarity: 'Lime'},//
    {name: 'Palladium Sword', image: 'https://terraria.wiki.gg/images/Palladium_Sword.png?e29cf4',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},// Modified by calamity (?)
    {name: 'Palladium Pike', image: 'https://terraria.wiki.gg/images/Palladium_Pike.png?ca4713',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},// Modified by calamity (?)
    {name: 'Palladium Repeater', image: 'https://terraria.wiki.gg/images/Palladium_Repeater.png?623f00',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Red'},// Modified by calamity (?)
    {name: 'Orichalcum Sword', image: 'https://terraria.wiki.gg/images/Orichalcum_Sword.png?335506',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},// Modified by calamity (?)
    {name: 'Orichalcum Halberd', image: 'https://terraria.wiki.gg/images/Orichalcum_Halberd.png?5d6d64',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},// Modified by calamity (?)
    {name: 'Orichalcum Repeater', image: 'https://terraria.wiki.gg/images/Orichalcum_Repeater.png?86f02f',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Red'},// Modified by calamity (?)
    {name: 'Titanium Sword', image: 'https://terraria.wiki.gg/images/Titanium_Sword.png?1a39b1',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},// Modified by calamity (?)
    {name: 'Titanium Trident', image: 'https://terraria.wiki.gg/images/Titanium_Trident.png?6bc466',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},// Modified by calamity (?)
    {name: 'Titanium Repeater', image: 'https://terraria.wiki.gg/images/Titanium_Repeater.png?d1cf6e',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Red'},// Modified by calamity (?)
    {name: 'Chlorophyte Claymore', image: 'https://terraria.wiki.gg/images/Chlorophyte_Claymore.png?de6d8e',  tier: [Boss.MechBossRest], tags: [], class: 'Melee', rarity: 'Lime'},//
    {name: 'Chlorophyte Saber', image: 'https://terraria.wiki.gg/images/Chlorophyte_Saber.png?437ddc',  tier: [Boss.MechBossRest], tags: [], class: 'Melee', rarity: 'Lime'},//
    {name: 'Chlorophyte Partisan', image: 'https://terraria.wiki.gg/images/Chlorophyte_Partisan.png?ca7c1f',  tier: [Boss.MechBossRest], tags: [], class: 'Melee', rarity: 'Lime'},//
    {name: 'Chlorophyte Shotbow', image: 'https://terraria.wiki.gg/images/Chlorophyte_Shotbow.png?2cd925',  tier: [Boss.MechBossRest], tags: [], class: 'Ranged', rarity: 'Lime'},//
    {name: 'Nimbus Rod', image: 'https://terraria.wiki.gg/images/Nimbus_Rod.png?85a93a',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Light Purple'},//
    {name: 'Sniper Rifle', image: 'https://terraria.wiki.gg/images/Sniper_Rifle.png?2b7c13',  tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Venus Magnum', image: 'https://terraria.wiki.gg/images/Venus_Magnum.png?f58e54',  tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Lime'},//
    {name: 'Crimson Rod', image: 'https://terraria.wiki.gg/images/Crimson_Rod.png?919820',  tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
    {name: 'Stynger', image: 'https://terraria.wiki.gg/images/Stynger.png?954caa',  tier: [Boss.Golem], tags: [], class: 'Ranged', rarity: 'Lime'},//
    {name: 'Flower Pow', image: 'https://terraria.wiki.gg/images/Flower_Pow.png?f6f88a',  tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Lime'},//
    {name: 'Rainbow Gun', image: 'https://terraria.wiki.gg/images/Rainbow_Gun.png?53c145',  tier: [Boss.Plantera], tags: [], class: 'Magic', rarity: 'Yellow'},//
    {name: 'Flower of Frost', image: 'https://terraria.wiki.gg/images/Flower_of_Frost.png?b13d1f',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Pink'},//
    {name: 'Uzi', image: 'https://terraria.wiki.gg/images/Uzi.png?5c111b',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Lime'},//
    {name: 'Magnet Sphere', image: 'https://terraria.wiki.gg/images/Magnet_Sphere.png?8c1c6b',  tier: [Boss.Plantera], tags: [], class: 'Magic', rarity: 'Yellow'},//
    {name: 'Heat Ray', image: 'https://terraria.wiki.gg/images/Heat_Ray.png?9b8560',  tier: [Boss.Golem], tags: [], class: 'Magic', rarity: 'Lime'},//
    {name: 'Staff of Earth', image: 'https://terraria.wiki.gg/images/Staff_of_Earth.png?14156a',  tier: [Boss.Golem], tags: [], class: 'Magic', rarity: 'Lime'},//
    {name: 'Golem Fist', image: 'https://terraria.wiki.gg/images/Golem_Fist.png?86b140',  tier: [Boss.Golem], tags: [], class: 'Melee', rarity: 'Lime'},//
    {name: 'Zombie Arm', image: 'https://terraria.wiki.gg/images/Zombie_Arm.png?3bb3c5',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Ice Sickle', image: 'https://terraria.wiki.gg/images/Ice_Sickle.png?128053',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Pink'},//
    {name: 'Poison Staff', image: 'https://terraria.wiki.gg/images/Poison_Staff.png?e6ed6c',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Light Purple'},//
    {name: 'Slime Staff', image: 'https://terraria.wiki.gg/images/Slime_Staff.png?6ce0e2',  tier: [Boss.PreBoss], tags: [], class: 'Summon', rarity: 'Light Red'},//
    {name: 'Book of Skulls', image: 'https://terraria.wiki.gg/images/Book_of_Skulls.png?ab7052',  tier: [Boss.Skeletron], tags: [], class: 'Magic', rarity: 'Green'},//
    {name: 'KO Cannon', image: 'https://terraria.wiki.gg/images/KO_Cannon.png?51c2ba',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},//
    {name: 'Snowball Cannon', image: 'https://terraria.wiki.gg/images/Snowball_Cannon.png?7f0bdf',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Blue'},//
    {name: 'Bananarang', image: 'https://terraria.wiki.gg/images/Bananarang.png?4c37d5',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Pink'},//
    {name: 'Chain Knife', image: 'https://terraria.wiki.gg/images/Chain_Knife.png?182731',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Death Sickle', image: 'https://terraria.wiki.gg/images/Death_Sickle.png?b6ebcd',  tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Light Purple'},//
    {name: 'Golden Shower', image: 'https://terraria.wiki.gg/images/Golden_Shower.png?a59c86',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Light Red'},//
    {name: 'Shadowbeam Staff', image: 'https://terraria.wiki.gg/images/Shadowbeam_Staff.png?d4b02b',  tier: [Boss.Plantera], tags: [], class: 'Magic', rarity: 'Yellow'},//
    {name: 'Inferno Fork', image: 'https://terraria.wiki.gg/images/Inferno_Fork.png?978a42',  tier: [Boss.Plantera], tags: [], class: 'Magic', rarity: 'Yellow'},//
    {name: 'Spectre Staff', image: 'https://terraria.wiki.gg/images/Spectre_Staff.png?fda429',  tier: [Boss.Plantera], tags: [], class: 'Magic', rarity: 'Yellow'},//
    {name: 'Paladins Hammer', image: 'https://terraria.wiki.gg/images/Paladin%27s_Hammer.png?43da21',  tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Yellow'},//
    {name: 'S.D.M.G.', image: 'https://terraria.wiki.gg/images/S.D.M.G..png?a07de8',  tier: [Boss.MoonLord], tags: [], class: 'Ranged', rarity: 'Red'},//
    {name: 'Vampire Knives', image: 'https://terraria.wiki.gg/images/Vampire_Knives.png?b16309',  tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Yellow'},//
    {name: 'Scourge of the Corruptor', image: 'https://terraria.wiki.gg/images/Scourge_of_the_Corruptor.png?58634c',  tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Yellow'},//
    {name: 'Staff of the Frost Hydra', image: 'https://terraria.wiki.gg/images/Staff_of_the_Frost_Hydra.png?c57fda',  tier: [Boss.Plantera], tags: [], class: 'Summon', rarity: 'Yellow'},//
    {name: 'Candy Corn Rifle', image: 'https://terraria.wiki.gg/images/Candy_Corn_Rifle.png?6f9511',  tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Jack O Lantern Launcher', image: 'https://terraria.wiki.gg/images/Jack_%27O_Lantern_Launcher.png?34d0ab',  tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Bat Scepter', image: 'https://terraria.wiki.gg/images/Bat_Scepter.png?ec7860',  tier: [Boss.Plantera], tags: [], class: 'Magic', rarity: 'Yellow'},//
    {name: 'Raven Staff', image: 'https://terraria.wiki.gg/images/Raven_Staff.png?66fb10',  tier: [Boss.Plantera], tags: [], class: 'Summon', rarity: 'Yellow'},//
    {name: 'Rotten Egg', image: 'https://terraria.wiki.gg/images/Rotten_Egg.png?10b8bd',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Bloody Machete', image: 'https://terraria.wiki.gg/images/Bloody_Machete.png?99ba73',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Green'},//
    {name: 'The Horsemans Blade', image: 'https://terraria.wiki.gg/images/The_Horseman%27s_Blade.png?ed149b',  tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Yellow'},//
    {name: 'Bladed Glove', image: 'https://terraria.wiki.gg/images/Bladed_Glove.png?de29dd',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Green'},//
    {name: 'Stake Launcher', image: 'https://terraria.wiki.gg/images/Stake_Launcher.png?1f3dae',  tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Red Ryder', image: 'https://terraria.wiki.gg/images/Red_Ryder.png?f2c900',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Blue'},//
    {name: 'Candy Cane Sword', image: 'https://terraria.wiki.gg/images/Candy_Cane_Sword.png?e06bd4',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Elf Melter', image: 'https://terraria.wiki.gg/images/Elf_Melter.png?894646',  tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Star Anise', image: 'https://terraria.wiki.gg/images/Star_Anise.png?eb59ea',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Fruitcake Chakram', image: 'https://terraria.wiki.gg/images/Fruitcake_Chakram.png?24377d',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Christmas Tree Sword', image: 'https://terraria.wiki.gg/images/Christmas_Tree_Sword.png?e23863',  tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Yellow'},//
    {name: 'Chain Gun', image: 'https://terraria.wiki.gg/images/Chain_Gun.png?cc85c6',  tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Razorpine', image: 'https://terraria.wiki.gg/images/Razorpine.png?9e6b5e',  tier: [Boss.Plantera], tags: [], class: 'Magic', rarity: 'Yellow'},//
    {name: 'Blizzard Staff', image: 'https://terraria.wiki.gg/images/Blizzard_Staff.png?875d80',  tier: [Boss.Plantera], tags: [], class: 'Magic', rarity: 'Yellow'},//
    {name: 'Snowman Cannon', image: 'https://terraria.wiki.gg/images/Snowman_Cannon.png?9825a3',  tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'North Pole', image: 'https://terraria.wiki.gg/images/North_Pole.png?26f5ec',  tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Lime'},//
    {name: 'Venom Staff', image: 'https://terraria.wiki.gg/images/Venom_Staff.png?bcaa0a',  tier: [Boss.MechBossRest], tags: [], class: 'Magic', rarity: 'Lime'},//
    {name: 'Pulse Bow', image: 'https://terraria.wiki.gg/images/Pulse_Bow.png?ba568a',  tier: [Boss.MechBossRest], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Revolver', image: 'https://terraria.wiki.gg/images/Revolver.png?1561f2',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Green'},//
    {name: 'Gatligator', image: 'https://terraria.wiki.gg/images/Gatligator.png?8f6622',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Red'},//
    {name: 'Katana', image: 'https://terraria.wiki.gg/images/Katana.png?dbce87',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Purple Clubberfish', image: 'https://terraria.wiki.gg/images/Purple_Clubberfish.png?246863',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Obsidian Swordfish', image: 'https://terraria.wiki.gg/images/Obsidian_Swordfish.png?265581',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Lime'},//
    {name: 'Swordfish', image: 'https://terraria.wiki.gg/images/Swordfish.png?e2cc58',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Green'},//
    {name: 'Hornet Staff', image: 'https://terraria.wiki.gg/images/Hornet_Staff.png?f4cb03',  tier: [Boss.QueenBee], tags: [], class: 'Summon', rarity: 'Orange'},//
    {name: 'Imp Staff', image: 'https://terraria.wiki.gg/images/Imp_Staff.png?bbd684',  tier: [Boss.EvilBoss], tags: [], class: 'Summon', rarity: 'Orange'},//  Calamity reaver shark buff
    {name: 'Queen Spider Staff', image: 'https://terraria.wiki.gg/images/Queen_Spider_Staff.png?8c86b2',  tier: [Boss.WallOfFlesh], tags: [], class: 'Summon', rarity: 'Light Red'},//
    {name: 'Anchor', image: 'https://terraria.wiki.gg/images/Anchor.png?6ce563',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Orange'},//
    {name: 'Palm Wood Bow', image: 'https://terraria.wiki.gg/images/Palm_Wood_Bow.png?56b500',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Palm Wood Sword', image: 'https://terraria.wiki.gg/images/Palm_Wood_Sword.png?27ffea',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Optic Staff', image: 'https://terraria.wiki.gg/images/Optic_Staff.png?ea51bd',  tier: [Boss.Twinks], tags: [], class: 'Summon', rarity: 'Pink'},// Mech soul weapon
    {name: 'Spider Staff', image: 'https://terraria.wiki.gg/images/Spider_Staff.png?723f61',  tier: [Boss.WallOfFlesh], tags: [], class: 'Summon', rarity: 'Light Red'},//
    {name: 'Pirate Staff', image: 'https://terraria.wiki.gg/images/Pirate_Staff.png?a73e61',  tier: [Boss.WallOfFlesh], tags: [], class: 'Summon', rarity: 'Pink'},//
    {name: 'Molotov Cocktail', image: 'https://terraria.wiki.gg/images/Molotov_Cocktail.png?40e3a7',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Blue'},//
    {name: 'Falcon Blade', image: 'https://terraria.wiki.gg/images/Falcon_Blade.png?430372',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Light Red'},//
    {name: 'Flairon', image: 'https://terraria.wiki.gg/images/Flairon.png?2f0d1c',  tier: [Boss.Duke], tags: [], class: 'Melee', rarity: 'Yellow'},//
    {name: 'Tempest Staff', image: 'https://terraria.wiki.gg/images/Tempest_Staff.png?b3e671',  tier: [Boss.Duke], tags: [], class: 'Summon', rarity: 'Yellow'},//
    {name: 'Razorblade Typhoon', image: 'https://terraria.wiki.gg/images/Razorblade_Typhoon.png?4397ae',  tier: [Boss.Duke], tags: [], class: 'Magic', rarity: 'Yellow'},//
    {name: 'Bubble Gun', image: 'https://terraria.wiki.gg/images/Bubble_Gun.png?45a069',  tier: [Boss.Duke], tags: [], class: 'Magic', rarity: 'Yellow'},//
    {name: 'Tsunami', image: 'https://terraria.wiki.gg/images/Tsunami.png?b0d6cb',  tier: [Boss.Duke], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Boreal Wood Sword', image: 'https://terraria.wiki.gg/images/Boreal_Wood_Sword.png?b09c19',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Boreal Wood Bow', image: 'https://terraria.wiki.gg/images/Boreal_Wood_Bow.png?a3435b',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Xeno Staff', image: 'https://terraria.wiki.gg/images/Xeno_Staff.png?374fd8',  tier: [Boss.Golem], tags: [], class: 'Summon', rarity: 'Yellow'},//
    {name: 'Meteor Staff', image: 'https://terraria.wiki.gg/images/Meteor_Staff.png?5c7cc7',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Pink'},//
    {name: 'Laser Machinegun', image: 'https://terraria.wiki.gg/images/Laser_Machinegun.png?9b0150',  tier: [Boss.Golem], tags: [], class: 'Magic', rarity: 'Yellow'},//
    {name: 'Electrosphere Launcher', image: 'https://terraria.wiki.gg/images/Electrosphere_Launcher.png?a38455',  tier: [Boss.Golem], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Xenopopper', image: 'https://terraria.wiki.gg/images/Xenopopper.png?5f7623',  tier: [Boss.Golem], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Influx Waver', image: 'https://terraria.wiki.gg/images/Influx_Waver.png?a725fd',  tier: [Boss.Golem], tags: [], class: 'Melee', rarity: 'Yellow'},//
    {name: 'Charged Blaster Cannon', image: 'https://terraria.wiki.gg/images/Charged_Blaster_Cannon.png?36d793',  tier: [Boss.Golem], tags: [], class: 'Magic', rarity: 'Yellow'},//
    {name: 'The Bees Knees', image: 'https://terraria.wiki.gg/images/The_Bee%27s_Knees.png?805784',  tier: [Boss.QueenBee], tags: [], class: 'Ranged', rarity: 'Orange'},//
    {name: 'Life Drain', image: 'https://terraria.wiki.gg/images/Life_Drain.png?7a8974',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Pink'},//
    {name: 'Dart Pistol', image: 'https://terraria.wiki.gg/images/Dart_Pistol.png?6361f2',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Pink'},//
    {name: 'Dart Rifle', image: 'https://terraria.wiki.gg/images/Dart_Rifle.png?fbd34b',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Pink'},//
    {name: 'Chain Guillotines', image: 'https://terraria.wiki.gg/images/Chain_Guillotines.png?af4d93',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Pink'},//
    {name: 'Fetid Baghnakhs', image: 'https://terraria.wiki.gg/images/Fetid_Baghnakhs.png?526e1b',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Pink'},//
    {name: 'Clinger Staff', image: 'https://terraria.wiki.gg/images/Clinger_Staff.png?ed897a',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Pink'},//
    {name: 'Seedler', image: 'https://terraria.wiki.gg/images/Seedler.png?89d369',  tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Pink'},//
    {name: 'Hellwing Bow', image: 'https://terraria.wiki.gg/images/Hellwing_Bow.png?c20680',  tier: [Boss.Skeletron], tags: [], class: 'Ranged', rarity: 'Orange'},//
    {name: 'Daedalus Stormbow', image: 'https://terraria.wiki.gg/images/Daedalus_Stormbow.png?4a68a5',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Purple'},//
    {name: 'Flying Knife', image: 'https://terraria.wiki.gg/images/Flying_Knife.png?147c59',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Purple'},//
    {name: 'Crystal Vile Shard', image: 'https://terraria.wiki.gg/images/Crystal_Vile_Shard.png?337245',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Pink'},//
    {name: 'Shadowflame Bow', image: 'https://terraria.wiki.gg/images/Shadowflame_Bow.png?22b01c',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Pink'},//
    {name: 'Shadowflame Hex Doll', image: 'https://terraria.wiki.gg/images/Shadowflame_Hex_Doll.png?3b1e86',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Pink'},//
    {name: 'Shadowflame Knife', image: 'https://terraria.wiki.gg/images/Shadowflame_Knife.png?fa6ef7',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Pink'},//
    {name: 'Meowmere', image: 'https://terraria.wiki.gg/images/Meowmere.png?3947a6',  tier: [Boss.MoonLord], tags: [], class: 'Melee', rarity: 'Red'},//
    {name: 'Star Wrath', image: 'https://terraria.wiki.gg/images/Star_Wrath.png?8b7056',  tier: [Boss.MoonLord], tags: [], class: 'Melee', rarity: 'Red'},//
    {name: 'Wand of Sparking', image: 'https://terraria.wiki.gg/images/Wand_of_Sparking.png?8e0b0e',  tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
    {name: 'Javelin', image: 'https://terraria.wiki.gg/images/Javelin.png?8f2069',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Toxic Flask', image: 'https://terraria.wiki.gg/images/Toxic_Flask.png?6b5195',  tier: [Boss.Plantera], tags: [], class: 'Magic', rarity: 'Yellow'},//
    {name: 'Psycho Knife', image: 'https://terraria.wiki.gg/images/Psycho_Knife.png?2d3272',  tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Yellow'},//
    {name: 'Nail Gun', image: 'https://terraria.wiki.gg/images/Nail_Gun.png?c8eb33',  tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Frost Daggerfish', image: 'https://terraria.wiki.gg/images/Frost_Daggerfish.png?fed06c',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Blue'},//
    {name: 'Crystal Serpent', image: 'https://terraria.wiki.gg/images/Crystal_Serpent.png?af2fdc',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Pink'},//
    {name: 'Toxikarp', image: 'https://terraria.wiki.gg/images/Toxikarp.png?f1227c',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Pink'},//
    {name: 'Bladetongue', image: 'https://terraria.wiki.gg/images/Bladetongue.png?1a62bf',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Pink'},//
    {name: 'Deadly Sphere Staff', image: 'https://terraria.wiki.gg/images/Deadly_Sphere_Staff.png?3cc3fa',  tier: [Boss.Plantera], tags: [], class: 'Summon', rarity: 'Yellow'},//
    {name: 'Slap Hand', image: 'https://terraria.wiki.gg/images/Slap_Hand.png?221f53',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},//
    {name: 'Code 1', image: 'https://terraria.wiki.gg/images/Code_1.png?86b8ab',  tier: [Boss.EyeOfCthulhu], tags: [], class: 'Melee', rarity: 'Green'},//
    {name: 'Medusa Head', image: 'https://terraria.wiki.gg/images/Medusa_Head.png?450488',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Light Red'},//
    {name: 'Wooden Yoyo', image: 'https://terraria.wiki.gg/images/Wooden_Yoyo.png?237e47',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Malaise', image: 'https://terraria.wiki.gg/images/Malaise.png?14fb6d',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Artery', image: 'https://terraria.wiki.gg/images/Artery.png?b72d68',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Amazon', image: 'https://terraria.wiki.gg/images/Amazon.png?6e31c2',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Orange'},//
    {name: 'Cascade', image: 'https://terraria.wiki.gg/images/Cascade.png?b7f287',  tier: [Boss.Skeletron], tags: [], class: 'Melee', rarity: 'Orange'},//
    {name: 'Chik', image: 'https://terraria.wiki.gg/images/Chik.png?fb81db',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},//
    {name: 'Code 2', image: 'https://terraria.wiki.gg/images/Code_2.png?d0c4b1',  tier: [Boss.MechBoss1], tags: [], class: 'Melee', rarity: 'Pink'},//
    {name: 'Rally', image: 'https://terraria.wiki.gg/images/Rally.png?3568ab',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Yelets', image: 'https://terraria.wiki.gg/images/Yelets.png?6448ac',  tier: [Boss.MechBoss1], tags: [], class: 'Melee', rarity: 'Lime'},//
    {name: 'Reds Throw', image: 'https://terraria.wiki.gg/images/Red%27s_Throw.png?c24c93',  tier: [Boss.QueenSlime], tags: [], class: 'Melee', rarity: 'Cyan'},//
    {name: 'Valkyrie Yoyo', image: 'https://terraria.wiki.gg/images/Valkyrie_Yoyo.png?2672ad',  tier: [Boss.QueenSlime], tags: [], class: 'Melee', rarity: 'Cyan'},//
    {name: 'Amarok', image: 'https://terraria.wiki.gg/images/Amarok.png?945197',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},//
    {name: 'Hel-Fire', image: 'https://terraria.wiki.gg/images/Hel-Fire.png?70ac67',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},//
    {name: 'Kraken', image: 'https://terraria.wiki.gg/images/Kraken.png?e07e05',  tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Yellow'},//
    {name: 'The Eye of Cthulhu', image: 'https://terraria.wiki.gg/images/The_Eye_of_Cthulhu.png?bb9b92',  tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Yellow'},//
    {name: 'Format:C', image: 'https://terraria.wiki.gg/images/Format_C.png?c7bab3',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Orange'},//
    {name: 'Gradient', image: 'https://terraria.wiki.gg/images/Gradient.png?c86ebb',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Orange'},//
    {name: 'Valor', image: 'https://terraria.wiki.gg/images/Valor.png?9119b7',  tier: [Boss.Skeletron], tags: [], class: 'Melee', rarity: 'Orange'},//
    {name: 'Exotic Scimitar', image: 'https://terraria.wiki.gg/images/Exotic_Scimitar.png?1fa575',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Green'},//
    {name: 'Paintball Gun', image: 'https://terraria.wiki.gg/images/Paintball_Gun.png?9ee618',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Green'},//
    {name: 'Classy Cane', image: 'https://terraria.wiki.gg/images/Classy_Cane.png?33e6af',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Green'},//
    {name: 'Stylish Scissors', image: 'https://terraria.wiki.gg/images/Stylish_Scissors.png?4406de',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Green'},//
    {name: 'Arkhalis', image: 'https://terraria.wiki.gg/images/Arkhalis.png?af66a0',  tier: [Boss.QueenSlime], tags: [], class: 'Melee', rarity: 'Cyan'},//
    {name: 'Amber Staff', image: 'https://terraria.wiki.gg/images/Amber_Staff.png?fb646b',  tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
    {name: 'Bone Javelin', image: 'https://terraria.wiki.gg/images/Bone_Javelin.png?cee4ea',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Blue'},//
    {name: 'Bone Throwing Knife', image: 'https://terraria.wiki.gg/images/Bone_Throwing_Knife.png?cdbe6b',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Blue'},//
    {name: 'Terrarian', image: 'https://terraria.wiki.gg/images/Terrarian.png?183ae2',  tier: [Boss.MoonLord], tags: [], class: 'Melee', rarity: 'Red'},//
    {name: 'Solar Eruption', image: 'https://terraria.wiki.gg/images/Solar_Eruption.png?fd2114',  tier: [Boss.Cultist], tags: [], class: 'Melee', rarity: 'Red'},//
    {name: 'Stardust Cell Staff', image: 'https://terraria.wiki.gg/images/Stardust_Cell_Staff.png?f29133',  tier: [Boss.Cultist], tags: [], class: 'Summon', rarity: 'Red'},//
    {name: 'Vortex Beater', image: 'https://terraria.wiki.gg/images/Vortex_Beater.png?ab03f1',  tier: [Boss.Cultist], tags: [], class: 'Ranged', rarity: 'Red'},//
    {name: 'Nebula Arcanum', image: 'https://terraria.wiki.gg/images/Nebula_Arcanum.png?e20565',  tier: [Boss.Cultist], tags: [], class: 'Magic', rarity: 'Red'},//
    {name: 'Platinum Bow', image: 'https://terraria.wiki.gg/images/Platinum_Bow.png?7095b5',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Platinum Shortsword', image: 'https://terraria.wiki.gg/images/Platinum_Shortsword.png?1c7559',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Platinum Broadsword', image: 'https://terraria.wiki.gg/images/Platinum_Broadsword.png?fae4d7',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Tungsten Bow', image: 'https://terraria.wiki.gg/images/Tungsten_Bow.png?793181',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Tungsten Shortsword', image: 'https://terraria.wiki.gg/images/Tungsten_Shortsword.png?6a738a',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Tungsten Broadsword', image: 'https://terraria.wiki.gg/images/Tungsten_Broadsword.png?b7a0f8',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Lead Bow', image: 'https://terraria.wiki.gg/images/Lead_Bow.png?f19f07',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Lead Shortsword', image: 'https://terraria.wiki.gg/images/Lead_Shortsword.png?d828f4',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Lead Broadsword', image: 'https://terraria.wiki.gg/images/Lead_Broadsword.png?4925fa',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Tin Bow', image: 'https://terraria.wiki.gg/images/Tin_Bow.png?f8d2c8',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Tin Shortsword', image: 'https://terraria.wiki.gg/images/Tin_Shortsword.png?52f2ba',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Tin Broadsword', image: 'https://terraria.wiki.gg/images/Tin_Broadsword.png?f8e165',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Copper Bow', image: 'https://terraria.wiki.gg/images/Copper_Bow.png?908d94',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Copper Shortsword', image: 'https://terraria.wiki.gg/images/Copper_Shortsword.png?2ed47b',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Copper Broadsword', image: 'https://terraria.wiki.gg/images/Copper_Broadsword.png?25612f',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Silver Bow', image: 'https://terraria.wiki.gg/images/Silver_Bow.png?cea43d',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Silver Shortsword', image: 'https://terraria.wiki.gg/images/Silver_Shortsword.png?62201f',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Silver Broadsword', image: 'https://terraria.wiki.gg/images/Silver_Broadsword.png?d8a9c0',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Gold Bow', image: 'https://terraria.wiki.gg/images/Gold_Bow.png?5e9774',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Gold Shortsword', image: 'https://terraria.wiki.gg/images/Gold_Shortsword.png?7d6af4',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Gold Broadsword', image: 'https://terraria.wiki.gg/images/Gold_Broadsword.png?7ac5d0',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Stardust Dragon Staff', image: 'https://terraria.wiki.gg/images/Stardust_Dragon_Staff.png?2e5d63',  tier: [Boss.Cultist], tags: [], class: 'Summon', rarity: 'Red'},//
    {name: 'Phantasm', image: 'https://terraria.wiki.gg/images/Phantasm.png?eef599',  tier: [Boss.Cultist], tags: [], class: 'Ranged', rarity: 'Red'},//
    {name: 'Last Prism', image: 'https://terraria.wiki.gg/images/Last_Prism.png?7cd626',  tier: [Boss.MoonLord], tags: [], class: 'Magic', rarity: 'Red'},//
    {name: 'Nebula Blaze', image: 'https://terraria.wiki.gg/images/Nebula_Blaze.png?66cb6f',  tier: [Boss.Cultist], tags: [], class: 'Magic', rarity: 'Red'},//
    {name: 'Daybreak', image: 'https://terraria.wiki.gg/images/Daybreak.png?3d58c9',  tier: [Boss.Cultist], tags: [], class: 'Melee', rarity: 'Red'},//
    {name: 'Celebration', image: 'https://terraria.wiki.gg/images/Celebration.png?1a5c06',  tier: [Boss.Golem], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Grenade (Any)', image: 'weapon-images/Vanilla/Default.png',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Green'},//
    {name: 'Lunar Portal Staff', image: 'https://terraria.wiki.gg/images/Lunar_Portal_Staff.png?9b7ef9',  tier: [Boss.MoonLord], tags: [], class: 'Summon', rarity: 'Red'},//
    {name: 'Lunar Flare', image: 'https://terraria.wiki.gg/images/Lunar_Flare.png?60a0ee',  tier: [Boss.MoonLord], tags: [], class: 'Magic', rarity: 'Red'},//
    {name: 'Rainbow Crystal Staff', image: 'https://terraria.wiki.gg/images/Rainbow_Crystal_Staff.png?33cff4',  tier: [Boss.MoonLord], tags: [], class: 'Summon', rarity: 'Red'},//
    {name: 'Phasesaber (Any)', image: 'weapon-images/Vanilla/Default.png',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},//
    {name: 'Mandible Blade', image: 'https://terraria.wiki.gg/images/Mandible_Blade.png?858391',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Green'},//
    {name: 'Spirit Flame', image: 'https://terraria.wiki.gg/images/Spirit_Flame.png?b61e43',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Light Red'},//
    {name: 'Sky Fracture', image: 'https://terraria.wiki.gg/images/Sky_Fracture.png?f7fd97',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Light Red'},//
    {name: 'Onyx Blaster', image: 'https://terraria.wiki.gg/images/Onyx_Blaster.png?b5f1e2',  tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Red'},//
    {name: 'Flameburst Rod', image: 'https://terraria.wiki.gg/images/Flameburst_Rod.png?57c385',  tier: [Boss.EvilBoss], tags: [], class: 'Summon', rarity: 'Orange'},//
    {name: 'Flameburst Cane', image: 'https://terraria.wiki.gg/images/Flameburst_Cane.png?f7ad12',  tier: [Boss.MechBoss1], tags: [], class: 'Summon', rarity: 'Pink'},//
    {name: 'Flameburst Staff', image: 'https://terraria.wiki.gg/images/Flameburst_Staff.png?e60d23',  tier: [Boss.Golem], tags: [], class: 'Summon', rarity: 'Yellow'},//
    {name: 'Ale Tosser', image: 'https://terraria.wiki.gg/images/Ale_Tosser.png?97eace',  tier: [Boss.EvilBoss], tags: [], class: 'Ranged', rarity: 'Blue'},//
    {name: 'Brand of the Inferno', image: 'https://terraria.wiki.gg/images/Brand_of_the_Inferno.png?34ca7b',  tier: [Boss.MechBoss1], tags: [], class: 'Melee', rarity: 'Pink'},//
    {name: 'Ballista Rod', image: 'https://terraria.wiki.gg/images/Ballista_Rod.png?4955c9',  tier: [Boss.EvilBoss], tags: [], class: 'Summon', rarity: 'Orange'},//
    {name: 'Ballista Cane', image: 'https://terraria.wiki.gg/images/Ballista_Cane.png?46cc5b',  tier: [Boss.MechBoss1], tags: [], class: 'Summon', rarity: 'Pink'},//
    {name: 'Ballista Staff', image: 'https://terraria.wiki.gg/images/Ballista_Staff.png?9920de',  tier: [Boss.Golem], tags: [], class: 'Summon', rarity: 'Yellow'},//
    {name: 'Flying Dragon', image: 'https://terraria.wiki.gg/images/Flying_Dragon.png?b431a6',  tier: [Boss.Golem], tags: [], class: 'Melee', rarity: 'Yellow'},//
    {name: 'Lightning Aura Rod', image: 'https://terraria.wiki.gg/images/Lightning_Aura_Rod.png?f785d6',  tier: [Boss.EvilBoss], tags: [], class: 'Summon', rarity: 'Orange'},//
    {name: 'Lightning Aura Cane', image: 'https://terraria.wiki.gg/images/Lightning_Aura_Cane.png?306e0e',  tier: [Boss.MechBoss1], tags: [], class: 'Summon', rarity: 'Pink'},//
    {name: 'Lightning Aura Staff', image: 'https://terraria.wiki.gg/images/Lightning_Aura_Staff.png?a8ec4e',  tier: [Boss.Golem], tags: [], class: 'Summon', rarity: 'Yellow'},//
    {name: 'Explosive Trap Rod', image: 'https://terraria.wiki.gg/images/Explosive_Trap_Rod.png?f92134',  tier: [Boss.EvilBoss], tags: [], class: 'Summon', rarity: 'Orange'},//
    {name: 'Explosive Trap Cane', image: 'https://terraria.wiki.gg/images/Explosive_Trap_Cane.png?9ad62b',  tier: [Boss.MechBoss1], tags: [], class: 'Summon', rarity: 'Pink'},//
    {name: 'Explosive Trap Staff', image: 'https://terraria.wiki.gg/images/Explosive_Trap_Staff.png?2e7908',  tier: [Boss.Golem], tags: [], class: 'Summon', rarity: 'Yellow'},//
    {name: 'Sleepy Octopod', image: 'https://terraria.wiki.gg/images/Sleepy_Octopod.png?79bcbe',  tier: [Boss.MechBoss1], tags: [], class: 'Melee', rarity: 'Pink'},//
    {name: 'Ghastly Glaive', image: 'https://terraria.wiki.gg/images/Ghastly_Glaive.png?dd2888',  tier: [Boss.MechBoss1], tags: [], class: 'Melee', rarity: 'Pink'},//
    {name: 'Tome of Infinite Wisdom', image: 'https://terraria.wiki.gg/images/Tome_of_Infinite_Wisdom.png?f11f84',  tier: [Boss.MechBoss1], tags: [], class: 'Magic', rarity: 'Pink'},//
    {name: 'Phantom Phoenix', image: 'https://terraria.wiki.gg/images/Phantom_Phoenix.png?e08866',  tier: [Boss.MechBoss1], tags: [], class: 'Ranged', rarity: 'Pink'},//
    {name: 'Sky Dragons Fury', image: 'https://terraria.wiki.gg/images/Sky_Dragon%27s_Fury.png?157d00',  tier: [Boss.Golem], tags: [], class: 'Melee', rarity: 'Yellow'},//
    {name: 'Aerial Bane', image: 'https://terraria.wiki.gg/images/Aerial_Bane.png?3f2116',  tier: [Boss.Golem], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Betsys Wrath', image: 'https://terraria.wiki.gg/images/Betsy%27s_Wrath.png?194448',  tier: [Boss.Golem], tags: [], class: 'Magic', rarity: 'Yellow'},//
    {name: 'Celebration Mk2', image: 'https://terraria.wiki.gg/images/Celebration_Mk2.png?6d1d06',  tier: [Boss.MoonLord], tags: [], class: 'Ranged', rarity: 'Red'},//
    {name: 'Super Star Shooter', image: 'https://terraria.wiki.gg/images/Super_Star_Shooter.png?ef3fad',  tier: [Boss.MechBoss1], tags: [], class: 'Ranged', rarity: 'Orange'},// Modified by calamity
    {name: 'Storm Spear', image: 'https://terraria.wiki.gg/images/Storm_Spear.png?c94f72',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Thunder Zapper', image: 'https://terraria.wiki.gg/images/Thunder_Zapper.png?7751e2',  tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
    {name: 'Terragrim', image: 'https://terraria.wiki.gg/images/Terragrim.png?c2c9cc',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Green'},//
    {name: 'Sanguine Staff', image: 'https://terraria.wiki.gg/images/Sanguine_Staff.png?e12638',  tier: [Boss.WallOfFlesh], tags: [], class: 'Summon', rarity: 'Light Red'},//
    {name: 'Blood Thorn', image: 'https://terraria.wiki.gg/images/Blood_Thorn.png?29254b',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Light Red'},//
    {name: 'Drippler Crippler', image: 'https://terraria.wiki.gg/images/Drippler_Crippler.png?30854a',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},//
    {name: 'Vampire Frog Staff', image: 'https://terraria.wiki.gg/images/Vampire_Frog_Staff.png?b749bc',  tier: [Boss.PreBoss], tags: [], class: 'Summon', rarity: 'Orange'},//
    {name: 'Finch Staff', image: 'https://terraria.wiki.gg/images/Finch_Staff.png?4edca7',  tier: [Boss.PreBoss], tags: [], class: 'Summon', rarity: 'Blue'},//
    {name: 'Gray Zapinator', image: 'https://terraria.wiki.gg/images/Gray_Zapinator.png?726b11',  tier: [Boss.EyeOfCthulhu], tags: [], class: 'Magic', rarity: 'Green'},//
    {name: 'Orange Zapinator', image: 'https://terraria.wiki.gg/images/Orange_Zapinator.png?7d9da2',  tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Pink'},//
    {name: 'Blood Rain Bow', image: 'https://terraria.wiki.gg/images/Blood_Rain_Bow.png?b27c0a',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Orange'},//
    {name: 'Gladius', image: 'https://terraria.wiki.gg/images/Gladius.png?2a1c7e',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Desert Tiger Staff', image: 'https://terraria.wiki.gg/images/Desert_Tiger_Staff.png?29c975',  tier: [Boss.Plantera], tags: [], class: 'Summon', rarity: 'Yellow'},//
    {name: 'Leather Whip', image: 'https://terraria.wiki.gg/images/Leather_Whip.png?40663e',  tier: [Boss.PreBoss], tags: [], class: 'Summon', rarity: 'Blue'},//
    {name: 'Durendal', image: 'https://terraria.wiki.gg/images/Durendal.png?5ef70f',  tier: [Boss.MechBoss1], tags: [], class: 'Summon', rarity: 'Pink'},// Modified by calamity
    {name: 'Morning Star', image: 'https://terraria.wiki.gg/images/Morning_Star.png?5018d5',  tier: [Boss.Plantera], tags: [], class: 'Summon', rarity: 'Yellow'},//
    {name: 'Dark Harvest', image: 'https://terraria.wiki.gg/images/Dark_Harvest.png?157af0',  tier: [Boss.Plantera], tags: [], class: 'Summon', rarity: 'Yellow'},//
    {name: 'Quad-Barrel Shotgun', image: 'https://terraria.wiki.gg/images/Quad-Barrel_Shotgun.png?1ed76e',  tier: [Boss.Skeletron], tags: [], class: 'Ranged', rarity: 'Orange'},//
    {name: 'Stellar Tune', image: 'https://terraria.wiki.gg/images/Stellar_Tune.png?bb2bd4',  tier: [Boss.Empress], tags: [], class: 'Magic', rarity: 'Pink'},//
    {name: 'Blade Staff', image: 'https://terraria.wiki.gg/images/Blade_Staff.png?c29f70',  tier: [Boss.QueenSlime], tags: [], class: 'Summon', rarity: 'Pink'},//
    {name: 'Sergeant United Shield', image: 'https://terraria.wiki.gg/images/Sergeant_United_Shield.png?8e1318',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Pink'},//
    {name: 'Shroomerang', image: 'https://terraria.wiki.gg/images/Shroomerang.png?55af96',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Jousting Lance', image: 'https://terraria.wiki.gg/images/Jousting_Lance.png?62a4a2',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},//
    {name: 'Shadow Jousting Lance', image: 'https://terraria.wiki.gg/images/Shadow_Jousting_Lance.png?dfb957',  tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Yellow'},//
    {name: 'Hallowed Jousting Lance', image: 'https://terraria.wiki.gg/images/Hallowed_Jousting_Lance.png?4c504f',  tier: [Boss.MechBoss1], tags: [], class: 'Melee', rarity: 'Pink'},// Modified by calamity
    {name: 'Combat Wrench', image: 'https://terraria.wiki.gg/images/Combat_Wrench.png?16c760',  tier: [Boss.Skeletron], tags: [], class: 'Melee', rarity: 'Green'},//
    {name: 'Cool Whip', image: 'https://terraria.wiki.gg/images/Cool_Whip.png?f2d6b9',  tier: [Boss.WallOfFlesh], tags: [], class: 'Summon', rarity: 'Light Red'},//
    {name: 'Firecracker', image: 'https://terraria.wiki.gg/images/Firecracker.png?e7e3a1',  tier: [Boss.WallOfFlesh], tags: [], class: 'Summon', rarity: 'Light Red'},//
    {name: 'Snapthorn', image: 'https://terraria.wiki.gg/images/Snapthorn.png?701cd0',  tier: [Boss.PreBoss], tags: [], class: 'Summon', rarity: 'Orange'},//
    {name: 'Kaleidoscope', image: 'https://terraria.wiki.gg/images/Kaleidoscope.png?5beedb',  tier: [Boss.Empress], tags: [], class: 'Summon', rarity: 'Yellow'},//
    {name: 'Starlight', image: 'https://terraria.wiki.gg/images/Starlight.png?1fe250',  tier: [Boss.Empress], tags: [], class: 'Melee', rarity: 'Yellow'},//
    {name: 'Nightglow', image: 'https://terraria.wiki.gg/images/Nightglow.png?9e7249',  tier: [Boss.Empress], tags: [], class: 'Magic', rarity: 'Yellow'},//
    {name: 'Eventide', image: 'https://terraria.wiki.gg/images/Eventide.png?597df1',  tier: [Boss.Empress], tags: [], class: 'Ranged', rarity: 'Yellow'},//
    {name: 'Zenith', image: 'https://terraria.wiki.gg/images/Zenith.png?6d467f',  tier: [Boss.MoonLord], tags: [], class: 'Melee', rarity: 'Red'},// Modified by calamity
    {name: 'Terraprisma', image: 'https://terraria.wiki.gg/images/Terraprisma.png?9ccd0e',  tier: [Boss.Empress], tags: [], class: 'Summon', rarity: 'Pink'},//
    {name: 'Mace', image: 'https://terraria.wiki.gg/images/Mace.png?9f6a2e',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Flaming Mace', image: 'https://terraria.wiki.gg/images/Flaming_Mace.png?9138d1',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
    {name: 'Resonance Scepter', image: 'https://terraria.wiki.gg/images/Resonance_Scepter.png?5038d6',  tier: [Boss.Plantera], tags: [], class: 'Magic', rarity: 'Pink'},//
    {name: 'Flinx Staff', image: 'https://terraria.wiki.gg/images/Flinx_Staff.png?b1154b',  tier: [Boss.PreBoss], tags: [], class: 'Summon', rarity: 'Orange'},//
    {name: 'Spinal Tap', image: 'https://terraria.wiki.gg/images/Spinal_Tap.png?b45b00',  tier: [Boss.Skeletron], tags: [], class: 'Summon', rarity: 'Green'},//
    {name: 'Tentacle Spike', image: 'https://terraria.wiki.gg/images/Tentacle_Spike.png?a25148',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Green'},//
    {name: 'Ham Bat', image: 'https://terraria.wiki.gg/images/Ham_Bat.png?53b2ad',  tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},//
    {name: 'Bat Bat', image: 'https://terraria.wiki.gg/images/Bat_Bat.png?64e671',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Green'},//
    {name: 'Abigails Flower', image: 'https://terraria.wiki.gg/images/Abigail%27s_Flower.png?3b3a15',  tier: [Boss.PreBoss], tags: [], class: 'Summon', rarity: 'Orange'},//
    {name: 'Pew-matic Horn', image: 'https://terraria.wiki.gg/images/Pew-matic_Horn.png?50ff59',  tier: [Boss.Deerclops], tags: [], class: 'Ranged', rarity: 'Green'},//
    {name: 'Weather Pain', image: 'https://terraria.wiki.gg/images/Weather_Pain.png?4c490e',  tier: [Boss.Deerclops], tags: [], class: 'Magic', rarity: 'Green'},//
    {name: 'Houndius Shootius', image: 'https://terraria.wiki.gg/images/Houndius_Shootius.png?ddbd1b',  tier: [Boss.Deerclops], tags: [], class: 'Summon', rarity: 'Green'},//
    {name: 'Flymeal', image: 'https://terraria.wiki.gg/images/Flymeal.png?ac7662',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Green'},//
    {name: 'Wand of Frosting', image: 'https://terraria.wiki.gg/images/Wand_of_Frosting.png?488b70',  tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
    {name: 'Ash Wood Bow', image: 'https://terraria.wiki.gg/images/Ash_Wood_Bow.png?ce962c',  tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
    {name: 'Ash Wood Sword', image: 'https://terraria.wiki.gg/images/Ash_Wood_Sword.png?76d370',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
    {name: 'Hive-Five', image: 'https://terraria.wiki.gg/images/Hive-Five.png?bc7c4e',  tier: [Boss.QueenBee], tags: [], class: 'Melee', rarity: 'Orange'},//
    {name: 'Trimarang', image: 'https://terraria.wiki.gg/images/Trimarang.png?97d32b',  tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Orange'},// Modified by calamity
    {name: 'Waffles Iron', image: 'https://terraria.wiki.gg/images/Waffle%27s_Iron.png?be4e57',  tier: [Boss.MechBossRest], tags: [], class: 'Melee', rarity: 'Pink'},// GetFixedBoi shit
];