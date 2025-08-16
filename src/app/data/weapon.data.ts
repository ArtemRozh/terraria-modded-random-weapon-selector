import { ContentLabels, Boss, Calamityboss, StarsAboveBoss } from "./progression.data";

export const vanillaWeaponData = [
        {name: 'Iron Broadsword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},// (?) is when its modified, but Idk if i need to change
        {name: 'Iron Shortsword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Wooden Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Wooden Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Shuriken', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Demon Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Lights Bane', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss}, //
        {name: 'Enchanted Boomerang', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Vilethorn', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Starfury', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Flintlock Pistol', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Musket', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Minishark', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Iron Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Flower of Fire', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},//
        {name: 'Magic Missile', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},//
        {name: 'Flamarang', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Molten Fury', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Volcano', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.EvilBoss},// Calamity reaver shark buff
        {name: 'Space Gun', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Bone', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},//
        {name: 'Muramasa', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},//
        {name: 'Aqua Scepter', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},//
        {name: 'Harpoon', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Spiky Ball', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Ball O Hurt', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Blue Moon', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},//
        {name: 'Handgun', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},//
        {name: 'Water Bolt', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},//
        {name: 'Breathing Reed', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Blade of Grass', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Thorn Chakram', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Star Cannon', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Phaseblade (Any)', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Flamelash', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},//
        {name: 'Phoenix Blaster', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},// Calamity reaver shark buff
        {name: 'Sunfury', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},//
        {name: 'Sandgun', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Demon Scythe', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Nights Edge', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},// Modified by calamity        
		{name: 'Dark Lance', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},//
        {name: 'Trident', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Throwing Knife', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Spear', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Blowpipe', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Wooden Boomerang', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Poisoned Knife', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Excalibur', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},// Modified by calamity
        {name: 'Dao of Pow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Mythril Halberd', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Modified by calamity (?)
        {name: 'Adamantite Glaive', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Modified by calamity (?)
        {name: 'Breaker Blade', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Clockwork Assault Rifle', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Cobalt Repeater', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Modified by calamity (?)
        {name: 'Mythril Repeater', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Modified by calamity (?)
        {name: 'Adamantite Repeater', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Modified by calamity (?)
        {name: 'Adamantite Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Modified by calamity (?)
        {name: 'Cobalt Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Modified by calamity (?)
        {name: 'Mythril Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Modified by calamity (?)
        {name: 'Ruler', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Magical Harp', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},// Mech soul weapon
        {name: 'Rainbow Rod', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},// Mech soul weapon
        {name: 'Ice Rod', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Flamethrower', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},// Mech soul weapon
        {name: 'Laser Rifle', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Magic Dagger', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Possibly modified by calamity
        {name: 'Crystal Storm', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Cursed Flames', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Megashark', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},// Mech soul weapon
        {name: 'Shotgun', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Cobalt Naginata', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Modified by calamity (?)
        {name: 'Gungnir', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},// Modified by calamity
        {name: 'Light Disc', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},// Modified by calamity
        {name: 'Hallowed Repeater', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},// Modified by calamity
        {name: 'Ebonwood Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Ebonwood Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Rich Mahogany Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Rich Mahogany Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Pearlwood Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Pearlwood Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Ice Boomerang', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Keybrand', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Cutlass', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'True Excalibur', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBossRest},//
        {name: 'True Nights Edge', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Frostbrand', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Tactical Shotgun', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Marrow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Unholy Trident', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Beam Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Ice Blade', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Ice Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Frost Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Amethyst Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Topaz Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Sapphire Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Emerald Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Ruby Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Diamond Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Mushroom Spear', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Terra Blade', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Grenade Launcher', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Rocket Launcher', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Proximity Mine Launcher', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Nettle Burst', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Blood Butcherer', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Tendon Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'The Undertaker', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'The Meatball', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.EvilBoss},//
        {name: 'The Rotted Fork', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Cactus Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Coin Gun', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Shadewood Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Shadewood Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Umbrella', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Boomstick', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Blowgun', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.QueenBee},//
        {name: 'Enchanted Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Bee Gun', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.QueenBee},//
        {name: 'Possessed Hatchet', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Bee Keeper', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.QueenBee},//
        {name: 'Beenade', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.QueenBee},//
        {name: 'Wasp Gun', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Piranha Gun', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Pygmy Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Bone Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Leaf Blower', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Palladium Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Modified by calamity (?)
        {name: 'Palladium Pike', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Modified by calamity (?)
        {name: 'Palladium Repeater', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Modified by calamity (?)
        {name: 'Orichalcum Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Modified by calamity (?)
        {name: 'Orichalcum Halberd', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Modified by calamity (?)
        {name: 'Orichalcum Repeater', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Modified by calamity (?)
        {name: 'Titanium Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Modified by calamity (?)
        {name: 'Titanium Trident', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Modified by calamity (?)
        {name: 'Titanium Repeater', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},// Modified by calamity (?)
        {name: 'Chlorophyte Claymore', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Chlorophyte Saber', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Chlorophyte Partisan', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Chlorophyte Shotbow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Nimbus Rod', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Sniper Rifle', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Venus Magnum', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Crimson Rod', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Stynger', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Flower Pow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Rainbow Gun', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Flower of Frost', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Uzi', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Magnet Sphere', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Heat Ray', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Staff of Earth', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Golem Fist', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Zombie Arm', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Ice Sickle', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Poison Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Slime Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Book of Skulls', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},//
        {name: 'KO Cannon', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Snowball Cannon', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Bananarang', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Chain Knife', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Death Sickle', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Golden Shower', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Shadowbeam Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Inferno Fork', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Spectre Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Paladins Hammer', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'S.D.M.G.', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MoonLord},//
        {name: 'Vampire Knives', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Scourge of the Corruptor', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Staff of the Frost Hydra', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Candy Corn Rifle', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Jack O Lantern Launcher', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Bat Scepter', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Raven Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Rotten Egg', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Bloody Machete', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'The Horsemans Blade', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Bladed Glove', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Stake Launcher', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Red Ryder', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Candy Cane Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Elf Melter', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Star Anise', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Fruitcake Chakram', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Christmas Tree Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Chain Gun', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Razorpine', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Blizzard Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Snowman Cannon', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'North Pole', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Venom Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Pulse Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Revolver', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Gatligator', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Katana', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Purple Clubberfish', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Obsidian Swordfish', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Swordfish', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Hornet Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.QueenBee},//
        {name: 'Imp Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.EvilBoss},//  Calamity reaver shark buff
        {name: 'Queen Spider Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Anchor', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Palm Wood Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Palm Wood Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Optic Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},// Mech soul weapon
        {name: 'Spider Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Pirate Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Molotov Cocktail', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Falcon Blade', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Flairon', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Duke},//
        {name: 'Tempest Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Duke},//
        {name: 'Razorblade Typhoon', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Duke},//
        {name: 'Bubble Gun', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Duke},//
        {name: 'Tsunami', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Duke},//
        {name: 'Boreal Wood Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Boreal Wood Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Xeno Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Meteor Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Laser Machinegun', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Electrosphere Launcher', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Xenopopper', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Influx Waver', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Charged Blaster Cannon', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'The Bees Knees', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.QueenBee},//
        {name: 'Life Drain', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Dart Pistol', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Dart Rifle', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Chain Guillotines', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Fetid Baghnakhs', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Clinger Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Seedler', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Hellwing Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},//
        {name: 'Daedalus Stormbow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Flying Knife', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Crystal Vile Shard', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Shadowflame Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Shadowflame Hex Doll', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Shadowflame Knife', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Meowmere', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MoonLord},//
        {name: 'Star Wrath', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MoonLord},//
        {name: 'Wand of Sparking', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Javelin', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        // {name: 'Shield of Cthulhu', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.EyeOfCthulhu}, // That would have been funny but uh well
        {name: 'Toxic Flask', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Psycho Knife', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Nail Gun', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Frost Daggerfish', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Crystal Serpent', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Toxikarp', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Bladetongue', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Deadly Sphere Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Slap Hand', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Code 1', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.EyeOfCthulhu},//
        {name: 'Medusa Head', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Wooden Yoyo', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Malaise', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Artery', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Amazon', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Cascade', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},//
        {name: 'Chik', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Code 2', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Rally', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Yelets', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Reds Throw', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.QueenSlime},//
        {name: 'Valkyrie Yoyo', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.QueenSlime},//
        {name: 'Amarok', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Hel-Fire', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Kraken', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'The Eye of Cthulhu', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Format:C', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Gradient', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Valor', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},//
        {name: 'Exotic Scimitar', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Paintball Gun', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Classy Cane', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Stylish Scissors', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Arkhalis', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.QueenSlime},//
        {name: 'Amber Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Bone Javelin', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Bone Throwing Knife', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Terrarian', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MoonLord},//
        {name: 'Solar Eruption', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Cultist},//
        {name: 'Stardust Cell Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Cultist},//
        {name: 'Vortex Beater', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Cultist},//
        {name: 'Nebula Arcanum', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Cultist},//
        {name: 'Platinum Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Platinum Shortsword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Platinum Broadsword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Tungsten Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Tungsten Shortsword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Tungsten Broadsword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Lead Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Lead Shortsword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Lead Broadsword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Tin Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Tin Shortsword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Tin Broadsword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Copper Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Copper Shortsword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Copper Broadsword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Silver Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Silver Shortsword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Silver Broadsword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Gold Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Gold Shortsword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Gold Broadsword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Stardust Dragon Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Cultist},//
        {name: 'Phantasm', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Cultist},//
        {name: 'Last Prism', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MoonLord},//
        {name: 'Nebula Blaze', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Cultist},//
        {name: 'Daybreak', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Cultist},//
        {name: 'Celebration', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Grenade (Any)', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Lunar Portal Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MoonLord},//
        {name: 'Lunar Flare', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MoonLord},//
        {name: 'Rainbow Crystal Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MoonLord},//
        {name: 'Phasesaber (Any)', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Mandible Blade', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Spirit Flame', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Sky Fracture', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Onyx Blaster', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Flameburst Rod', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Flameburst Cane', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Flameburst Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Ale Tosser', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Brand of the Inferno', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Ballista Rod', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Ballista Cane', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Ballista Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Flying Dragon', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Lightning Aura Rod', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Lightning Aura Cane', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Lightning Aura Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Explosive Trap Rod', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Explosive Trap Cane', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Explosive Trap Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Sleepy Octopod', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Ghastly Glaive', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Tome of Infinite Wisdom', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Phantom Phoenix', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Sky Dragons Fury', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Aerial Bane', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Betsys Wrath', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Golem},//
        {name: 'Celebration Mk2', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MoonLord},//
        {name: 'Super Star Shooter', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},// Modified by calamity
        {name: 'Storm Spear', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Thunder Zapper', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Terragrim', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Sanguine Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Blood Thorn', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Drippler Crippler', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Vampire Frog Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Finch Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Gray Zapinator', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.EyeOfCthulhu},//
        {name: 'Orange Zapinator', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Blood Rain Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Gladius', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Desert Tiger Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Leather Whip', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Durendal', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},// Modified by calamity
        {name: 'Morning Star', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Dark Harvest', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Quad-Barrel Shotgun', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},//
        {name: 'Stellar Tune', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Empress},//
        {name: 'Blade Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.QueenSlime},//
        {name: 'Sergeant United Shield', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Shroomerang', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Jousting Lance', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Shadow Jousting Lance', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Hallowed Jousting Lance', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBoss1},// Modified by calamity
        {name: 'Combat Wrench', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},//
        {name: 'Cool Whip', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Firecracker', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Snapthorn', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Kaleidoscope', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Empress},//
        {name: 'Starlight', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Empress},//
        {name: 'Nightglow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Empress},//
        {name: 'Eventide', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Empress},//
        {name: 'Zenith', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MoonLord},// Modified by calamity
        {name: 'Terraprisma', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Empress},//
        {name: 'Mace', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Flaming Mace', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Resonance Scepter', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Plantera},//
        {name: 'Flinx Staff', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Spinal Tap', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Skeletron},//
        {name: 'Tentacle Spike', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Ham Bat', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Bat Bat', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Abigails Flower', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Pew-matic Horn', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Deerclops},//
        {name: 'Weather Pain', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Deerclops},//
        {name: 'Houndius Shootius', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.Deerclops},//
        {name: 'Flymeal', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Wand of Frosting', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Ash Wood Bow', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Ash Wood Sword', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},//
        {name: 'Hive-Five', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.QueenBee},//
        {name: 'Trimarang', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.PreBoss},// Modified by calamity
        {name: 'Waffles Iron', image: 'weapon-images/Vanilla/Default.png',  tier: Boss.MechBossRest},// GetFixedBoi shit
];

export const calamityWeaponData = [	
		//{name: 'Shield of the High Ruler', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge}, // Dash accessory
        {name: 'Dragoon Drizzlefish', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Sparkling Empress', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Frequency Manipulator', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBoss1},// Mech soul weapon
        {name: 'Galvanizing Glaive', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'Gatling Laser', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'Gauss Dagger', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Gauss Pistol', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBoss1},// Mech soul weapon
        {name: 'Gauss Rifle', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'Heavy Laser Rifle', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Matter Modulator', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBoss1},// Mech soul weapon
        {name: 'Mounted Scanner', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBoss1},// Mech soul weapon
        {name: 'Phaseslayer', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Plasma Caster', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Plasma Grenade', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Pole Warper', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Pulse Dragon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Pulse Pistol', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Pulse Rifle', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Pulse Turret Remote', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'Snake Eyes', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Star Swallower Containment Unit', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'System Bane', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'Taser', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Tesla Cannon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'The Anomalys Nanogun', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Tracking Disk', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Wave Pounder', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Abyssal Tome', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SlimeGod},//
        {name: 'Abyss Shocker', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Skeletron},//
        {name: 'Acid Gun', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.EyeOfCthulhu},//
        {name: 'Aetherflux Cannon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Aethers Whisper', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant drop weapon
        {name: 'Alula Australis', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumAureus},//
        {name: 'Anahitas Arpeggio', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Leviathan},//
        {name: 'Apoctosis Array', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Apotheosis', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Aquamarine Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Arch Amaryllis', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'Arctic Bear Paw', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Art Attack', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CababitasClone},//
        {name: 'Asteroid Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Astralachnea Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumAureus},//
        {name: 'Astral Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumDeus},//
        {name: 'Atlantis', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Leviathan},//
        {name: 'Augur of the Elements', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Belching Saxophone', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AquaticScourge},//
        {name: 'Biofusillade', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Black Anurian', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Skeletron},//
        {name: 'Blood Bath', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Brimrose Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Burning Sea', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Chronomancers Scythe', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Clamor Noctus', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Clothiers Wrath', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Skeletron},//
        {name: 'Coral Spout', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Cosmic Rainbow', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'Cryophobia', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Dark Spark', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Deathhail Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Death Valley Duster', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Downpour', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AquaticScourge},//
        {name: 'Effervescence', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Eidolic Wail', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Eidolon Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Eldritch Tome', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SlimeGod},//
        {name: 'Elemental Ray', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Eternity', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Event Horizon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Everglade Spray', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Face Melter', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Fates Reveal', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Flare Bolt', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},// Calamity reaver shark buff
        {name: 'Forbidden Sun', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Frigidflash Bolt', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Frost Bolt', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Genesis', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Ghastly Visage', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Gleaming Magnolia', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Glorious End', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Gruesome Eminence', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Hadal Urn', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Leviathan},//
        {name: 'Helium Flash', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Hellwing Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},// Calamity reaver shark buff
        {name: 'Hematemesis', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Ravager},//
        {name: 'Heresy', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Hyphae Rod', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Crabulon},//
        {name: 'Ice Barrage', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Icicle Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Icicle Trident', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Cryogen},//
        {name: 'Infernal Rift', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Ion Blaster', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBoss1},// Mech soul weapon
        {name: 'Keelhaul', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Leviathan},//
        {name: 'Lashes of Chaos', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CababitasClone},//
        {name: 'Lazhar', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'Light Gods Brilliance', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Mad Alchemists Cocktail Glove', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Dragonfly},//
        {name: 'Magnetic Meltdown', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant material weapon
        {name: 'Mana Rose', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Miasma', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AquaticScourge},//
        {name: 'Mistlestorm', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant material weapon
        {name: 'Nano Purge', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'Nebulous Cataclysm', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Nights Ray', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SlimeGod},//
        {name: 'Nuclear Fury', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Omicron', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Parasitic Scepter', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.EyeOfCthulhu},//
        {name: 'Phantasmal Fury', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Phoenix Flame Barrage', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Photosynthesis', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Plague Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'Plasma Rifle', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Plasma Rod', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Poseidon', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Primordial Ancient', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Primordial Earth', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Purge Guzzler', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Rainbow Party Cannon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Rancor', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Recitation of the Beast', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Relic of Ruin', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Rouge Slash', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Dragonfly},//
        {name: 'Sandstream Scepter', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Sanguine Flare', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Seething Discharge', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Brimstone},//
        {name: 'Serpentine', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Shadecrystal Barrage', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Cryogen},//
        {name: 'Shaderain Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Shadowbolt Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Shifting Sands', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'SHPC', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Sky Glaze', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.EyeOfCthulhu},//
        {name: 'Slithering Eels', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AquaticScourge},//
        {name: 'Snowstorm Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Cryogen},//
        {name: 'Soul Piercer', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Staff of Blushie', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Star Shower', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumDeus},//
        {name: 'Subsuming Vortex', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ExoMechs},//
        {name: 'Sylvestaff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Tacticians Trump Card', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant material weapon
        {name: 'Tears of Heaven', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Teslastaff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant material weapon
        {name: 'The Cauldron', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},// Calamity reaver shark buff
        {name: 'The Dance of Light', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'The Prince', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'The Swarmer', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'The Wand', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Thorn Blossom', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Thunderstorm', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant drop weapon
        {name: 'Tome of Fates', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'Tradewinds', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Ultra Liquidator', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Undines Retribution', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Leviathan},//
        {name: 'Valkyrie Ray', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Veering Wind', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Vehemence', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Venusian Trident', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Vesuvius', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Ravager},//
        {name: 'Viscera', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Vitriolic Viper', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.OldPuke},//
        {name: 'Vivid Clarity', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ExoMechs},//
        {name: 'Void Vortex', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Voltaic Climax', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Waywasher', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Wingman', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Winters Fury', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Wrath of the Ancients', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Wulfrum Prosthesis', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Wyverns Call', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Yharims Crystal', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Absolute Zero', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Abyss Blade', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Leviathan},//
        {name: 'Aegis Blade', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Aftershock', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Air Spinner', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Amidias Trident', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Anarchy Blade', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Aorta', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Ark of the Cosmos', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Ark of the Elements', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Astral Blade', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumDeus},//
        {name: 'Astral Pike', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumDeus},//
        {name: 'Astral Scythe', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumAureus},//
        {name: 'Ataraxia', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Avalanche', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Cryogen},//
        {name: 'Baleful Harvester', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'Ball O Fugu', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Skeletron},//
        {name: 'Banshee Hook', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Basher', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.EyeOfCthulhu},//
        {name: 'Bladecrest Oathsword', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Blighted Cleaver', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Bonebreaker', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AquaticScourge},//
        {name: 'Botanic Piercer', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Brimlance', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Brimstone},//
        {name: 'Brimlash', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CababitasClone},//
        {name: 'Brimstone Sword', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Briny Baron', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Duke},//
        {name: 'Broken Biome Blade', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Burning Revelation', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Burnt Sienna', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Carnage', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Catastrophe Claymore', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Celestial Claymore', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Clam Crusher', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Comet Quasher', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Cosmic Discharge', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Cosmic Shiv', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Crescent Moon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Darklight Greatsword', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Cryogen},//
        {name: 'Deaths Ascension', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Defiled Greatsword', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Depth Crusher', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Devastation', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Devils Devastation', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Devils Sunrise', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Diseased Pike', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'Draconic Destruction', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Dragon Pow', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Dragon Rage', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Earth', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Earthen Pike', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Elemental Lance', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Elemental Shiv', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Empyrean Knives', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Entropic Claymore', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'Essence Flayer', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Eutrophic Scimitar', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Evil Smasher', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Exalted Oathblade', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'Excelsus', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Exoblade', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ExoMechs},//
        {name: 'Fallen Paladins Hammer', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Fault Line', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Feralthorn Claymore', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Flarefrost Blade', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Cryogen},//
        {name: 'Floodtide', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Leviathan},//
        {name: 'Forbidden Oathblade', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBoss1},// Mech soul weapon
        {name: 'Forsaken Saber', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Galaxia', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Fractured Ark', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SlimeGod},//
        {name: 'Gaels Greatsword', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Galactus Blade', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Galaxy Smasher', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Galileo Gladius', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Gelitic Blade', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SlimeGod},//
        {name: 'Gilded Proboscis', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Dragonfly},//
        {name: 'Goldplume Spear', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Grand Guardian', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'Greatsword of Judgement', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Greentide', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Leviathan},//
        {name: 'Hellfire Flamberge', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Hellion Flower Spear', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Hellkite', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Holy Collider', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Illustrious Knives', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Insidious Impaler', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.OldPuke},//
        {name: 'Iridescent Excalibur', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Lacerator', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Lifehunt Scythe', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Lion Heart', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Lucrecia', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Majestic Guard', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBoss1},// mech soul weapon
        {name: 'Mantis Claws', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Mirror Blade', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant drop weapon
        {name: 'Monstrous Knives', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Mourningstar', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Murasama', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Mycelial Claws', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Crabulon},//
        {name: 'Nadir', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Nebulash', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumAureus},//
        {name: 'Neptunes Bounty', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Oblivion', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CababitasClone},//
        {name: 'Old Lord Claymore', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'True Biome Blade', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumDeus},//
        {name: 'Omniblade', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Orderbringer', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Ozzathoth', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Pandemic', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'Perfect Dark', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Phosphorescent Gauntlet', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Plague Keeper', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Prismatic Breaker', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Pwnagehammer', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Quagmire', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Red Sun', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Redtide Spear', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Rems Revenge', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Riptide', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Roxcalibur', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Sahara Slicers', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Sausage Maker', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Scourge of the Cosmos', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Seashine Sword', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Seeking Scorcher', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Shimmerspark', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Cryogen},//
        {name: 'Smoking Comet', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Solstice Claymore', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Soul Harvester', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Spine of Thanatos', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ExoMechs},//
        {name: 'Starnight Lance', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Cryogen},//
        {name: 'Stellar Contempt', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Stellar Striker', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Storm Ruler', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'Storm Saber', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Stream Gouge', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Stygian Shield', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Submarine Shocker', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AquaticScourge},//
        {name: 'Sulphurous Grabber', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AquaticScourge},//
        {name: 'Swordsplosion', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Dragonfly},//
        {name: 'Tainted Blade', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Teardrop Cleaver', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.EyeOfCthulhu},//
        {name: 'Tenebreus Tides', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Terratomere', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Terror Blade', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'The Burning Sky', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'The Dark Master', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'The Enforcer', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'The Gods Gambit', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SlimeGod},//
        {name: 'The Last Mourning', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'The Microwave', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumDeus},//
        {name: 'The Mutilator', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'The Obliterator', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'The Oracle', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Titan Arm', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumAureus},//
        {name: 'Triactis True Paladinian Mage-Hammer of Might', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Ark of the Ancients', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Biome Blade', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Caustic Edge', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Tumbleweed', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Typhons Greed', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Leviathan},//
        {name: 'Ultimus Cleaver', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Ravager},//
        {name: 'Urchin Flail', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Urchin Mace', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Vein Burster', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Violence', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Virulence', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'Void Edge', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Vulcanite Lance', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Wind Blade', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Wulfrum Screwdriver', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Yateveo Bloom', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Yin-Yo', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Aces High', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Adamantite Particle Accelerator', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Alluvion', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Angelic Shotgun', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Animosity', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CababitasClone},//
        {name: 'Anti-materiel Rifle', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Aquashard Shotgun', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Arbalest', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBoss1},// Calamity mech boss drop
        {name: 'Archerfish', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Skeletron},//
        {name: 'Arc Nova Diffuser', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Arietes 41', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Arterial Assault', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Astral Blaster', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumDeus},//
        {name: 'Astral Bow', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumDeus},//
        {name: 'Astreal Defeat', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Auralis', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Aurora Blazer', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumAureus},//
        {name: 'Barinade', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Barinautical', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AquaticScourge},//
        {name: 'Barracuda Gun', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Bladedge Railbow', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Blight Spewer', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'Blissful Bombardier', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Blood Boiler', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Blossom Flux', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Brimstone Fury', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Bullet-Filled Shotgun', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Buzzkill', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBoss1},// Mech soul weapon
        {name: 'Chicken Cannon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Clamor Rifle', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Claret Cannon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Cleansing Blaze', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Clock Gatlignum', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Clockwork Bow', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Condemnation', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Conference Call', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'Contagion', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Continental Greatbow', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Coral Cannon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Corinth Prime', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant material weapon
        {name: 'Corroded Caustibow', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AquaticScourge},//
        {name: 'Crackshot Colt', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Daemons Flame', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Darkecho Greatbow', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Cryogen},//
        {name: 'Dead Suns Wind', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'Deathwind', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Deepcore GK2', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Disseminator', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Dragons Breath', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Drataliornus', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Elemental Eruption', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Eternal Blizzard', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Eviscerator', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Fetid Emesis', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.OldPuke},//
        {name: 'Firestorm Cannon', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},// Calamity reaver shark buff
        {name: 'Flak Kraken', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Leviathan},//
        {name: 'Flak Toxicannon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AquaticScourge},//
        {name: 'Flarewing Bow', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Flurrystorm Cannon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Freedom Star', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Frostbite Blaster', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Cryogen},//
        {name: 'Fungicide', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Crabulon},//
        {name: 'Galeforce', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Golden Eagle', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Dragonfly},//
        {name: 'Goobow', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SlimeGod},//
        {name: 'Gunk Shot', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SlimeGod},//
        {name: 'Halibut Cannon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Halleys Inferno', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Handheld Tank', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Havocs Breath', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CababitasClone},//
        {name: 'Heavenly Gale', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ExoMechs},//
        {name: 'Hellborn', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Brimstone},//
        {name: 'Helstorm', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Hoarfrost Bow', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Cryogen},//
        {name: 'Hydra', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Infinity', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Karasawa', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Kingsbane', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Leviatitan', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Leviathan},//
        {name: 'Lunarian Bow', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SlimeGod},//
        {name: 'Magna Cannon', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Magnomaly Cannon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ExoMechs},//
        {name: 'Malevolence', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'Marksman Bow', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Megalodon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Leviathan},//
        {name: 'Meowthrower', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Midas Prime', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Mineral Mortar', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Molecular Manipulator', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant material weapon
        {name: 'Monsoon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Needler', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Nettlevine Greatbow', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Nitro Express Rifle', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Norfleet', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Nullification Pistol', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Onyx Chain Blaster', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Onyxia', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Opal Striker', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Overloaded Blaster', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SlimeGod},//
        {name: 'P90', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Pearl God', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Pestilent Defiler', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'Phangasm', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Photoviscerator', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ExoMechs},//
        {name: 'Plague Tainted SMG', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'Planetary Annihilation', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Polaris Parrotfish', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Prideful Hunters Planar Ripper', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Pristine Fury', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Pumpler', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Realm Ravager', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Ravager},//
        {name: 'Reed Blowgun', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Rubico Prime', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Sandstorm', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Scorched Earth', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Scorpio', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'SDFMG', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Seadragon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Seas Searing', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AquaticScourge},//
        {name: 'Septic Skewer', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.OldPuke},//
        {name: 'Shadethrower', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Shellshooter', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Shredder', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Shroomer', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'Slag Magnum', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Soma Prime', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Spark Spreader', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Spectralstorm Cannon', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'Speed Blaster', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Spyker', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Starfleet', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Starmada', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Starmageddon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Star Sputter', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumDeus},//
        {name: 'Stellar Cannon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumAureus},//
        {name: 'Storm Dragoon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant drop weapon
        {name: 'Storm Surge', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Sulphuric Acid Cannon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Superradiant Slaughterer', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Surge Driver', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ExoMechs},//
        {name: 'Svantechnical', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Telluric Glare', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'The Ballista', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'The Hive', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'The Jailor', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ExoMechs},//
        {name: 'The Maelstrom', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'The Pack', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Thermocline Blaster', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'The Sevens Striker', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant material weapon
        {name: 'The Storm', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant drop weapon
        {name: 'Titanium Railgun', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Toxibow', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.EyeOfCthulhu},//
        {name: 'Tyrannys End', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Ultima', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Universal Genesis', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Vernal Bolter', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Voidragon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Vortexpopper', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'Wildfire Bloom', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Wulfrum Blunderbuss', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Acidic Rain Barrel', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AquaticScourge},//
        {name: 'Adamantite Throwing Axe', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Alpha Virus', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Apoctolith', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Leviathan},//
        {name: 'Ashen Stalactite', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Auroradical Throw', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumAureus},//
        {name: 'Ballistic Poison Bomb', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Leviathan},//
        {name: 'Blast Barrel', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Blazing Star', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Bloodsoaked Crasher', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Bouncing Eyeball', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Bouncy Spiky Ball', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Brackish Flask', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Leviathan},//
        {name: 'Brimblade', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Burning Strife', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Celestial Reaper', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Celestus', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ExoMechs},//
        {name: 'Cinquedea', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Skeletron},//
        {name: 'Cobalt Kunai', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Consecrated Water', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Contaminated Bile', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.EyeOfCthulhu},//
        {name: 'Corpus Avertor', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Ravager},//
        {name: 'Cosmic Kunai', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant drop weapon
        {name: 'Cranium Smasher', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Ravager},//
        {name: 'Crushsaw Crasher', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CababitasClone},//
        {name: 'Crystalline', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Crystal Piercer', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Cryogen},//
        {name: 'Cursed Dagger', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Deep Sea Dumbbell', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Deep Wounder', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CababitasClone},//
        {name: 'Defective Sphere', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Desecrated Water', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Dukes Decapitator', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Duke},//
        {name: 'Duststorm in a Bottle', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Dynamic Pursuer', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Eclipses Fall', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Elemental Disk', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Enchanted Axe', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Epidemic Shredder', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Equanimity', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Eradicator', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Executioners Blade', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Exorcism', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Fantasy Talisman', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Feather Knife', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Fishbone Boomerang', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Frostcrush Valari', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Frosty Flare', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Gacruxian Mollusk', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Gel Dart', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SlimeGod},//
        {name: 'Ghoulish Gouger', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Gilded Dagger', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Glaive', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Skeletron},//
        {name: 'Gleaming Dagger', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Gods Paranoia', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Grave Grimreaver', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBoss1},// Mech soul weapon
        {name: 'Hardened Honeycomb', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.QueenBee},//
        {name: 'Heavenfallen Stardisk', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumAureus},//
        {name: 'Hells Sun', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ProfanedGuardians},//
        {name: 'Hypothermia', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Icebreaker', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Cryogen},//
        {name: 'Ice Star', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Cryogen},//
        {name: 'Ichor Spear', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Infernal Kris', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},// Calamity reaver shark buff
        {name: 'Infested Clawmerang', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Crabulon},//
        {name: 'Iron Francisca', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Jaws of Oblivion', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Kelvin Catalyst', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Cryogen},//
        {name: 'Kylie', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Skeletron},//
        {name: 'Lead Tomahawk', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Leonid Progenitor', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumAureus},//
        {name: 'Leviathan Teeth', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Leviathan},//
        {name: 'Lionfish', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Skeletron},//
        {name: 'Lunar Kunai', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Malachite', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'Mangrove Chakram', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Metal Monstrosity', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Meteor Fist', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Molten Amputator', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Monkey Darts', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Mycoroot', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Crabulon},//
        {name: 'Mythril Knife', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Nanoblack Reaper', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Nasty Cholla', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Nights Gaze', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Nychthemeron', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Orichalcum Spiked Gemstone', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Palladium Javelin', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Penumbra', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Phantasmal Ruin', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Plaguenade', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Poison Pack', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Prismalline', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Profaned Partisan', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Radiant Star', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumDeus},//
        {name: 'Reality Rupture', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ServantRest},//
        {name: 'Refraction Rotor', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ExoMechs},//
        {name: 'Regulus Riot', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumDeus},//
        {name: 'Rot Ball', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Sacrifice', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Samsara Slicer', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Sand Dollar', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Sandslasher', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Scarlet Devil', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Scourge of the Desert', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Scourge of the Seas', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AquaticScourge},//
        {name: 'Seafoam Bomb', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Sealed Singularity', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant material weapon
        {name: 'Seared Pan', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Seraphim', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Shard of Antumbra', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'Shattered Sun', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Shinobi Blade', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Skeletron},//
        {name: 'Shock Grenade', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Skyfin Bombers', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AquaticScourge},//
        {name: 'Sky Stabber', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Slick Cane', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Skeletron},//
        {name: 'Sludge Splotch', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Snap Clam', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Spear of Destiny', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Spear of Paleolith', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Spent Fuel Container', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AquaticScourge},//
        {name: 'Star of Destruction', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'Stellar Knife', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumAureus},//
        {name: 'Sticky Spiky Ball', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Stormfront Razor', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Subduction Slicer', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Supernova', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ExoMechs},//
        {name: 'Tarragon Throwing Dart', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Terror Talons', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBossRest},//
        {name: 'The Atom Splitter', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ExoMechs},//
        {name: 'The Final Dawn', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'The Old Reaper', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.OldPuke},//
        {name: 'The Syringe', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'Throwing Brick', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Time Bolt', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Titanium Shuriken', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Tooth Ball', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Totality Breakers', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CababitasClone},//
        {name: 'Toxicant Twister', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.OldPuke},//
        {name: 'Turbulance', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Twisting Thunder', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant material weapon
        {name: 'Urchin Stinger', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Utensil Poker', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Valediction', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Wave Skipper', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Web Ball', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Wrathwing', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Wulfrum Knife', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Abandoned Slime Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumAureus},//
        {name: 'Ancient Ice Chunk', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Aquas Scepter', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant material weapon
        {name: 'Ares Exoskeleton', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ExoMechs},//
        {name: 'Atlas Munitions Beacon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ExoMechs},//
        {name: 'Belladonna Spirit Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Black Hawk Remote', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Borealis Bomber', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumAureus},//
        {name: 'Brittle Star Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Cadaverous Carrion', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.OldPuke},//
        {name: 'Calamaris Lament', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Caustic Croaker Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.EyeOfCthulhu},//
        {name: 'Caustic Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Cinder Blossom Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},// Calamity reaver shark buff
        {name: 'Cinders of Lament', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Cnidarian', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Corroslime Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SlimeGod},//
        {name: 'Corvid Harbinger Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Cosmic Immaterializer', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ExoMechs},//
        {name: 'Cosmic Viper Engine', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Cosmilamp', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant drop weapon
        {name: 'Crimslime Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SlimeGod},//
        {name: 'Cryogenic Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Daedalus Golem Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Cryogen},//
        {name: 'Dank Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Dazzling Stabber Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Deathstare Rod', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.EyeOfCthulhu},//
        {name: 'Deepsea Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AquaticScourge},//
        {name: 'Dormant Brimseeker', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Brimstone},//
        {name: 'Dragonblood Disgorger', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Dreadmine Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Leviathan},//
        {name: 'Elemental Axe', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Enchanted Conch', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Endogenesis', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Endo Hydra Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Entropys Vigil', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CababitasClone},//
        {name: 'Ethereal Subjugator', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Eye of Night', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SlimeGod},//
        {name: 'Flamsteed Ring', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Flesh of Infidelity', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Flowers of Mortality', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Forgotten Apex Wand', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Frost Blossom Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Fuel Cell Bundle', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'Gamma Heart', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Gastric Belcher Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Leviathan},//
        {name: 'Glacial Embrace', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Cryogen},//
        {name: 'Guidelight of Oblivion', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Harvest Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Haunted Scroll', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Herring Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Skeletron},//
        {name: 'Hive Pod', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumAureus},//
        {name: 'Igneous Exaltation', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Infected Remote', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Plaguebringer},//
        {name: 'King of Constellations, Tenryu', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant material weapon
        {name: 'Lilies of Finality', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Metastasis', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Midnight Sun Beacon', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Mirror of Kalandra', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Mutated Truffle', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.OldPuke},//
        {name: 'Orthocera Shell', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AquaticScourge},//
        {name: 'Perdition', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Plantation Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Polyp Launcher', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DesertScourge},//
        {name: 'Puff Shroom', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Crabulon},//
        {name: 'Resurrection Butterfly', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Rusty Beacon Prototype', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.EyeOfCthulhu},//
        {name: 'Sanctified Spark', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Sand Sharknado Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Saros Possession', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Scab Ripper', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Shellfish Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Sirius', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Slime Puppet Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SlimeGod},//
        {name: 'Spikecrag Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Ravager},//
        {name: 'Squirrel Squire Staff', image: 'weapon-images/CalamityMod/Default.png', tier: Boss.PreBoss},//
        {name: 'Staff of Necrosteocytes', image: 'weapon-images/CalamityMod/Default.png', tier: Boss.Skeletron},//
        {name: 'Staff of the Mechworm', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.DOG},//
        {name: 'Starspawn Helix Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.AstrumDeus},//
        {name: 'Stellar Torus Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant material weapon
        {name: 'Stormjaw Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Sun Spirit Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Tactical Plague Engine', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MoonLord},//
        {name: 'Temporal Umbrella', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Tundra Flame Blossoms Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Universe Splitter', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Vengeful Sun Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Vigilance', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.SupremeCababitas},//
        {name: 'Vile Feeder', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Viral Sprout', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Plantera},//
        {name: 'Virid Vanguard', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Void Concentration Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Servant1},// Servant drop weapon
        {name: 'Warloks Moon Fist', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Polterghast},//
        {name: 'Wither Blossoms Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Golem},//
        {name: 'Wulfrum Controller', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Yharons Kindle Staff', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Yharon},//
        {name: 'Aestheticus', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.CalamityEvil},//
        {name: 'Eye of Magnus', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.Cultist},//
        {name: 'Lunic Eye', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
		// additional weapons that were filtered for one or another reason
        {name: 'Axe of Purity', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Feller of Evergreens', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.PreBoss},//
        {name: 'Grax', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.Providence},//
        {name: 'Inferna Cutter', image: 'weapon-images/CalamityMod/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Photon Ripper', image: 'weapon-images/CalamityMod/Default.png',  tier: Calamityboss.ExoMechs},//
];

export const starsAboveWeaponData=[
		//{name: 'Every Moment Matters', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Vagrant},// removed
        //{name: 'Persephone', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Vagrant},// removed
        {name: 'Gloves of the Black Silence', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Golem},//
        {name: 'Kariumus Favor', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Duke},//
        {name: 'Bury The Light', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.WarriorOfLight},// Changed by calamity
        {name: 'Catalysts Memory', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Cultist},//
        //{name: 'Ignition Astra', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Vagrant},// Unob
        //{name: 'Origin Infinity', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Vagrant},// Unob
        {name: 'The Only Thing I Know For Real', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Arbitration},//
        {name: 'Ultima Thule', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Tsukiyomi},// Changed by calamity
        {name: 'Virtues Edge', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MoonLord},// Changed by calamity
        {name: 'Aegis Driver', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.KingSlime},//
        {name: 'Carian Dark Moon', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.EyeOfCthulhu},//
        {name: 'Cloak of An Arbiter', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Cultist},//
        {name: 'Dragged Below', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Dreamers Inkwell', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Plantera},//
        {name: 'Eternal Star', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MoonLord},//
        {name: 'Gund-bit Siege', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Cultist},//
        {name: 'Hunters Symphony', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.QueenSlime},//
        {name: 'Irminsuls Dream', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Vagrant},//
        {name: 'Light Unrelenting', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.WarriorOfLight},//
        {name: 'Ozma Ascendant', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Cultist},//
        {name: 'Paradise Lost', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.WarriorOfLight},//
        {name: 'Rad Gun', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.KingSlime},//
        {name: 'Vermilion Riposte', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.WarriorOfLight},// Changed by calamity
        {name: 'Sanguine Despair', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.PreBoss},//
        {name: 'Stygian Nymph', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Plantera},//
        {name: 'Supreme Authority', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.WarriorOfLight},//
        {name: 'Twin Stars of Albiero', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Cultist},//
        {name: 'Veneration Of Butterflies', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Vermilion Daemon', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MoonLord},//
        {name: 'Vision of Euthymia', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Penthesilea},//
        {name: 'Voice of the Fallen', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Plantera},//
        {name: 'Ashen Ambition', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.EvilBoss},//
        {name: 'The Blood Blade', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Plantera},//
        {name: 'Burning Desire', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.WarriorOfLight},//
        {name: 'Claimh Solais', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Nalhaun},//
        {name: 'Crimson Sakura Alpha', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Duke},//
        {name: 'Drachenlance', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Hullwrought', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Hullwrought MK. II', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MoonLord},// changed by calamity
        {name: 'Inugami Ripsaw', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.QueenBee},//
        {name: 'Karlan Truesilver', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Liberation Blazing', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Arbitration},//
        {name: 'Maniacal Justice', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Duke},//
        {name: 'Memento Muse', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MechBoss1},// changed by calamity
        {name: 'Mercy', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Golem},//
        {name: 'Miserys Company', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Skeletron},//
        {name: 'Naganadel', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MoonLord},//
        {name: 'Penthesileas Muse', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Penthesilea},// changed by calamity
        {name: 'Clarent Rebellion', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Nalhaun},//
        {name: 'Rex Lapis', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Cultist},//
        {name: 'Sakuras Vengeance', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Empress},//
        {name: 'Shadowless Cerulean', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MoonLord},//
        {name: 'Skofnung', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MoonLord},//
        {name: 'Armaments of the Sky Striker', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MechBoss1},// changed by calamity
        {name: 'Soul Reaver', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MoonLord},//
        {name: 'Umbra', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Cultist},//
        {name: 'Unforgotten', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Cultist},//
        {name: 'Xenoblade', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Yunlai Stiletto', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Cultist},//
        {name: 'Architects Luminance', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Tsukiyomi},//
        {name: 'Der Freischutz', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Skeletron},//
        {name: 'Dreadmothers Dark Idol', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Nalhaun},//
        {name: 'Aurum Edge', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Gossamer Needle', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Skeletron},//
        {name: 'Hawkmoon', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.QueenSlime},//
        {name: 'Boltstorm Axe', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Nalhaun},//
        {name: 'Manifestation', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Arbitration},//
        {name: 'Orbital Expressway Plush', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Phasmasaber', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MechBoss1},// changed by calamity
        {name: 'Soliloquy Of Sovereign Seas', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Thespian},//
        // {name: 'Suistrume', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MoonLord}, // utilitty
        {name: 'Sunset of the Sun God', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Tsukiyomi},// changed by calamity
        {name: 'Wolvesbane', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Wolvesbane Awakened', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Cultist},//
        {name: 'Wolvesbane Rearmed', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Plantera},//
        {name: 'Cosmic Destroyer', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Tsukiyomi},// changed by calamity
        {name: 'Crimson Outbreak', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Plantera},//
        {name: 'Death In Four Acts', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Skeletron},//
        {name: 'Devoted Havoc', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Thespian},//
        {name: 'Dreadnought Chemtank', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.QueenSlime},//
        {name: 'El Capitans Hardware', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MechBossRest},//
        {name: 'Force-of-Nature', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Genocide', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Golem},//
        {name: 'Inherited Case, M4A1', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Cultist},//
        {name: 'Izanagis Edge', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.QueenSlime},//
        {name: 'The Kiss of Death', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Golem},//
        {name: 'Neo Dealmaker', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Plenilune Gaze', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Golem},//
        {name: 'Quis Ut Deus', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.WarriorOfLight},//
        {name: 'Ride the Bull', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MechBoss1},// changed by calamity
        {name: 'Saltwater Scourge', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'Shock & Awe', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.EvilBoss},//
        {name: 'String of Curses', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MechBoss1},//
        {name: 'Tartaglia', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Golem},//
        {name: 'Two-Crown Bow', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MoonLord},//
        {name: 'Adornment of the Chaotic God', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.QueenSlime},//
        {name: 'Takonomicon', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.EvilBoss},//
        {name: 'Apalistik', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Skeletron},//
        {name: 'Seaborn Apalistik', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.MechBoss1},// changed by calamity
        {name: 'Arachnid Needlepoint', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Empress},//
        {name: 'C?sura of Despair', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Plantera},//
        {name: 'Candied Sugar Ball', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Thespian},//
        {name: 'Chronoclock', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Vagrant},//
        {name: 'Key of the Sinner', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Duke},//
        {name: 'Dragalia Found', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Thespian},//
        {name: 'Hollowheart Albion', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.QueenSlime},//
        {name: 'Kazimierz Seraphim', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Skeletron},//
        {name: 'Key of the Kings Law', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.WarriorOfLight},//
        {name: 'Kifrosse', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Plantera},//
        {name: 'Konpaku Katana', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.EyeOfCthulhu},//
        {name: 'Kroniic Principality', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Penthesilea},//
        {name: 'Luminary Wand', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.WallOfFlesh},//
        {name: 'The Morning Star', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Deerclops},//
        {name: 'Phantom in the Mirror', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Dioskouroi},//
        {name: 'Pod Zero-42', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Skeletron},//
        //{name: 'Ruptured Heaven', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Vagrant},// unob
        {name: 'Sparkblossoms Beacon', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.QueenSlime},//
        {name: 'Starphoenix Funnel', image: 'weapon-images/StarsAbove/Default.png',  tier: Boss.Plantera},//
        {name: 'Trickspin Two-Step', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Vagrant},//
        {name: 'Wavedancer', image: 'weapon-images/StarsAbove/Default.png',  tier: StarsAboveBoss.Thespian},//
];

export const allWeaponData=[
    {weapons: vanillaWeaponData, source: ContentLabels.Vanilla},
    {weapons: calamityWeaponData, source: ContentLabels.Calamity},
    {weapons: starsAboveWeaponData, source: ContentLabels.StarsAbove}
];
