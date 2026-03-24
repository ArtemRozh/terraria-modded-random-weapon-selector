import { Boss } from "../vanilla/vanillaBoss.data"
import { ThoriumBoss } from "./thoriumBoss.data"
import { CalamityTag } from "../../tag.data"
import { VanillaTag } from "../../tag.data"
export const thoriumWeaponData=[
 {name: 'Aerial', image: 'https://thoriummod.wiki.gg/images/Aerial.png?c61142', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Melee', rarity: 'Green'},//
 {name: 'Blooming Blade', image: 'https://thoriummod.wiki.gg/images/Blooming_Blade.png?a85a69', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Melee', rarity: 'Green'},//
 {name: 'Blooming Bow', image: 'https://thoriummod.wiki.gg/images/Blooming_Bow.png?dc651d', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Ranged', rarity: 'Green'},//
 {name: 'Blooming Staff', image: 'https://thoriummod.wiki.gg/images/Blooming_Staff.png?911937', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Magic', rarity: 'Green'},//
 {name: 'Feather Foe', image: 'https://thoriummod.wiki.gg/images/Feather_Foe.png?b0fd3e', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Ranged', rarity: 'Green'},//
 {name: 'Goblin Warpipe', image: 'https://thoriummod.wiki.gg/images/Goblin_Warpipe.png?6d9ff0', tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Green'},//
 {name: 'Goblin War Spear', image: 'https://thoriummod.wiki.gg/images/Goblin_War_Spear.png?c513ad', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Throwing', rarity: 'Green'},//
 {name: 'Harpys Barrage', image: 'https://thoriummod.wiki.gg/images/Harpy%27s_Barrage.png?7814cf', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Throwing', rarity: 'Green'},//
 {name: 'Harpy Pelter', image: 'https://thoriummod.wiki.gg/images/Harpy_Pelter.png?39bc76', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Ranged', rarity: 'Green'},//
 {name: 'Harpy Talon', image: 'https://thoriummod.wiki.gg/images/Harpy_Talon.png?74eaf6', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Melee', rarity: 'Green'},//
 {name: 'Rod of Flocking', image: 'https://thoriummod.wiki.gg/images/Rod_of_Flocking.png?41eb36', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Summon', rarity: 'Green'},//
 {name: 'Shadowflame Staff', image: 'https://thoriummod.wiki.gg/images/Shadowflame_Staff.png?743059', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Magic', rarity: 'Green'},//
 {name: 'Yew Wood Bow', image: 'https://thoriummod.wiki.gg/images/Yew_Wood_Bow.png?dee884', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Ranged', rarity: 'Green'},//
 {name: 'Yew Wood Flintlock', image: 'https://thoriummod.wiki.gg/images/Yew_Wood_Flintlock.png?ac1e7b', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Ranged', rarity: 'Green'},//
 {name: 'Acoustic Guitar', image: 'https://thoriummod.wiki.gg/images/Acoustic_Guitar.png?1f148a', tier: [Boss.WallOfFlesh], tags: [], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Adamantite Klaxon', image: 'https://thoriummod.wiki.gg/images/Adamantite_Klaxon.png?e7a398', tier: [Boss.WallOfFlesh], tags: [CalamityTag.TitaniumAdamantite], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Alphorn', image: 'https://thoriummod.wiki.gg/images/Alphorn.png?62b292', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'Blue'},//
 {name: 'Antlion Maraca', image: 'https://thoriummod.wiki.gg/images/Antlion_Maraca.png?d57e4f', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'White'},//
 {name: 'Bagpipe', image: 'https://thoriummod.wiki.gg/images/Bagpipe.png?2cca2c', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Bassoon', image: 'https://thoriummod.wiki.gg/images/Bassoon.png?a09b33', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Symphonic', rarity: 'Yellow'},//
 {name: 'Betsys Bellow', image: 'https://thoriummod.wiki.gg/images/Betsy%27s_Bellow.png?73db19', tier: [Boss.Golem], tags: [], class: 'Symphonic', rarity: 'Yellow'},//
 {name: 'Blooming Bell', image: 'https://thoriummod.wiki.gg/images/Blooming_Bell.png?b42af9', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Symphonic', rarity: 'Green'},//
 {name: 'Bone Trumpet', image: 'https://thoriummod.wiki.gg/images/Bone_Trumpet.png?2940cf', tier: [Boss.Skeletron], tags: [], class: 'Symphonic', rarity: 'Green'},//
 {name: 'Bongos', image: 'https://thoriummod.wiki.gg/images/Bongos.png?a63abb', tier: [Boss.EvilBoss], tags: [CalamityTag.PreBossHellstone], class: 'Symphonic', rarity: 'Orange'},//
 {name: 'Buisine', image: 'https://thoriummod.wiki.gg/images/Buisine.png?88bf85', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Symphonic', rarity: 'Yellow'},//
 {name: 'Calaveras', image: 'https://thoriummod.wiki.gg/images/Calaveras.png?c18be3', tier: [Boss.Skeletron], tags: [], class: 'Symphonic', rarity: 'Green'},//
 {name: 'Chrono Ocarina', image: 'https://thoriummod.wiki.gg/images/Chrono_Ocarina.png?21b145', tier: [Boss.WallOfFlesh], tags: [], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Clarinet', image: 'https://thoriummod.wiki.gg/images/Clarinet.png?d16b66', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Symphonic', rarity: 'Yellow'},//
 {name: 'Cobalt Gong', image: 'https://thoriummod.wiki.gg/images/Cobalt_Gong.png?c78f81', tier: [Boss.WallOfFlesh], tags: [], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Concertina', image: 'https://thoriummod.wiki.gg/images/Concertina.png?5f1cdf', tier: [Boss.WallOfFlesh], tags: [], class: 'Symphonic', rarity: 'Pink'},//
 {name: 'Dragons Wail', image: 'https://thoriummod.wiki.gg/images/Dragon%27s_Wail.png?d6446e', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Corruption, CalamityTag.MythrilOrichalcum], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Drum Mallet', image: 'https://thoriummod.wiki.gg/images/Drum_Mallet.png?451735', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'White'},//
 {name: 'Dukes Regal Carnyx', image: 'https://thoriummod.wiki.gg/images/Duke%27s_Regal_Carnyx.png?1b730b', tier: [Boss.Duke], tags: [], class: 'Symphonic', rarity: 'Yellow'},//
 {name: 'Dynasty Guzheng', image: 'https://thoriummod.wiki.gg/images/Dynasty_Guzheng.png?76abed', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'Blue'},//
 {name: 'Ebonwood Tambourine', image: 'https://thoriummod.wiki.gg/images/Ebonwood_Tambourine.png?b4d145', tier: [Boss.PreBoss], tags: [VanillaTag.Corruption], class: 'Symphonic', rarity: 'Blue'},//
 {name: 'Fishbone', image: 'https://thoriummod.wiki.gg/images/Fishbone.png?bd0027', tier: [Boss.Plantera], tags: [], class: 'Symphonic', rarity: 'Yellow'},//
 {name: 'Flesh Horn', image: 'https://thoriummod.wiki.gg/images/Flesh_Horn.png?88a676', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Crimson, CalamityTag.MythrilOrichalcum], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Flute', image: 'https://thoriummod.wiki.gg/images/Flute.png?722e23', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'Blue'},//
 {name: 'Forest Ocarina', image: 'https://thoriummod.wiki.gg/images/Forest_Ocarina.png?f85aec', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'Green'},//
 {name: 'Frostwind Cymbals', image: 'https://thoriummod.wiki.gg/images/Frostwind_Cymbals.png?4ff95d', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Geode Saxophone', image: 'https://thoriummod.wiki.gg/images/Geode_Saxophone.png?da3b2d', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Ghastly French Horn', image: 'https://thoriummod.wiki.gg/images/Ghastly_French_Horn.png?a6b94b', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Symphonic', rarity: 'Yellow'},//
 {name: 'Gold Bugle Horn', image: 'https://thoriummod.wiki.gg/images/Gold_Bugle_Horn.png?62b1b1', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'White'},//
 {name: 'Grand Piano', image: 'https://thoriummod.wiki.gg/images/Grand_Piano.png?7e9d32', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'Blue'},//
 {name: 'Granite Boom Box', image: 'https://thoriummod.wiki.gg/images/Granite_Boom_Box.png?f1ab65', tier: [Boss.Skeletron], tags: [], class: 'Symphonic', rarity: 'Orange'},//
 {name: 'Hallowed Megaphone', image: 'https://thoriummod.wiki.gg/images/Hallowed_Megaphone.png?734b34', tier: [Boss.MechBoss1], tags: [CalamityTag.Hollow], class: 'Symphonic', rarity: 'Pink'},//
 {name: 'Harmonica', image: 'https://thoriummod.wiki.gg/images/Harmonica.png?70ca57', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'White'},//
 {name: 'Haunting Bass Drum', image: 'https://thoriummod.wiki.gg/images/Haunting_Bass_Drum.png?fcdd54', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Symphonic', rarity: 'Yellow'},//
 {name: 'Hells Bell', image: 'https://thoriummod.wiki.gg/images/Hell%27s_Bell.png?9a3ac7', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Symphonic', rarity: 'Pink'},//
 {name: 'Honey Recorder', image: 'https://thoriummod.wiki.gg/images/Honey_Recorder.png?1640f8', tier: [Boss.QueenBee], tags: [], class: 'Symphonic', rarity: 'Orange'},//
 {name: 'Hot Horn', image: 'https://thoriummod.wiki.gg/images/Hot_Horn.png?99953d', tier: [Boss.EvilBoss], tags: [CalamityTag.PreBossHellstone], class: 'Symphonic', rarity: 'Orange'},//
 {name: 'Icy Piccolo', image: 'https://thoriummod.wiki.gg/images/Icy_Piccolo.png?8667b3', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'White'},//
 {name: 'Jar O Mayo', image: 'https://thoriummod.wiki.gg/images/Jar_O%27_Mayo.png?78d84c', tier: [Boss.KingSlime, Boss.EvilBoss], tags: [], class: 'Symphonic', rarity: 'Green'},//
 {name: 'Jingle Bells', image: 'https://thoriummod.wiki.gg/images/Jingle_Bells.png?89eaf9', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Symphonic', rarity: 'Yellow'},//
 {name: 'Kazoo', image: 'https://thoriummod.wiki.gg/images/Kazoo.png?21d08c', tier: [ThoriumBoss.FallenBeholder], tags: [], class: 'Symphonic', rarity: 'Pink'},//
 {name: 'Lightning Claves', image: 'https://thoriummod.wiki.gg/images/Lightning_Claves.png?a8202e', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'Blue'},//
 {name: 'Lodestone Radio', image: 'https://thoriummod.wiki.gg/images/Lodestone_Radio.png?649da7', tier: [Boss.WallOfFlesh, ThoriumBoss.FallenBeholder], tags: [CalamityTag.MythrilOrichalcum], class: 'Symphonic', rarity: 'Pink'},//
 {name: 'Marine Wine Glass', image: 'https://thoriummod.wiki.gg/images/Marine_Wine_Glass.png?6f682b', tier: [Boss.EvilBoss], tags: [], class: 'Symphonic', rarity: 'Green'},//
 {name: 'Meteorite Oboe', image: 'https://thoriummod.wiki.gg/images/Meteorite_Oboe.png?b6bf33', tier: [Boss.EvilBoss], tags: [], class: 'Symphonic', rarity: 'Blue'},//
 {name: 'Microphone', image: 'https://thoriummod.wiki.gg/images/Microphone.png?5deccb', tier: [Boss.Skeletron], tags: [], class: 'Symphonic', rarity: 'Green'},//
 {name: 'Midnight Bass Booster', image: 'https://thoriummod.wiki.gg/images/Midnight_Bass_Booster.png?6c3e43', tier: [Boss.Skeletron, Boss.MechBossRest], tags: [], class: 'Symphonic', rarity: 'Light Purple'},//
 {name: 'Mythril Melodica', image: 'https://thoriummod.wiki.gg/images/Mythril_Melodica.png?25f3c1', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Nocturne', image: 'https://thoriummod.wiki.gg/images/Nocturne.png?a79213', tier: [Boss.Skeletron], tags: [], class: 'Symphonic', rarity: 'Orange'},//
 {name: 'Obsidian Rackett', image: 'https://thoriummod.wiki.gg/images/Obsidian_Rackett.png?3189ac', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'Blue'},//
 {name: 'Organ', image: 'https://thoriummod.wiki.gg/images/Organ.png?136c0c', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Symphonic', rarity: 'Yellow'},//
 {name: 'Orichalcum Slide Whistle', image: 'https://thoriummod.wiki.gg/images/Orichalcum_Slide_Whistle.png?965436', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Palladium Cowbell', image: 'https://thoriummod.wiki.gg/images/Palladium_Cowbell.png?7d26ea', tier: [Boss.WallOfFlesh], tags: [], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Panflute', image: 'https://thoriummod.wiki.gg/images/Panflute.png?1f007d', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'Orange'},//
 {name: 'Platinum Bugle Horn', image: 'https://thoriummod.wiki.gg/images/Platinum_Bugle_Horn.png?70b6a3', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'White'},//
 {name: 'Primes Roar', image: 'https://thoriummod.wiki.gg/images/Prime%27s_Roar.png?55d6fc', tier: [Boss.MechBossRest], tags: [], class: 'Symphonic', rarity: 'Light Purple'},//
 {name: 'Pungi', image: 'https://thoriummod.wiki.gg/images/Pungi.png?6f6493', tier: [Boss.Plantera], tags: [], class: 'Symphonic', rarity: 'Yellow'},//
 {name: 'Riff Weaver', image: 'https://thoriummod.wiki.gg/images/Riff_Weaver.png?dce3cd', tier: [Boss.WallOfFlesh], tags: [], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Riveting Tadpole', image: 'https://thoriummod.wiki.gg/images/Riveting_Tadpole.png?b78262', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'Green'},//
 {name: 'Scholars Harp', image: 'https://thoriummod.wiki.gg/images/Scholar%27s_Harp.png?6c80d2', tier: [Boss.WallOfFlesh], tags: [], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Scuba Curva', image: 'https://thoriummod.wiki.gg/images/Scuba_Curva.png?77f2df', tier: [Boss.EvilBoss], tags: [], class: 'Symphonic', rarity: 'Green'},//
 {name: 'Seashell Castanets', image: 'https://thoriummod.wiki.gg/images/Seashell_Castanets.png?c5f224', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'White'},//
 {name: 'Serpents Cry', image: 'https://thoriummod.wiki.gg/images/Serpent%27s_Cry.png?8fe282', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Shadewood Tambourine', image: 'https://thoriummod.wiki.gg/images/Shadewood_Tambourine.png?104608', tier: [Boss.PreBoss], tags: [VanillaTag.Crimson], class: 'Symphonic', rarity: 'Blue'},//
 {name: 'Shadowflame Warhorn', image: 'https://thoriummod.wiki.gg/images/Shadowflame_Warhorn.png?820e52', tier: [Boss.WallOfFlesh], tags: [], class: 'Symphonic', rarity: 'Pink'},//
 {name: 'Shooting Star Blast-Guitar', image: 'https://thoriummod.wiki.gg/images/Shooting_Star_Blast-Guitar.png?34426f', tier: [Boss.Cultist], tags: [], class: 'Symphonic', rarity: 'Red'},//
 {name: 'Sitar', image: 'https://thoriummod.wiki.gg/images/Sitar.png?de670f', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'Blue'},//
 {name: 'Skyware Lute', image: 'https://thoriummod.wiki.gg/images/Skyware_Lute.png?b520d9', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'Blue'},//
 {name: 'Snowstorm Banjo', image: 'https://thoriummod.wiki.gg/images/Snowstorm_Banjo.png?64f4df', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Song of Ice & Fire', image: 'https://thoriummod.wiki.gg/images/Song_of_Ice_%26_Fire.png?13baf3', tier: [Boss.Skeletron], tags: [], class: 'Symphonic', rarity: 'Green'},//
 {name: 'Sonic Amplifier', image: 'https://thoriummod.wiki.gg/images/Sonic_Amplifier.png?413468', tier: [Boss.MoonLord], tags: [], class: 'Symphonic', rarity: 'Red'},//
 {name: 'Sound Sages Lament', image: 'https://thoriummod.wiki.gg/images/Sound_Sage%27s_Lament.png?475d3e', tier: [Boss.Cultist], tags: [], class: 'Symphonic', rarity: 'Red'},//
 {name: 'Steam Flute', image: 'https://thoriummod.wiki.gg/images/Steam_Flute.png?1206b7', tier: [Boss.MechBoss1], tags: [], class: 'Symphonic', rarity: 'Pink'},//
 {name: 'Steel Drum', image: 'https://thoriummod.wiki.gg/images/Steel_Drum.png?767d52', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'Green'},//
 {name: 'Sunflare Guitar', image: 'https://thoriummod.wiki.gg/images/Sunflare_Guitar.png?a40b55', tier: [Boss.MechBoss1], tags: [], class: 'Symphonic', rarity: 'Pink'},//
 {name: 'Tambourine', image: 'https://thoriummod.wiki.gg/images/Tambourine.png?676f89', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'White'},//
 {name: 'Terrarium Autoharp', image: 'https://thoriummod.wiki.gg/images/Terrarium_Autoharp.png?5e7521', tier: [Boss.Cultist], tags: [], class: 'Symphonic', rarity: 'Terrarium'},//
 {name: 'The Green Tambourine', image: 'https://thoriummod.wiki.gg/images/The_Green_Tambourine.png?2b807c', tier: [Boss.MechBossRest], tags: [], class: 'Symphonic', rarity: 'Lime'},//
 {name: 'The Lullaby', image: 'https://thoriummod.wiki.gg/images/Lullaby.png?f91890', tier: [Boss.WallOfFlesh], tags: [], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'The Maw', image: 'https://thoriummod.wiki.gg/images/The_Maw.png?ed81cd', tier: [Boss.Plantera], tags: [], class: 'Symphonic', rarity: 'Lime'},//
 {name: 'The Triangle', image: 'https://thoriummod.wiki.gg/images/The_Triangle.png?c7b1f3', tier: [Boss.Golem], tags: [], class: 'Symphonic', rarity: 'Yellow'},//
 {name: 'Titanium Cimbasso', image: 'https://thoriummod.wiki.gg/images/Titanium_Cimbasso.png?eba722', tier: [Boss.WallOfFlesh], tags: [CalamityTag.TitaniumAdamantite], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Trombone', image: 'https://thoriummod.wiki.gg/images/Trombone.png?241dc4', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Bronze Tuning Fork', image: 'https://thoriummod.wiki.gg/images/Bronze_Tuning_Fork.png?95ce7a', tier: [Boss.Skeletron], tags: [], class: 'Symphonic', rarity: 'Orange'},//
 {name: 'Turntable', image: 'https://thoriummod.wiki.gg/images/Turntable.png?cc2e29', tier: [Boss.Golem], tags: [], class: 'Symphonic', rarity: 'Yellow'},//
 {name: '24-Carat Tuba', image: 'https://thoriummod.wiki.gg/images/24-Carat_Tuba.png?560c3f', tier: [Boss.WallOfFlesh], tags: [], class: 'Symphonic', rarity: 'Pink'},//
 {name: 'Ukulele', image: 'https://thoriummod.wiki.gg/images/Ukulele.png?681a56', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'White'},//
 {name: 'Valadium Theremin', image: 'https://thoriummod.wiki.gg/images/Valadium_Theremin.png?2a56e0', tier: [Boss.WallOfFlesh, ThoriumBoss.FallenBeholder], tags: [CalamityTag.MythrilOrichalcum], class: 'Symphonic', rarity: 'Pink'},//
 {name: 'Vinyl Record', image: 'https://thoriummod.wiki.gg/images/Vinyl_Record.png?a45fc8', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Violin', image: 'https://thoriummod.wiki.gg/images/Violin.png?2469ec', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Vuvuzela (Any)', image: 'https://thoriummod.wiki.gg/images/Vuvuzela_Yellow.png?b86a94', tier: [Boss.Plantera], tags: [], class: 'Symphonic', rarity: 'Lime'},//
 {name: 'Wind Chimes', image: 'https://thoriummod.wiki.gg/images/Wind_Chimes.png?c427da', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Wooden Whistle', image: 'https://thoriummod.wiki.gg/images/Wooden_Whistle.png?27879d', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'White'},//
 {name: 'Xylophone', image: 'https://thoriummod.wiki.gg/images/Xylophone.png?4aacec', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Symphonic', rarity: 'Light Red'},//
 {name: 'Yew Wood Lute', image: 'https://thoriummod.wiki.gg/images/Yew_Wood_Lute.png?ba0c25', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Symphonic', rarity: 'Green'},//
 {name: 'Ice Fairy Staff', image: 'https://thoriummod.wiki.gg/images/Ice_Fairy_Staff.png?946cb4', tier: [Boss.WallOfFlesh], tags: [], class: 'Summon', rarity: 'Light Red'},//
 {name: 'Borean Fang Staff', image: 'https://thoriummod.wiki.gg/images/Borean_Fang_Staff.png?6e14f2', tier: [ThoriumBoss.BoreanStrider], tags: [], class: 'Magic', rarity: 'Pink'},//
 {name: 'Freeze Ray', image: 'https://thoriummod.wiki.gg/images/Freeze_Ray.png?f3580b', tier: [ThoriumBoss.BoreanStrider], tags: [], class: 'Ranged', rarity: 'Pink'},//
 {name: 'Glacial Sting', image: 'https://thoriummod.wiki.gg/images/Glacial_Sting.png?7e3866', tier: [ThoriumBoss.BoreanStrider], tags: [], class: 'Ranged', rarity: 'Pink'},//
 {name: 'Glacier', image: 'https://thoriummod.wiki.gg/images/Glacier.png?33338e', tier: [ThoriumBoss.BoreanStrider], tags: [], class: 'Melee', rarity: 'Pink'},//
 {name: 'The Cryo-Fang', image: 'https://thoriummod.wiki.gg/images/The_Cryo-Fang.png?d42770', tier: [ThoriumBoss.BoreanStrider], tags: [], class: 'Throwing', rarity: 'Pink'},//
 {name: 'Champions Bomber Staff', image: 'https://thoriummod.wiki.gg/images/Champion%27s_Bomber_Staff.png?c950be', tier: [ThoriumBoss.BuriedChampion], tags: [], class: 'Magic', rarity: 'Orange'},//
 {name: 'Champions God Hand', image: 'https://thoriummod.wiki.gg/images/Champion%27s_God_Hand.png?26c6b2', tier: [ThoriumBoss.BuriedChampion], tags: [], class: 'Throwing', rarity: 'Orange'},//
 {name: 'Champions Trifecta-Shot', image: 'https://thoriummod.wiki.gg/images/Champion%27s_Trifecta-Shot.png?f1d201', tier: [ThoriumBoss.BuriedChampion], tags: [], class: 'Ranged', rarity: 'Orange'},//
 {name: 'Champions Swift Blade', image: 'https://thoriummod.wiki.gg/images/Champion%27s_Swift_Blade.png?526777', tier: [ThoriumBoss.BuriedChampion], tags: [], class: 'Melee', rarity: 'Orange'},//
 {name: 'Beholder Staff', image: 'https://thoriummod.wiki.gg/images/Beholder_Staff.png?c58bdb', tier: [ThoriumBoss.FallenBeholder], tags: [], class: 'Summon', rarity: 'Pink'},//
 {name: 'Cello', image: 'https://thoriummod.wiki.gg/images/Cello.png?a2bdb3', tier: [ThoriumBoss.FallenBeholder], tags: [], class: 'Symphonic', rarity: 'Pink'},//
 {name: 'Hellish Halberd', image: 'https://thoriummod.wiki.gg/images/Hellish_Halberd.png?86492a', tier: [ThoriumBoss.FallenBeholder], tags: [], class: 'Melee', rarity: 'Pink'},//
 {name: 'Hell Roller', image: 'https://thoriummod.wiki.gg/images/Hell_Roller.png?8ad4ed', tier: [ThoriumBoss.FallenBeholder], tags: [], class: 'Throwing', rarity: 'Pink'},//
 {name: 'Obliterator', image: 'https://thoriummod.wiki.gg/images/Obliterator.png?5ae3ae', tier: [ThoriumBoss.FallenBeholder], tags: [], class: 'Ranged', rarity: 'Pink'},//
 {name: 'Pyroclast Staff', image: 'https://thoriummod.wiki.gg/images/Pyroclast_Staff.png?ea27f0', tier: [ThoriumBoss.FallenBeholder], tags: [], class: 'Magic', rarity: 'Pink'},//
 {name: 'Mantis Shrimp Punch', image: 'https://thoriummod.wiki.gg/images/Mantis_Shrimp_Punch.png?caf8e3', tier: [ThoriumBoss.ForgottenOne], tags: [], class: 'Melee', rarity: 'Yellow'},//
 {name: 'Old Gods Vision', image: 'https://thoriummod.wiki.gg/images/Old_God%27s_Vision.png?8bfbe4', tier: [ThoriumBoss.ForgottenOne], tags: [], class: 'Magic', rarity: 'Yellow'},//
 {name: 'Sirens Lyre', image: 'https://thoriummod.wiki.gg/images/Siren%27s_Lyre.png?39eb50', tier: [ThoriumBoss.ForgottenOne], tags: [], class: 'Symphonic', rarity: 'Yellow'},//
 {name: 'The Incubator', image: 'https://thoriummod.wiki.gg/images/The_Incubator.png?5daf1e', tier: [ThoriumBoss.ForgottenOne], tags: [], class: 'Summon', rarity: 'Yellow'},//
 {name: 'Trench Spitter', image: 'https://thoriummod.wiki.gg/images/Trench_Spitter.png?dd5d27', tier: [ThoriumBoss.ForgottenOne], tags: [], class: 'Ranged', rarity: 'Yellow'},//
 {name: 'Boulder Probe Staff', image: 'https://thoriummod.wiki.gg/images/Boulder_Probe_Staff.png?932954', tier: [ThoriumBoss.GraniteStorm], tags: [], class: 'Summon', rarity: 'Orange'},//
 {name: 'Energy Projector', image: 'https://thoriummod.wiki.gg/images/Energy_Projector.png?de8832', tier: [ThoriumBoss.GraniteStorm], tags: [], class: 'Magic', rarity: 'Orange'},//
 {name: 'Energy Storm Bolter', image: 'https://thoriummod.wiki.gg/images/Energy_Storm_Bolter.png?66e6dc', tier: [ThoriumBoss.GraniteStorm], tags: [], class: 'Ranged', rarity: 'Orange'},//
 {name: 'Energy Storm Partisan', image: 'https://thoriummod.wiki.gg/images/Energy_Storm_Partisan.png?ec42af', tier: [ThoriumBoss.GraniteStorm], tags: [], class: 'Melee', rarity: 'Orange'},//
 {name: 'Cadavers Cornet', image: 'https://thoriummod.wiki.gg/images/Cadaver%27s_Cornet.png?c94afe', tier: [ThoriumBoss.Lich], tags: [], class: 'Symphonic', rarity: 'Light Purple'},//
 {name: 'Phantom Wand', image: 'https://thoriummod.wiki.gg/images/Phantom_Wand.png?dca027', tier: [ThoriumBoss.Lich], tags: [], class: 'Summon', rarity: 'Donator'},//
 {name: 'Soul Bomb', image: 'https://thoriummod.wiki.gg/images/Soul_Bomb.png?bea2bb', tier: [ThoriumBoss.Lich], tags: [], class: 'Throwing', rarity: 'Light Purple'},//
 {name: 'Soul Cleaver', image: 'https://thoriummod.wiki.gg/images/Soul_Cleaver.png?efe2c9', tier: [ThoriumBoss.Lich], tags: [], class: 'Throwing', rarity: 'Light Purple'},//
 {name: 'Soul Render', image: 'https://thoriummod.wiki.gg/images/Soul_Render.png?1f9830', tier: [ThoriumBoss.Lich], tags: [], class: 'Melee', rarity: 'Light Purple'},//
 {name: 'Wither Staff', image: 'https://thoriummod.wiki.gg/images/Wither_Staff.png?a0c3e1', tier: [ThoriumBoss.Lich], tags: [], class: 'Magic', rarity: 'Light Purple'},//
 {name: 'Devil Dagger', image: 'https://thoriummod.wiki.gg/images/Devil_Dagger.png?c97848', tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Pink'},//
 {name: 'Dutchmans Avarice', image: 'https://thoriummod.wiki.gg/images/Dutchman%27s_Avarice.png?d7a865', tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Pink'},//
 {name: 'Funggat', image: 'https://thoriummod.wiki.gg/images/Funggat.png?b33a1f', tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Pink'},//
 {name: 'Grave Buster', image: 'https://thoriummod.wiki.gg/images/Grave_Buster.png?a4932d', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
 {name: 'Hand Cannon', image: 'https://thoriummod.wiki.gg/images/Hand_Cannon.png?4f2745', tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Pink'},//
 {name: 'Hydromancers Catalyst', image: 'https://thoriummod.wiki.gg/images/Hydromancer%27s_Catalyst.png?529468', tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Pink'},//
 {name: 'Mycelium Whip', image: 'https://thoriummod.wiki.gg/images/Mycelium_Whip.png?7391ae', tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Pink'},//
 {name: 'Poseidons Charge', image: 'https://thoriummod.wiki.gg/images/Poseidon%27s_Charge.png?3aff3d', tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Pink'},//
 {name: 'Schmelze', image: 'https://thoriummod.wiki.gg/images/Schmelze.png?e58b33', tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Pink'},//
 {name: 'Scorn', image: 'https://thoriummod.wiki.gg/images/Scorn.png?9910cc', tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Pink'},//
 {name: 'Ships Helm', image: 'https://thoriummod.wiki.gg/images/Ship%27s_Helm.png?161e20', tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Pink'},//
 {name: 'S. S. Devastator', image: 'https://thoriummod.wiki.gg/images/S._S._Devastator.png?665ed7', tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Pink'},//
 {name: 'The Juggernaut', image: 'https://thoriummod.wiki.gg/images/The_Juggernaut.png?7e4511', tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Pink'},//
 {name: 'Weed Eater', image: 'https://thoriummod.wiki.gg/images/Weed_Eater.png?3f1c53', tier: [Boss.EvilBoss], tags: [], class: 'Summon', rarity: 'Orange'},//
 {name: 'Buccaneers Blunderbuss', image: 'https://thoriummod.wiki.gg/images/Buccaneer%27s_Blunderbuss.png?3dbda8', tier: [ThoriumBoss.QueenJelly], tags: [], class: 'Ranged', rarity: 'Green'},//
 {name: 'Conch Shell', image: 'https://thoriummod.wiki.gg/images/Conch_Shell.png?659499', tier: [ThoriumBoss.QueenJelly], tags: [], class: 'Symphonic', rarity: 'Green'},//
 {name: 'Giant Glowstick', image: 'https://thoriummod.wiki.gg/images/Giant_Glowstick.png?d0d4eb', tier: [ThoriumBoss.QueenJelly], tags: [], class: 'Melee', rarity: 'Green'},//
 {name: 'Jelly Pond Wand', image: 'https://thoriummod.wiki.gg/images/Jelly_Pond_Wand.png?98de89', tier: [ThoriumBoss.QueenJelly], tags: [], class: 'Magic', rarity: 'Green'},//
 {name: 'Sparking Jelly Ball', image: 'https://thoriummod.wiki.gg/images/Sparking_Jelly_Ball.png?565615', tier: [ThoriumBoss.QueenJelly], tags: [], class: 'Melee', rarity: 'Green'},//
 {name: 'Distress Caller', image: 'https://thoriummod.wiki.gg/images/Distress_Caller.png?e18e89', tier: [Boss.EvilBoss, ThoriumBoss.StarScouter], tags: [], class: 'Summon', rarity: 'Orange'},//
 {name: 'Gauss Flinger', image: 'https://thoriummod.wiki.gg/images/Gauss_Flinger.png?aefc8e', tier: [Boss.EvilBoss, ThoriumBoss.StarScouter], tags: [], class: 'Throwing', rarity: 'Orange'},//
 {name: 'Hit Scanner', image: 'https://thoriummod.wiki.gg/images/Hit_Scanner.png?70a47d', tier: [Boss.EvilBoss, ThoriumBoss.StarScouter], tags: [], class: 'Ranged', rarity: 'Orange'},//
 {name: 'Particle Whip', image: 'https://thoriummod.wiki.gg/images/Particle_Whip.png?6eaeb7', tier: [Boss.EvilBoss, ThoriumBoss.StarScouter], tags: [], class: 'Magic', rarity: 'Orange'},//
 {name: 'Roboboe', image: 'https://thoriummod.wiki.gg/images/Roboboe.png?d7e8c2', tier: [Boss.EvilBoss, ThoriumBoss.StarScouter], tags: [], class: 'Symphonic', rarity: 'Orange'},//
 {name: 'Star Trail', image: 'https://thoriummod.wiki.gg/images/Star_Trail.png?9aceac', tier: [Boss.EvilBoss, ThoriumBoss.StarScouter], tags: [], class: 'Melee', rarity: 'Orange'},//
 {name: 'Didgeridoo', image: 'https://thoriummod.wiki.gg/images/Didgeridoo.png?6af8fb', tier: [ThoriumBoss.ThunderBird], tags: [], class: 'Symphonic', rarity: 'Blue'},//
 {name: 'Storm-Hatchling Staff', image: 'https://thoriummod.wiki.gg/images/Storm-Hatchling_Staff.png?feb330', tier: [ThoriumBoss.ThunderBird], tags: [], class: 'Summon', rarity: 'Blue'},//
 {name: 'Talon Burst', image: 'https://thoriummod.wiki.gg/images/Talon_Burst.png?1af9d3', tier: [ThoriumBoss.ThunderBird], tags: [], class: 'Ranged', rarity: 'Blue'},//
 {name: 'Thunder Talon', image: 'https://thoriummod.wiki.gg/images/Thunder_Talon.png?ce2e45', tier: [ThoriumBoss.ThunderBird], tags: [], class: 'Melee', rarity: 'Blue'},//
 {name: 'Deitys Trefork', image: 'https://thoriummod.wiki.gg/images/Deity%27s_Trefork.png?8a20f0', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Throwing', rarity: 'Blood Orange'},//
 {name: 'Oceans Judgement', image: 'https://thoriummod.wiki.gg/images/Ocean%27s_Judgement.png?20e985', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Melee', rarity: 'Blood Orange'},//
 {name: 'Seven Seas Devastator', image: 'https://thoriummod.wiki.gg/images/Seven_Seas_Devastator.png?f53c52', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Melee', rarity: 'Blood Orange'},//
 {name: 'Tidal Wave', image: 'https://thoriummod.wiki.gg/images/Tidal_Wave.png?3c8529', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Throwing', rarity: 'Blood Orange'},//
 {name: 'Lucidity', image: 'https://thoriummod.wiki.gg/images/Lucidity.png?f65cca', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Radiant', rarity: 'Blood Orange'},//
 {name: 'Reality Slasher', image: 'https://thoriummod.wiki.gg/images/Reality_Slasher.png?39247c', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Radiant', rarity: 'Blood Orange'},//
 {name: 'Mjolnir', image: 'https://thoriummod.wiki.gg/images/Mj%C3%B6lnir.png?b52c82', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'True', rarity: 'Rainbow'},//
 {name: 'Omni-Bow', image: 'https://thoriummod.wiki.gg/images/Omni-Bow.png?24304f', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Ranged', rarity: 'Blood Orange'},//
 {name: 'Omni-Cannon', image: 'https://thoriummod.wiki.gg/images/Omni-Cannon.png?2fae78', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Ranged', rarity: 'Blood Orange'},//
 {name: 'The Javelin', image: 'https://thoriummod.wiki.gg/images/The_Javelin.png?e126d6', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Ranged', rarity: 'Blood Orange'},//
 {name: 'Wyrm Decimator', image: 'https://thoriummod.wiki.gg/images/Wyrm_Decimator.png?912efc', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Ranged', rarity: 'Blood Orange'},//
 {name: 'Edge of Imagination', image: 'https://thoriummod.wiki.gg/images/Edge_of_Imagination.png?95d9c6', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Symphonic', rarity: 'Blood Orange'},//
 {name: 'Holophonor', image: 'https://thoriummod.wiki.gg/images/Holophonor.png?4511c3', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Symphonic', rarity: 'Blood Orange'},//
 {name: 'Sousaphone', image: 'https://thoriummod.wiki.gg/images/Sousaphone.png?8f94c6', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Symphonic', rarity: 'Blood Orange'},//
 {name: 'The Set', image: 'https://thoriummod.wiki.gg/images/The_Set.png?9e7c6a', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Symphonic', rarity: 'Blood Orange'},//
 {name: 'Almanac of Agony', image: 'https://thoriummod.wiki.gg/images/Almanac_of_Agony.png?d527a2', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Magic', rarity: 'Blood Orange'},//
 {name: 'Devils Claw', image: 'https://thoriummod.wiki.gg/images/Devil%27s_Claw.png?e6144e', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Magic', rarity: 'Blood Orange'},//
 {name: 'Ember Staff', image: 'https://thoriummod.wiki.gg/images/Ember_Staff.png?3bc3c3', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Summon', rarity: 'Blood Orange'},//
 {name: 'Promethean Staff', image: 'https://thoriummod.wiki.gg/images/Promethean_Staff.png?4b8138', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Summon', rarity: 'Blood Orange'},//
 {name: 'Bat Scythe', image: 'https://thoriummod.wiki.gg/images/Bat_Scythe.png?bbacda', tier: [ThoriumBoss.Viscount], tags: [], class: 'Radiant', rarity: 'Green'},//
 {name: 'Bat Wing', image: 'https://thoriummod.wiki.gg/images/Bat_Wing.png?2d1609', tier: [ThoriumBoss.Viscount], tags: [], class: 'Melee', rarity: 'Green'},//
 {name: 'Dracula Fang', image: 'https://thoriummod.wiki.gg/images/Dracula_Fang.png?43b4da', tier: [ThoriumBoss.Viscount], tags: [], class: 'Throwing', rarity: 'Green'},//
 {name: 'Guano Gunner', image: 'https://thoriummod.wiki.gg/images/Guano_Gunner.png?f90c27', tier: [ThoriumBoss.Viscount], tags: [], class: 'Ranged', rarity: 'Green'},//
 {name: 'Sonar Cannon', image: 'https://thoriummod.wiki.gg/images/Sonar_Cannon.png?6cf244', tier: [ThoriumBoss.Viscount], tags: [], class: 'Symphonic', rarity: 'Green'},//
 {name: 'Vampire Scepter', image: 'https://thoriummod.wiki.gg/images/Vampire_Scepter.png?3954ba', tier: [ThoriumBoss.Viscount], tags: [], class: 'Magic', rarity: 'Green'},//
 {name: 'Viscounts Cane', image: 'https://thoriummod.wiki.gg/images/Viscount%27s_Cane.png?ccf94d', tier: [ThoriumBoss.Viscount], tags: [], class: 'Summon', rarity: 'Green'},//
 {name: 'Bronze Throwing Axe', image: 'https://thoriummod.wiki.gg/images/Bronze_Throwing_Axe.png?e0d33d', tier: [Boss.Skeletron], tags: [], class: 'Throwing', rarity: 'Orange'},//
 {name: 'Gorgon-Gaze Staff', image: 'https://thoriummod.wiki.gg/images/Gorgon-Gaze_Staff.png?91d7fe', tier: [Boss.Skeletron], tags: [], class: 'Magic', rarity: 'Orange'},//
 {name: 'Gorgons Eye', image: 'https://thoriummod.wiki.gg/images/Gorgon%27s_Eye.png?b0d88f', tier: [Boss.Skeletron], tags: [], class: 'Melee', rarity: 'Orange'},//
 {name: 'Coral Caltrop', image: 'https://thoriummod.wiki.gg/images/Coral_Caltrop.png?d76b8b', tier: [Boss.PreBoss], tags: [], class: 'Throwing', rarity: 'White'},//
 {name: 'Coral Crossbow', image: 'https://thoriummod.wiki.gg/images/Coral_Crossbow.png?7a2c4b', tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
 {name: 'Coral Polearm', image: 'https://thoriummod.wiki.gg/images/Coral_Polearm.png?982af0', tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
 {name: 'Coral Slasher', image: 'https://thoriummod.wiki.gg/images/Coral_Slasher.png?1669b5', tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
 {name: 'Seahorse Wand', image: 'https://thoriummod.wiki.gg/images/Seahorse_Wand.png?49fe8b', tier: [Boss.PreBoss], tags: [], class: 'Summon', rarity: 'White'},//
 {name: 'Ancient Flame', image: 'https://thoriummod.wiki.gg/images/Ancient_Flame.png?3a8110', tier: [Boss.Cultist], tags: [], class: 'Magic', rarity: 'Cyan'},//
 {name: 'Ancient Frost', image: 'https://thoriummod.wiki.gg/images/Ancient_Frost.png?f62c83', tier: [Boss.Cultist], tags: [], class: 'Magic', rarity: 'Cyan'},//
 {name: 'Ancient Light', image: 'https://thoriummod.wiki.gg/images/Ancient_Light.png?89eb2c', tier: [Boss.Cultist], tags: [], class: 'Magic', rarity: 'Rainbow'},//
 {name: 'Ancient Spark', image: 'https://thoriummod.wiki.gg/images/Ancient_Spark.png?c0d544', tier: [Boss.Cultist], tags: [], class: 'Magic', rarity: 'Cyan'},//
 {name: 'Darksteel Broadsword', image: 'https://thoriummod.wiki.gg/images/Darksteel_Broadsword.png?7b1169', tier: [Boss.Skeletron], tags: [], class: 'Melee', rarity: 'Green'},//
 {name: 'Darksteel Crossbow', image: 'https://thoriummod.wiki.gg/images/Darksteel_Crossbow.png?91cf2a', tier: [Boss.Skeletron], tags: [], class: 'Ranged', rarity: 'Green'},//
 {name: 'Arcane Anelace', image: 'https://thoriummod.wiki.gg/images/Arcane_Anelace.png?8c68b8', tier: [Boss.EvilBoss], tags: [], class: 'Throwing', rarity: 'Green'},//
 {name: 'Dark Tome', image: 'https://thoriummod.wiki.gg/images/Dark_Tome.png?31590b', tier: [Boss.EvilBoss], tags: [], class: 'Magic', rarity: 'Green'},//
 {name: 'Ogre Snot-Gun', image: 'https://thoriummod.wiki.gg/images/Ogre_Snot-Gun.png?4ff992', tier: [Boss.MechBoss1], tags: [], class: 'Ranged', rarity: 'Pink'},//
 {name: 'Taboo Wand', image: 'https://thoriummod.wiki.gg/images/Taboo_Wand.png?ad82b0', tier: [Boss.EvilBoss], tags: [], class: 'Summon', rarity: 'Green'},//
 {name: 'Demon Blood Bow', image: 'https://thoriummod.wiki.gg/images/Demon_Blood_Bow.png?5e9dbd', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
 {name: 'Demon Blood Crossbow', image: 'https://thoriummod.wiki.gg/images/Demon_Blood_Crossbow.png?2b5918', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
 {name: 'Demon Blood Ripper', image: 'https://thoriummod.wiki.gg/images/Demon_Blood_Ripper.png?6a9f0f', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Radiant', rarity: 'Yellow'},//
 {name: 'Demon Blood Spear', image: 'https://thoriummod.wiki.gg/images/Demon_Blood_Spear.png?9aaa26', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Melee', rarity: 'Yellow'},//
 {name: 'Demon Blood Staff', image: 'https://thoriummod.wiki.gg/images/Demon_Blood_Staff.png?cecfce', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Magic', rarity: 'Yellow'},//
 {name: 'Demon Blood Sword', image: 'https://thoriummod.wiki.gg/images/Demon_Blood_Sword.png?96b760', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Melee', rarity: 'Yellow'},//
 {name: 'Aquaite Knife', image: 'https://thoriummod.wiki.gg/images/Aquaite_Knife.png?e6e5a5', tier: [Boss.EvilBoss], tags: [], class: 'Throwing', rarity: 'Green'},//
 {name: 'Aqua Pelter', image: 'https://thoriummod.wiki.gg/images/Aqua_Pelter.png?983447', tier: [Boss.EvilBoss], tags: [], class: 'Ranged', rarity: 'Green'},//
 {name: 'Blob-horn Coral Staff', image: 'https://thoriummod.wiki.gg/images/Blob-horn_Coral_Staff.png?2c837a', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Summon', rarity: 'Light Red'},//
 {name: 'Bubble Conch', image: 'https://thoriummod.wiki.gg/images/Bubble_Conch.png?30c9eb', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Green'},//
 {name: 'Drenched Dirk', image: 'https://thoriummod.wiki.gg/images/Drenched_Dirk.png?bd3eb4', tier: [Boss.EvilBoss], tags: [], class: 'Melee', rarity: 'Green'},//
 {name: 'Geyser Staff', image: 'https://thoriummod.wiki.gg/images/Geyser_Staff.png?a84e55', tier: [Boss.EvilBoss], tags: [], class: 'Magic', rarity: 'Green'},//
 {name: 'Illustrious', image: 'https://thoriummod.wiki.gg/images/Illustrious.png?3588f9', tier: [Boss.EvilBoss], tags: [], class: 'Melee', rarity: 'Green'},//
 {name: 'Nagas Recurve', image: 'https://thoriummod.wiki.gg/images/Naga%27s_Recurve.png?3fad6b', tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Red'},//
 {name: 'Nano Clam Cane', image: 'https://thoriummod.wiki.gg/images/Nano_Clam_Cane.png?2b869e', tier: [Boss.PreBoss], tags: [], class: 'Summon', rarity: 'Green'},//
 {name: 'Pearl Pike', image: 'https://thoriummod.wiki.gg/images/Pearl_Pike.png?700a80', tier: [Boss.EvilBoss], tags: [], class: 'Melee', rarity: 'Green'},//
 {name: 'Sea Foam Scepter', image: 'https://thoriummod.wiki.gg/images/Sea_Foam_Scepter.png?ddbdf1', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Magic', rarity: 'Light Red'},//
 {name: 'Sea Ninja-Star', image: 'https://thoriummod.wiki.gg/images/Sea_Ninja-Star.png?df2d4a', tier: [Boss.PreBoss], tags: [], class: 'Throwing', rarity: 'Green'},//
 {name: 'Shark Storm', image: 'https://thoriummod.wiki.gg/images/Shark_Storm.png?615ca8', tier: [Boss.EvilBoss], tags: [], class: 'Ranged', rarity: 'Green'},//
 {name: 'Aeon Staff', image: 'https://thoriummod.wiki.gg/images/Aeon_Staff.png?61fd78', tier: [ThoriumBoss.BuriedChampion, Boss.MechBoss1], tags: [], class: 'Summon', rarity: 'Donator'},//
 {name: 'Arsenal Staff', image: 'https://thoriummod.wiki.gg/images/Arsenal_Staff.png?76c45a', tier: [Boss.Skeletron], tags: [], class: 'Summon', rarity: 'Donator'},//
 {name: 'Arthropod', image: 'https://thoriummod.wiki.gg/images/Arthropod.png?a7e04b', tier: [ThoriumBoss.BoreanStrider], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Balance Bloom', image: 'https://thoriummod.wiki.gg/images/Balance_Bloom.png?33e0fc', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Radiant', rarity: 'Donator'},//
 {name: 'Baritone Saxophone', image: 'https://thoriummod.wiki.gg/images/Baritone_Saxophone.png?9bd9ae', tier: [Boss.MechBoss1], tags: [], class: 'Symphonic', rarity: 'Donator'},//
 {name: 'Bass Booster', image: 'https://thoriummod.wiki.gg/images/Bass_Booster.png?3743f1', tier: [Boss.MechBossRest], tags: [], class: 'Magic', rarity: 'Donator'},//
 {name: 'Beetle Blaster', image: 'https://thoriummod.wiki.gg/images/Beetle_Blaster.png?d5b210', tier: [Boss.Skeletron, Boss.Golem], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Bellerose', image: 'https://thoriummod.wiki.gg/images/Bellerose.png?9089e7', tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Black MIDI', image: 'https://thoriummod.wiki.gg/images/Black_MIDI.png?a00c93', tier: [Boss.PreBoss, ThoriumBoss.ThePrimordials], tags: [], class: 'Symphonic', rarity: 'Donator'},//
 {name: 'Blitz-zard', image: 'https://thoriummod.wiki.gg/images/Blitz-zard.png?fc919b', tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Blood Drinker', image: 'https://thoriummod.wiki.gg/images/Blood_Drinker.png?9cc032', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Melee', rarity: 'Donator'},//
 {name: 'Blood & Glory', image: 'https://thoriummod.wiki.gg/images/Blood_%26_Glory.png?dd4801', tier: [Boss.MoonLord], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Bloody High Claw', image: 'https://thoriummod.wiki.gg/images/Bloody_High_Claw.png?877be1', tier: [Boss.WallOfFlesh, Boss.Prime], tags: [CalamityTag.TitaniumAdamantite], class: 'Melee', rarity: 'Donator'},//
 {name: 'Bloody Pagan Staff', image: 'https://thoriummod.wiki.gg/images/Bloody_Pagan_Staff.png?1cc220', tier: [Boss.Golem, ThoriumBoss.Lich], tags: [], class: 'Summon', rarity: 'Donator'},//
 {name: 'Bloody Wand', image: 'https://thoriummod.wiki.gg/images/Bloody_Wand.png?ffb964', tier: [Boss.Skeletron], tags: [], class: 'Magic', rarity: 'Donator'},//
 {name: 'Bow of Light', image: 'https://thoriummod.wiki.gg/images/Bow_of_Light.png?1cd173', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Brinefang', image: 'https://thoriummod.wiki.gg/images/Brinefang.png?cabfa5', tier: [Boss.Duke], tags: [], class: 'Throwing', rarity: 'Donator'},//
 {name: 'Buffalo Launcher', image: 'https://thoriummod.wiki.gg/images/Buffalo_Launcher.png?961ad6', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Call of Cthulhu', image: 'https://thoriummod.wiki.gg/images/Call_of_Cthulhu.png?4349c5', tier: [Boss.Cultist, ThoriumBoss.ForgottenOne], tags: [], class: 'Symphonic', rarity: 'Donator'},//
 {name: 'Cats Eye Great Staff', image: 'https://thoriummod.wiki.gg/images/Cat%27s_Eye_Great_Staff.png?69da19', tier: [Boss.Cultist], tags: [], class: 'Magic', rarity: 'Donator'},//
 {name: 'Charged Splasher', image: 'https://thoriummod.wiki.gg/images/Charged_Splasher.png?471e7f', tier: [Boss.MechBoss1], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Charons Beacon', image: 'https://thoriummod.wiki.gg/images/Charon%27s_Beacon.png?80e6b8', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Magic', rarity: 'Donator'},//
 {name: 'Clerics Cross', image: 'https://thoriummod.wiki.gg/images/Cleric%27s_Cross.png?27fb13', tier: [Boss.PreBoss], tags: [], class: 'Radiant', rarity: 'Donator'},//
 {name: 'Climbers Ice Axe', image: 'https://thoriummod.wiki.gg/images/Climber%27s_Ice_Axe.png?9f6e15', tier: [Boss.MechBossRest], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Corrodling Staff', image: 'https://thoriummod.wiki.gg/images/Corrodling_Staff.png?e56d83', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Summon', rarity: 'Donator'},//
 {name: 'Cosmic Dagger', image: 'https://thoriummod.wiki.gg/images/Cosmic_Dagger.png?622c0f', tier: [Boss.Golem], tags: [], class: 'Throwing', rarity: 'Donator'},//
 {name: 'Cosmic Flux Staff', image: 'https://thoriummod.wiki.gg/images/Cosmic_Flux_Staff.png?533cb9', tier: [Boss.Cultist], tags: [], class: 'Radiant', rarity: 'Donator'},//
 {name: 'Cupids String', image: 'https://thoriummod.wiki.gg/images/Cupid%27s_String.png?bdcd16', tier: [Boss.Skeletron, Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Dark Flame', image: 'https://thoriummod.wiki.gg/images/Dark_Flame.png?fc8e97', tier: [Boss.MechBossRest], tags: [], class: 'Magic', rarity: 'Donator'},//
 {name: 'Dark Grip', image: 'https://thoriummod.wiki.gg/images/Dark_Grip.png?548dc5', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Magic', rarity: 'Donator'},//
 {name: 'Decaying Sorrow', image: 'https://thoriummod.wiki.gg/images/Decaying_Sorrow.png?5c148b', tier: [ThoriumBoss.Lich], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'DMR', image: 'https://thoriummod.wiki.gg/images/DMR.png?9f1afa', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Draconic Magma Staff', image: 'https://thoriummod.wiki.gg/images/Draconic_Magma_Staff.png?c56eea', tier: [Boss.Skeletron, Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Summon', rarity: 'Donator'},//
 {name: 'Eclipse Fang', image: 'https://thoriummod.wiki.gg/images/Eclipse_Fang.png?4083b6', tier: [Boss.Cultist], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Emperors Will', image: 'https://thoriummod.wiki.gg/images/Emperor%27s_Will.png?42ce4e', tier: [Boss.Cultist], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Erupting Flare', image: 'https://thoriummod.wiki.gg/images/Erupting_Flare.png?7ee450', tier: [Boss.Golem], tags: [], class: 'Magic', rarity: 'Donator'},//
 {name: 'Essence of Flame', image: 'https://thoriummod.wiki.gg/images/Essence_of_Flame.png?ea066d', tier: [Boss.Cultist], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Eye of Odin', image: 'https://thoriummod.wiki.gg/images/Eye_of_Odin.png?f9f41a', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Summon', rarity: 'Donator'},//
 {name: 'Fire Axe', image: 'https://thoriummod.wiki.gg/images/Fire_Axe.png?817807', tier: [Boss.Plantera], tags: [], class: 'Throwing', rarity: 'Donator'},//
 {name: 'Friendly-Fire Staff', image: 'https://thoriummod.wiki.gg/images/Friendly-Fire_Staff.png?2ce162', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Radiant', rarity: 'Donator'},//
 {name: 'Gel Glove', image: 'https://thoriummod.wiki.gg/images/Gel_Glove.png?5f4e7b', tier: [Boss.KingSlime], tags: [], class: 'Throwing', rarity: 'Donator'},//
 {name: 'Geomancers Brush', image: 'https://thoriummod.wiki.gg/images/Geomancer%27s_Brush.png?85146d', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Magic', rarity: 'Donator'},//
 {name: 'Golden Locks', image: 'https://thoriummod.wiki.gg/images/Golden_Locks.png?be8ee6', tier: [Boss.MechBossRest], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Golems Gaze', image: 'https://thoriummod.wiki.gg/images/Golem%27s_Gaze.png?ada2df', tier: [Boss.Golem], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Greedful Gurdy', image: 'https://thoriummod.wiki.gg/images/Greedful_Gurdy.png?b5a4c6', tier: [Boss.WallOfFlesh], tags: [], class: 'Symphonic', rarity: 'Donator'},//
 {name: 'Grim Flayer', image: 'https://thoriummod.wiki.gg/images/Grim_Flayer.png?b9c1c6', tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Guilty Pleasure', image: 'https://thoriummod.wiki.gg/images/Guilty_Pleasure.png?223afb', tier: [Boss.Twinks], tags: [], class: 'Symphonic', rarity: 'Donator'},//
 {name: 'Hadron Collider', image: 'https://thoriummod.wiki.gg/images/Hadron_Collider.png?ba666f', tier: [Boss.MechBossRest], tags: [], class: 'Throwing', rarity: 'Donator'},//
 {name: 'Heartstriker', image: 'https://thoriummod.wiki.gg/images/Heartstriker.png?8e34b3', tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Heavens Gate', image: 'https://thoriummod.wiki.gg/images/Heaven%27s_Gate.png?2c01d6', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Magic', rarity: 'Donator'},//
 {name: 'Hellfire Minigun', image: 'https://thoriummod.wiki.gg/images/Hellfire_Minigun.png?5b4e31', tier: [Boss.EvilBoss], tags: [CalamityTag.PreBossHellstone], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Hippocrati-crossbow', image: 'https://thoriummod.wiki.gg/images/Hippocrati-crossbow.png?b734e6', tier: [Boss.MechBoss1], tags: [], class: 'Radiant', rarity: 'Donator'},//
 {name: 'Holy Hammer', image: 'https://thoriummod.wiki.gg/images/Holy_Hammer.png?929823', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Radiant', rarity: 'Donator'},//
 {name: 'Hydro Pump', image: 'https://thoriummod.wiki.gg/images/Hydro_Pump.png?c986e2', tier: [ThoriumBoss.QueenJelly, ThoriumBoss.ForgottenOne], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Idols Microphone', image: 'https://thoriummod.wiki.gg/images/Idol%27s_Microphone.png?198400', tier: [Boss.Plantera], tags: [], class: 'Symphonic', rarity: 'Donator'},//
 {name: 'Infernal Animator', image: 'https://thoriummod.wiki.gg/images/Infernal_Animator.png?604ac7', tier: [Boss.EvilBoss], tags: [CalamityTag.PreBossHellstone], class: 'Summon', rarity: 'Donator'},//
 {name: 'Kineto-scythe', image: 'https://thoriummod.wiki.gg/images/Kineto-scythe.png?ada95a', tier: [Boss.Golem], tags: [], class: 'Radiant', rarity: 'Donator'},//
 {name: 'Ladys Light', image: 'https://thoriummod.wiki.gg/images/Lady%27s_Light.png?c3d7ef', tier: [Boss.WallOfFlesh], tags: [], class: 'Summon', rarity: 'Donator'},//
 {name: 'Launch Jumper', image: 'https://thoriummod.wiki.gg/images/Launch_Jumper.png?df820c', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Legacy', image: 'https://thoriummod.wiki.gg/images/Legacy.png?6d4333', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Magic', rarity: 'Donator'},//
 {name: 'Life Quartz Claymore', image: 'https://thoriummod.wiki.gg/images/Life_Quartz_Claymore.png?1ab460', tier: [Boss.PreBoss], tags: [], class: 'Radiant', rarity: 'Donator'},//
 {name: 'Lightning Staff', image: 'https://thoriummod.wiki.gg/images/Lightning_Staff.png?e36d43', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Magic', rarity: 'Donator'},//
 {name: 'Lingering Will', image: 'https://thoriummod.wiki.gg/images/Lingering_Will.png?4577dc', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Little Red', image: 'https://thoriummod.wiki.gg/images/Little_Red.png?b055df', tier: [Boss.MechBossRest], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Man Hacker', image: 'https://thoriummod.wiki.gg/images/Man_Hacker.png?cbd0b4', tier: [Boss.Skeletron], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Mantis Cane', image: 'https://thoriummod.wiki.gg/images/Mantis_Cane.png?3206d5', tier: [Boss.QueenBee], tags: [], class: 'Summon', rarity: 'Donator'},//
 {name: 'Masters Libram', image: 'https://thoriummod.wiki.gg/images/Master%27s_Libram.png?669b0e', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Summon', rarity: 'Donator'},//
 {name: 'Midas Gavel', image: 'https://thoriummod.wiki.gg/images/Midas%27_Gavel.png?8870f6', tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Mineral Launcher', image: 'https://thoriummod.wiki.gg/images/Mineral_Launcher.png?786e39', tier: [Boss.MechBoss1], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Moonlight', image: 'https://thoriummod.wiki.gg/images/Moonlight.png?5cafdd', tier: [Boss.Skeletron], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Nebulas Reflection', image: 'https://thoriummod.wiki.gg/images/Nebula%27s_Reflection.png?6fd91f', tier: [Boss.Cultist], tags: [], class: 'Summon', rarity: 'Donator'},//
 {name: 'Night Staff', image: 'https://thoriummod.wiki.gg/images/Night_Staff.png?e9af4a', tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Donator'},//
 {name: 'Northern Light', image: 'https://thoriummod.wiki.gg/images/Northern_Light.png?44fd9c', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Magic', rarity: 'Donator'},//
 {name: 'Nova Rifle', image: 'https://thoriummod.wiki.gg/images/Nova_Rifle.png?c58ebd', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Obsidian Staff', image: 'https://thoriummod.wiki.gg/images/Obsidian_Staff.png?a7fa3c', tier: [Boss.EvilBoss], tags: [CalamityTag.PreBossHellstone], class: 'Magic', rarity: 'Donator'},//
 {name: 'Omega Blaster', image: 'https://thoriummod.wiki.gg/images/Omega_Blaster.png?4d9c7d', tier: [Boss.WallOfFlesh], tags: [CalamityTag.TitaniumAdamantite], class: 'Magic', rarity: 'Donator'},//
 {name: 'Omniwrench', image: 'https://thoriummod.wiki.gg/images/Omniwrench.png?be78bf', tier: [Boss.Skeletron, Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Throwing', rarity: 'Donator'},//
 {name: 'One-man Quartet', image: 'https://thoriummod.wiki.gg/images/One-man_Quartet.png?829178', tier: [Boss.Plantera], tags: [], class: 'Symphonic', rarity: 'Donator'},//
 {name: 'Phantom Arm Cannon', image: 'https://thoriummod.wiki.gg/images/Phantom_Arm_Cannon.png?9119f6', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Phantom Camera', image: 'https://thoriummod.wiki.gg/images/Phantom_Camera.png?5f1645', tier: [Boss.Skeletron], tags: [], class: 'Magic', rarity: 'Donator'},//
 {name: 'Pill Popper', image: 'https://thoriummod.wiki.gg/images/Pill_Popper.png?7b67f8', tier: [Boss.Plantera], tags: [], class: 'Radiant', rarity: 'Donator'},//
 {name: 'Plasma Staff', image: 'https://thoriummod.wiki.gg/images/Plasma_Staff.png?c53b20', tier: [Boss.MechBoss1], tags: [CalamityTag.Hollow], class: 'Magic', rarity: 'Donator'},//
 {name: 'P.L.G. 8999', image: 'https://thoriummod.wiki.gg/images/P.L.G._8999.png?51e53e', tier: [Boss.Plantera], tags: [], class: 'Magic', rarity: 'Donator'},//
 {name: 'Pollen Pike', image: 'https://thoriummod.wiki.gg/images/Pollen_Pike.png?d27fda', tier: [Boss.QueenBee], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Portable Wintergatan', image: 'https://thoriummod.wiki.gg/images/Portable_Wintergatan.png?b11e3f', tier: [Boss.MechBoss1], tags: [CalamityTag.Hollow], class: 'Symphonic', rarity: 'Donator'},//
 {name: 'Prehistoric Amber Staff', image: 'https://thoriummod.wiki.gg/images/Prehistoric_Amber_Staff.png?899b97', tier: [Boss.PreBoss], tags: [], class: 'Summon', rarity: 'Donator'},//
 {name: 'Quake Gauntlet', image: 'https://thoriummod.wiki.gg/images/Quake_Gauntlet.png?2d65d1', tier: [Boss.MoonLord], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Quasars Flare', image: 'https://thoriummod.wiki.gg/images/Quasar%27s_Flare.png?6db866', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Razorlash', image: 'https://thoriummod.wiki.gg/images/Razorlash.png?67947f', tier: [Boss.MechBossRest], tags: [], class: 'Magic', rarity: 'Donator'},//
 {name: 'Resonators Arm', image: 'https://thoriummod.wiki.gg/images/Resonator%27s_Arm.png?375ff4', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Symphonic', rarity: 'Donator'},//
 {name: 'Rifle Spear', image: 'https://thoriummod.wiki.gg/images/Rifle_Spear.png?360a27', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Melee', rarity: 'Donator'},//
 {name: 'Rude Wand', image: 'https://thoriummod.wiki.gg/images/Rude_Wand.png?24fcaf', tier: [Boss.MechBoss1], tags: [CalamityTag.Hollow], class: 'Summon', rarity: 'Donator'},//
 {name: 'Saba', image: 'https://thoriummod.wiki.gg/images/Saba.png?b24415', tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Scythe of Undoing', image: 'https://thoriummod.wiki.gg/images/Scythe_of_Undoing.png?7d2bea', tier: [Boss.PreBoss, ThoriumBoss.Lich], tags: [], class: 'Radiant', rarity: 'Donator'},//
 {name: 'Shadow-Flare Bow', image: 'https://thoriummod.wiki.gg/images/Shadow-Flare_Bow.png?85bcf4', tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Shadow Orb Staff', image: 'https://thoriummod.wiki.gg/images/Shadow_Orb_Staff.png?fbd620', tier: [Boss.Skeletron, Boss.Cultist], tags: [], class: 'Summon', rarity: 'Donator'},//
 {name: 'Shockbuster', image: 'https://thoriummod.wiki.gg/images/Shockbuster.png?6e9530', tier: [Boss.MechBoss1], tags: [CalamityTag.Hollow], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Shus Wrath', image: 'https://thoriummod.wiki.gg/images/Shu%27s_Wrath.png?409e0f', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Sinister Honk', image: 'https://thoriummod.wiki.gg/images/Sinister_Honk.png?6d62c8', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Symphonic', rarity: 'Donator'},//
 {name: 'Skadoosh', image: 'https://thoriummod.wiki.gg/images/Skadoosh.png?e83198', tier: [Boss.Cultist], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Smiting Hammer', image: 'https://thoriummod.wiki.gg/images/Smiting_Hammer.png?a905e8', tier: [Boss.MechBoss1], tags: [CalamityTag.Hollow], class: 'Radiant', rarity: 'Donator'},//
 {name: 'Snarky Gun', image: 'https://thoriummod.wiki.gg/images/Snarky_Gun.png?b7d4e9', tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Snow White', image: 'https://thoriummod.wiki.gg/images/Snow_White.png?db6004', tier: [Boss.MechBossRest], tags: [], class: 'Magic', rarity: 'Donator'},//
 {name: 'Soul Reaver', image: 'https://thoriummod.wiki.gg/images/Soul_Reaver.png?bd4129', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Spearmint', image: 'https://thoriummod.wiki.gg/images/Spearmint.png?ac7007', tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Spirit Breaker', image: 'https://thoriummod.wiki.gg/images/Spirit_Breaker.png?2cb780', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Static Prod', image: 'https://thoriummod.wiki.gg/images/Static_Prod.png?b88d30', tier: [Boss.MechBoss1], tags: [CalamityTag.Hollow], class: 'Magic', rarity: 'Donator'},//
 {name: 'Steamgunner Controller', image: 'https://thoriummod.wiki.gg/images/Steamgunner_Controller.png?fecf52', tier: [Boss.MechBoss1], tags: [], class: 'Summon', rarity: 'Donator'},//
 {name: 'Stellar Rod', image: 'https://thoriummod.wiki.gg/images/Stellar_Rod.png?d57420', tier: [Boss.WallOfFlesh], tags: [], class: 'Summon', rarity: 'Donator'},//
 {name: 'Stellar System', image: 'https://thoriummod.wiki.gg/images/Stellar_System.png?88969a', tier: [Boss.EvilBoss, Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Summon', rarity: 'Donator'},//
 {name: 'Strange Skull', image: 'https://thoriummod.wiki.gg/images/Strange_Skull.png?fc231f', tier: [Boss.Skeletron], tags: [], class: 'Summon', rarity: 'Donator'},//
 {name: 'Strawberry Heart', image: 'https://thoriummod.wiki.gg/images/Strawberry_Heart.png?f26859', tier: [Boss.Plantera], tags: [], class: 'Symphonic', rarity: 'Donator'},//
 {name: 'Super Plasma Cannon', image: 'https://thoriummod.wiki.gg/images/Super_Plasma_Cannon.png?52ccb4', tier: [Boss.Golem], tags: [], class: 'Magic', rarity: 'Donator'},//
 {name: 'Supersonic Bomber', image: 'https://thoriummod.wiki.gg/images/Supersonic_Bomber.png?59ac16', tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Teleologic Imposition', image: 'https://thoriummod.wiki.gg/images/Teleologic_Imposition.png?d6166b', tier: [Boss.Skeletron, Boss.Cultist], tags: [], class: 'Magic', rarity: 'Donator'},//
 {name: 'Terrarians Last Knife', image: 'https://thoriummod.wiki.gg/images/Terrarian%27s_Last_Knife.png?ed833c', tier: [ThoriumBoss.ThePrimordials], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Teslanator', image: 'https://thoriummod.wiki.gg/images/Teslanator.png?d28b2e', tier: [Boss.MechBoss1], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'The Bopper', image: 'https://thoriummod.wiki.gg/images/The_Bopper.png?f49d5e', tier: [Boss.Plantera], tags: [], class: 'Symphonic', rarity: 'Donator'},//
 {name: 'The Digester', image: 'https://thoriummod.wiki.gg/images/The_Digester.png?3fc941', tier: [Boss.PreBoss], tags: [], class: 'Radiant', rarity: 'Donator'},//
 {name: 'The Massacre', image: 'https://thoriummod.wiki.gg/images/The_Massacre.png?9d6515', tier: [Boss.EvilBoss, Boss.Skeletron, Boss.Cultist], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'The Whirlpool', image: 'https://thoriummod.wiki.gg/images/The_Whirlpool.png?561dde', tier: [ThoriumBoss.QueenJelly, ThoriumBoss.ForgottenOne], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Thunderstruck', image: 'https://thoriummod.wiki.gg/images/Thunderstruck.png?a0751c', tier: [ThoriumBoss.FallenBeholder], tags: [], class: 'Symphonic', rarity: 'Donator'},//
 {name: 'Turtle Drums', image: 'https://thoriummod.wiki.gg/images/Turtle_Drums.png?4cdcc8', tier: [Boss.MechBossRest], tags: [], class: 'Symphonic', rarity: 'Donator'},//
 {name: 'Umbra Blaster', image: 'https://thoriummod.wiki.gg/images/Umbra_Blaster.png?15630b', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Donator'},//
 {name: 'Useless Staff', image: 'https://thoriummod.wiki.gg/images/Useless_Staff.png?ad57c6', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Magic', rarity: 'Donator'},//
 {name: 'Valkyrie Blade', image: 'https://thoriummod.wiki.gg/images/Valkyrie_Blade.png?731226', tier: [Boss.MechBossRest], tags: [], class: 'Summon', rarity: 'Donator'},//
 {name: 'Vicious Mockery', image: 'https://thoriummod.wiki.gg/images/Vicious_Mockery.png?2fef73', tier: [Boss.PreBoss], tags: [], class: 'Symphonic', rarity: 'Donator'},//
 {name: 'Wondrous Wand', image: 'https://thoriummod.wiki.gg/images/Wondrous_Wand.png?111341', tier: [Boss.MechBossRest], tags: [], class: 'Magic', rarity: 'Donator'},//
 {name: 'Wyvern Slayer', image: 'https://thoriummod.wiki.gg/images/Wyvern_Slayer.png?14095a', tier: [Boss.Golem, ThoriumBoss.FallenBeholder], tags: [], class: 'Melee', rarity: 'Donator'},//
 {name: 'Yarn Ball', image: 'https://thoriummod.wiki.gg/images/Yarn_Ball.png?78704f', tier: [Boss.Skeletron], tags: [], class: 'Summon', rarity: 'Donator'},//
 {name: 'Zunpet', image: 'https://thoriummod.wiki.gg/images/Zunpet.png?651717', tier: [Boss.MechBoss1], tags: [CalamityTag.Hollow], class: 'Symphonic', rarity: 'Donator'},//
 {name: 'Dragons Breath', image: 'https://thoriummod.wiki.gg/images/Dragon%27s_Breath.png?d9c7a3', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Corruption, CalamityTag.MythrilOrichalcum], class: 'Magic', rarity: 'Light Red'},//
 {name: 'Dragons Gaze', image: 'https://thoriummod.wiki.gg/images/Dragon%27s_Gaze.png?748c8f', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Corruption, CalamityTag.MythrilOrichalcum], class: 'Ranged', rarity: 'Light Red'},//
 {name: 'Dragons Talon', image: 'https://thoriummod.wiki.gg/images/Dragon%27s_Talon.png?7a29a7', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Corruption, CalamityTag.MythrilOrichalcum], class: 'Melee', rarity: 'Light Red'},//
 {name: 'Dragons Tooth', image: 'https://thoriummod.wiki.gg/images/Dragon%27s_Tooth.png?d37bf9', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Corruption, CalamityTag.MythrilOrichalcum], class: 'Melee', rarity: 'Light Red'},//
 {name: 'Dread Blaster', image: 'https://thoriummod.wiki.gg/images/Dread_Blaster.png?a9a462', tier: [Boss.Skeletron, Boss.Plantera], tags: [VanillaTag.Corruption], class: 'Magic', rarity: 'Yellow'},//
 {name: 'Dread Fork', image: 'https://thoriummod.wiki.gg/images/Dread_Fork.png?1531d1', tier: [Boss.Skeletron, Boss.Plantera], tags: [VanillaTag.Corruption], class: 'Melee', rarity: 'Yellow'},//
 {name: 'Dread Launcher', image: 'https://thoriummod.wiki.gg/images/Dread_Launcher.png?4c2847', tier: [Boss.Skeletron, Boss.Plantera], tags: [VanillaTag.Corruption], class: 'Ranged', rarity: 'Yellow'},//
 {name: 'Dread Razor', image: 'https://thoriummod.wiki.gg/images/Dread_Razor.png?b94c29', tier: [Boss.Skeletron, Boss.Plantera], tags: [VanillaTag.Corruption], class: 'Melee', rarity: 'Yellow'},//
 {name: 'Dread Tearer', image: 'https://thoriummod.wiki.gg/images/Dread_Tearer.png?117e99', tier: [Boss.Skeletron, Boss.Plantera], tags: [VanillaTag.Corruption], class: 'Radiant', rarity: 'Yellow'},//
 {name: 'Charm', image: 'https://thoriummod.wiki.gg/images/Charm.png?7f8e57', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
 {name: 'Confuse', image: 'https://thoriummod.wiki.gg/images/Confuse.png?c6aecf', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
 {name: 'Dissolve', image: 'https://thoriummod.wiki.gg/images/Dissolve.png?fe8c89', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
 {name: 'Freeze', image: 'https://thoriummod.wiki.gg/images/Freeze.png?6a04ff', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
 {name: 'Ignite', image: 'https://thoriummod.wiki.gg/images/Ignite.png?63cbf8', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
 {name: 'Magick Staff', image: 'https://thoriummod.wiki.gg/images/Magick_Staff.png?e01ad1', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
 {name: 'Pierce', image: 'https://thoriummod.wiki.gg/images/Pierce.png?8891b1', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
 {name: 'Poison', image: 'https://thoriummod.wiki.gg/images/Poison.png?793cba', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
 {name: 'Siphon', image: 'https://thoriummod.wiki.gg/images/Siphon.png?c57b5b', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
 {name: 'Stun', image: 'https://thoriummod.wiki.gg/images/Stun.png?b0c029', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
 {name: 'Blood Belcher', image: 'https://thoriummod.wiki.gg/images/Blood_Belcher.png?858acc', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Crimson, CalamityTag.MythrilOrichalcum], class: 'Ranged', rarity: 'Light Red'},//
 {name: 'Blood Clot Staff', image: 'https://thoriummod.wiki.gg/images/Blood_Clot_Staff.png?76a86e', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Crimson, CalamityTag.MythrilOrichalcum], class: 'Magic', rarity: 'Light Red'},//
 {name: 'Flesh Bow', image: 'https://thoriummod.wiki.gg/images/Flesh_Bow.png?ac4a09', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Crimson, CalamityTag.MythrilOrichalcum], class: 'Ranged', rarity: 'Light Red'},//
 {name: 'Flesh Mace', image: 'https://thoriummod.wiki.gg/images/Flesh_Mace.png?5158ab', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Crimson, CalamityTag.MythrilOrichalcum], class: 'Melee', rarity: 'Light Red'},//
 {name: 'Flesh Skewer', image: 'https://thoriummod.wiki.gg/images/Flesh_Skewer.png?fe02c2', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Crimson, CalamityTag.MythrilOrichalcum], class: 'Melee', rarity: 'Light Red'},//
 {name: 'Tooth of The Consumer', image: 'https://thoriummod.wiki.gg/images/Tooth_of_the_Consumer.png?6bceed', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Crimson, CalamityTag.MythrilOrichalcum], class: 'Melee', rarity: 'Light Red'},//
 {name: 'Granite Crossbow', image: 'https://thoriummod.wiki.gg/images/Granite_Crossbow.png?1fbde3', tier: [Boss.Skeletron], tags: [], class: 'Ranged', rarity: 'Orange'},//
 {name: 'Granite Reflector', image: 'https://thoriummod.wiki.gg/images/Granite_Reflector.png?b384d5', tier: [Boss.Skeletron], tags: [], class: 'Melee', rarity: 'Orange'},//
 {name: 'Granite Throwing Axe', image: 'https://thoriummod.wiki.gg/images/Granite_Throwing_Axe.png?e0dffd', tier: [Boss.Skeletron], tags: [], class: 'Throwing', rarity: 'Orange'},//
 {name: 'Aquaite Scythe', image: 'https://thoriummod.wiki.gg/images/Aquaite_Scythe.png?85b557', tier: [Boss.EvilBoss], tags: [], class: 'Radiant', rarity: 'Green'},//
 {name: 'Blood Harvest', image: 'https://thoriummod.wiki.gg/images/Blood_Harvest.png?eb2320', tier: [Boss.EvilBoss, Boss.Skeletron], tags: [VanillaTag.Crimson], class: 'Radiant', rarity: 'Orange'},//
 {name: 'Blood Transfusion', image: 'https://thoriummod.wiki.gg/images/Blood_Transfusion.png?788f0c', tier: [Boss.WallOfFlesh], tags: [], class: 'Radiant', rarity: 'Light Red'},//
 {name: 'Bone Baton', image: 'https://thoriummod.wiki.gg/images/Bone_Baton.png?6a15a3', tier: [Boss.Skeletron, Boss.WallOfFlesh], tags: [], class: 'Radiant', rarity: 'Light Red'},//
 {name: 'Bone Reaper', image: 'https://thoriummod.wiki.gg/images/Bone_Reaper.png?72ecb2', tier: [Boss.Skeletron], tags: [], class: 'Radiant', rarity: 'Green'},//
 {name: 'Bonesaw', image: 'https://thoriummod.wiki.gg/images/Bonesaw.png?e647b7', tier: [Boss.PreBoss], tags: [], class: 'Radiant', rarity: 'Blue'},//
 {name: 'Bountiful Harvest', image: 'https://thoriummod.wiki.gg/images/Bountiful_Harvest.png?327982', tier: [Boss.PreBoss], tags: [], class: 'Radiant', rarity: 'Orange'},//
 {name: 'Christmas Cheer', image: 'https://thoriummod.wiki.gg/images/Christmas_Cheer.png?739998', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Radiant', rarity: 'Yellow'},//
 {name: 'Crimson Scythe', image: 'https://thoriummod.wiki.gg/images/Crimson_Scythe.png?a4022b', tier: [Boss.PreBoss], tags: [VanillaTag.Crimson], class: 'Radiant', rarity: 'Blue'},//
 {name: 'Dark Contagion', image: 'https://thoriummod.wiki.gg/images/Dark_Contagion.png?132774', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Crimson], class: 'Radiant', rarity: 'Light Red'},//
 {name: 'Dark Scythe', image: 'https://thoriummod.wiki.gg/images/Dark_Scythe.png?c86822', tier: [Boss.PreBoss], tags: [VanillaTag.Corruption], class: 'Radiant', rarity: 'Blue'},//
 {name: 'Deep Staff', image: 'https://thoriummod.wiki.gg/images/Deep_Staff.png?6fbbdb', tier: [Boss.PreBoss], tags: [], class: 'Radiant', rarity: 'Orange'},//
 {name: 'Falling Twilight', image: 'https://thoriummod.wiki.gg/images/Falling_Twilight.png?9cfd23', tier: [Boss.EvilBoss, Boss.Skeletron], tags: [VanillaTag.Corruption], class: 'Radiant', rarity: 'Orange'},//
 {name: 'Feather Barrier Rod', image: 'https://thoriummod.wiki.gg/images/Feather_Barrier_Rod.png?594af3', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Radiant', rarity: 'Green'},//
 {name: 'Hallowed Blessing', image: 'https://thoriummod.wiki.gg/images/Hallowed_Blessing.png?e53932', tier: [Boss.MechBoss1], tags: [CalamityTag.Hollow], class: 'Radiant', rarity: 'Pink'},//
 {name: 'Hallowed Scythe', image: 'https://thoriummod.wiki.gg/images/Hallowed_Scythe.png?fcc3af', tier: [Boss.MechBoss1], tags: [CalamityTag.Hollow], class: 'Radiant', rarity: 'Pink'},//
 {name: 'Heavenly Cloud Scepter', image: 'https://thoriummod.wiki.gg/images/Heavenly_Cloud_Scepter.png?4a7277', tier: [ThoriumBoss.BuriedChampion, Boss.WallOfFlesh], tags: [], class: 'Radiant', rarity: 'Light Red'},//
 {name: 'Heretic Breaker', image: 'https://thoriummod.wiki.gg/images/Heretic_Breaker.png?bb5cab', tier: [Boss.PreBoss], tags: [], class: 'Radiant', rarity: 'Blue'},//
 {name: 'Holy Fire', image: 'https://thoriummod.wiki.gg/images/Holy_Fire.png?e97097', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Corruption], class: 'Radiant', rarity: 'Light Red'},//
 {name: 'Ice Shaver', image: 'https://thoriummod.wiki.gg/images/Ice_Shaver.png?27220f', tier: [Boss.PreBoss], tags: [], class: 'Radiant', rarity: 'White'},//
 {name: 'Iridescent Staff', image: 'https://thoriummod.wiki.gg/images/Iridescent_Staff.png?b67c84', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Radiant', rarity: 'Light Red'},//
 {name: 'Leech Bolt', image: 'https://thoriummod.wiki.gg/images/Leech_Bolt.png?b4fca0', tier: [Boss.PreBoss], tags: [], class: 'Radiant', rarity: 'Blue'},//
 {name: 'Lethal Injection', image: 'https://thoriummod.wiki.gg/images/Lethal_Injection.png?ddb50b', tier: [Boss.Plantera], tags: [], class: 'Radiant', rarity: 'Yellow'},//
 {name: 'Life and Death', image: 'https://thoriummod.wiki.gg/images/Life_and_Death.png?9147e3', tier: [Boss.MoonLord], tags: [], class: 'Radiant', rarity: 'Red'},//
 {name: 'Life Disperser', image: 'https://thoriummod.wiki.gg/images/Life_Disperser.png?25cb50', tier: [Boss.EvilBoss], tags: [], class: 'Radiant', rarity: 'Orange'},//
 {name: 'Light Bringers Warhammer', image: 'https://thoriummod.wiki.gg/images/Light_Bringer%27s_Warhammer.png?e42087', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Radiant', rarity: 'Yellow'},//
 {name: 'Lights Lament', image: 'https://thoriummod.wiki.gg/images/Light%27s_Lament.png?d2df9f', tier: [Boss.Skeletron], tags: [], class: 'Radiant', rarity: 'Orange'},//
 {name: 'Lil Devils Wand', image: 'https://thoriummod.wiki.gg/images/Li%27l_Devil%27s_Wand.png?182588', tier: [ThoriumBoss.BuriedChampion, ThoriumBoss.FallenBeholder], tags: [], class: 'Radiant', rarity: 'Pink'},//
 {name: 'Lustrous Baton', image: 'https://thoriummod.wiki.gg/images/Lustrous_Baton.png?9002dd', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Radiant', rarity: 'Light Red'},//
 {name: 'Midnight Staff', image: 'https://thoriummod.wiki.gg/images/Midnight_Staff.png?d8d4b5', tier: [Boss.WallOfFlesh], tags: [], class: 'Radiant', rarity: 'Light Red'},//
 {name: 'Mind Melter', image: 'https://thoriummod.wiki.gg/images/Mind_Melter.png?f3e473', tier: [Boss.MechBoss1, Boss.Prime], tags: [CalamityTag.Hollow], class: 'Radiant', rarity: 'Pink'},//
 {name: 'Molten Thresher', image: 'https://thoriummod.wiki.gg/images/Molten_Thresher.png?ef380c', tier: [Boss.EvilBoss], tags: [CalamityTag.PreBossHellstone], class: 'Radiant', rarity: 'Orange'},//
 {name: 'Morning Dew', image: 'https://thoriummod.wiki.gg/images/Morning_Dew.png?d5234a', tier: [Boss.MechBossRest], tags: [], class: 'Radiant', rarity: 'Lime'},//
 {name: 'Omen', image: 'https://thoriummod.wiki.gg/images/Omen.png?67c193', tier: [Boss.EvilBoss], tags: [CalamityTag.PreBossHellstone], class: 'Radiant', rarity: 'Orange'},//
 {name: 'Pagans Grasp', image: 'https://thoriummod.wiki.gg/images/Pagan%27s_Grasp.png?82f9c2', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Radiant', rarity: 'Yellow'},//
 {name: 'Palm Cross', image: 'https://thoriummod.wiki.gg/images/Palm_Cross.png?53ebe3', tier: [Boss.PreBoss], tags: [], class: 'Radiant', rarity: 'Blue'},//
 {name: 'Poison Prickler', image: 'https://thoriummod.wiki.gg/images/Poison_Prickler.png?eb4b7f', tier: [Boss.PreBoss], tags: [], class: 'Radiant', rarity: 'Orange'},//
 {name: 'Purified Water', image: 'https://thoriummod.wiki.gg/images/Purified_Water.png?b47b64', tier: [Boss.PreBoss], tags: [], class: 'Radiant', rarity: 'Blue'},//
 {name: 'Rotten Cod', image: 'https://thoriummod.wiki.gg/images/Rotten_Cod.png?734dbc', tier: [Boss.PreBoss], tags: [VanillaTag.Corruption], class: 'Radiant', rarity: 'Blue'},//
 {name: 'Sacred Bludgeon', image: 'https://thoriummod.wiki.gg/images/Sacred_Bludgeon.png?1431a5', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Radiant', rarity: 'Light Red'},//
 {name: 'Sacred Lyre', image: 'https://thoriummod.wiki.gg/images/Sacred_Lyre.png?f6f6ba', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Radiant', rarity: 'Light Red'},//
 {name: 'Samsara Lotus', image: 'https://thoriummod.wiki.gg/images/Samsara_Lotus.png?275567', tier: [Boss.EvilBoss], tags: [], class: 'Radiant', rarity: 'Green'},//
 {name: 'Shadow Wand', image: 'https://thoriummod.wiki.gg/images/Shadow_Wand.png?55af74', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Radiant', rarity: 'Green'},//
 {name: 'Spirit Benders Staff', image: 'https://thoriummod.wiki.gg/images/Spirit_Bender%27s_Staff.png?d866cf', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Radiant', rarity: 'Yellow'},//
 {name: 'Spirit Blast Wand', image: 'https://thoriummod.wiki.gg/images/Spirit_Blast_Wand.png?27425b', tier: [Boss.Skeletron], tags: [], class: 'Radiant', rarity: 'Green'},//
 {name: 'Templars Judgement', image: 'https://thoriummod.wiki.gg/images/Templar%27s_Judgement.png?35c7e0', tier: [Boss.Skeletron], tags: [], class: 'Radiant', rarity: 'Green'},//
 {name: 'Terra Scythe', image: 'https://thoriummod.wiki.gg/images/Terra_Scythe.png?a42486', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Radiant', rarity: 'Yellow'},//
 {name: 'The Effuser', image: 'https://thoriummod.wiki.gg/images/The_Effuser.png?fe85da', tier: [Boss.MechBossRest], tags: [], class: 'Radiant', rarity: 'Lime'},//
 {name: 'The Stalker', image: 'https://thoriummod.wiki.gg/images/The_Stalker.png?92588e', tier: [Boss.EvilBoss], tags: [VanillaTag.Crimson], class: 'Radiant', rarity: 'Blue'},//
 {name: 'True Blood Harvest', image: 'https://thoriummod.wiki.gg/images/True_Blood_Harvest.png?a5f7d9', tier: [Boss.Skeletron, Boss.Plantera], tags: [VanillaTag.Crimson], class: 'Radiant', rarity: 'Yellow'},//
 {name: 'True Falling Twilight', image: 'https://thoriummod.wiki.gg/images/True_Falling_Twilight.png?75038d', tier: [Boss.Skeletron, Boss.Plantera], tags: [VanillaTag.Corruption], class: 'Radiant', rarity: 'Yellow'},//
 {name: 'True Hallowed Scythe', image: 'https://thoriummod.wiki.gg/images/True_Hallowed_Scythe.png?409aa7', tier: [Boss.Plantera], tags: [], class: 'Radiant', rarity: 'Yellow'},//
 {name: 'Twilight Staff', image: 'https://thoriummod.wiki.gg/images/Twilight_Staff.png?874d51', tier: [Boss.WallOfFlesh], tags: [CalamityTag.TitaniumAdamantite], class: 'Radiant', rarity: 'Light Red'},//
 {name: 'Wild Umbra', image: 'https://thoriummod.wiki.gg/images/Wild_Umbra.png?4ebd33', tier: [Boss.WallOfFlesh], tags: [], class: 'Radiant', rarity: 'Light Red'},//
 {name: 'Wooden Baton', image: 'https://thoriummod.wiki.gg/images/Wooden_Baton.png?c4cc46', tier: [Boss.PreBoss], tags: [], class: 'Radiant', rarity: 'White'},//
 {name: 'Cold Front', image: 'https://thoriummod.wiki.gg/images/Cold_Front.png?7b534f', tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
 {name: 'Flurry', image: 'https://thoriummod.wiki.gg/images/Flurry.png?dc7224', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'White'},//
 {name: 'Frost Fury', image: 'https://thoriummod.wiki.gg/images/Frost_Fury.png?3a5e40', tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
 {name: 'Frost Pelter', image: 'https://thoriummod.wiki.gg/images/Frost_Pelter.png?9b5e41', tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'White'},//
 {name: 'Ice Breaker', image: 'https://thoriummod.wiki.gg/images/Ice_Breaker.png?293008', tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
 {name: 'Ice Cube', image: 'https://thoriummod.wiki.gg/images/Ice_Cube.png?a1ec43', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'White'},//
 {name: 'Ice Lance', image: 'https://thoriummod.wiki.gg/images/Ice_Lance.png?3ebfb6', tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
 {name: 'Icy Tomahawk', image: 'https://thoriummod.wiki.gg/images/Icy_Tomahawk.png?1ec846', tier: [Boss.PreBoss], tags: [], class: 'Throwing', rarity: 'White'},//
 {name: 'The Snowball', image: 'https://thoriummod.wiki.gg/images/The_Snowball.png?133b4a', tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'White'},//
 {name: 'Illumite Barrager', image: 'https://thoriummod.wiki.gg/images/Illumite_Barrager.png?62c978', tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Lime'},//
 {name: 'Illumite Blade', image: 'https://thoriummod.wiki.gg/images/Illumite_Blade.png?7513e7', tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Lime'},//
 {name: 'Illumite Blaster', image: 'https://thoriummod.wiki.gg/images/Illumite_Blaster.png?d64945', tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Lime'},//
 {name: 'Illumite Scythe', image: 'https://thoriummod.wiki.gg/images/Illumite_Scythe.png?de6f9f', tier: [Boss.Plantera], tags: [], class: 'Radiant', rarity: 'Lime'},//
 {name: 'Illumite Shotbow', image: 'https://thoriummod.wiki.gg/images/Illumite_Shotbow.png?a9c49d', tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Lime'},//
 {name: 'Illumite Spear', image: 'https://thoriummod.wiki.gg/images/Illumite_Spear.png?a3c81b', tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Lime'},//
 {name: 'Lodestone Bow', image: 'https://thoriummod.wiki.gg/images/Lodestone_Bow.png?627212', tier: [Boss.WallOfFlesh, ThoriumBoss.FallenBeholder], tags: [CalamityTag.MythrilOrichalcum], class: 'Ranged', rarity: 'Pink'},//
 {name: 'Lodestone Breaker', image: 'https://thoriummod.wiki.gg/images/Lodestone_Breaker.png?4497d2', tier: [Boss.WallOfFlesh, ThoriumBoss.FallenBeholder], tags: [CalamityTag.MythrilOrichalcum], class: 'Melee', rarity: 'Pink'},//
 {name: 'Lodestone Claymore', image: 'https://thoriummod.wiki.gg/images/Lodestone_Claymore.png?38760f', tier: [Boss.WallOfFlesh, ThoriumBoss.FallenBeholder], tags: [CalamityTag.MythrilOrichalcum], class: 'Melee', rarity: 'Pink'},//
 {name: 'Lodestone Javelin', image: 'https://thoriummod.wiki.gg/images/Lodestone_Javelin.png?a84ce4', tier: [Boss.WallOfFlesh, ThoriumBoss.FallenBeholder], tags: [CalamityTag.MythrilOrichalcum], class: 'Throwing', rarity: 'Pink'},//
 {name: 'Lodestone Quick Draw', image: 'https://thoriummod.wiki.gg/images/Lodestone_Quick_Draw.png?8d5975', tier: [Boss.WallOfFlesh, ThoriumBoss.FallenBeholder], tags: [CalamityTag.MythrilOrichalcum], class: 'Ranged', rarity: 'Pink'},//
 {name: 'Lodestone Staff', image: 'https://thoriummod.wiki.gg/images/Lodestone_Staff.png?9bd1f0', tier: [Boss.WallOfFlesh, ThoriumBoss.FallenBeholder], tags: [CalamityTag.MythrilOrichalcum], class: 'Magic', rarity: 'Pink'},//
 {name: 'Adamantite Staff', image: 'https://thoriummod.wiki.gg/images/Adamantite_Staff.png?c18063', tier: [Boss.WallOfFlesh], tags: [CalamityTag.TitaniumAdamantite], class: 'Magic', rarity: 'Light Red'},//
 {name: 'Blackhole Cannon', image: 'https://thoriummod.wiki.gg/images/Blackhole_Cannon.png?df6935', tier: [ThoriumBoss.FallenBeholder, Boss.MechBossRest], tags: [], class: 'Magic', rarity: 'Light Purple'},//
 {name: 'Chlorophyte Staff', image: 'https://thoriummod.wiki.gg/images/Chlorophyte_Staff.png?a79359', tier: [Boss.MechBossRest], tags: [], class: 'Magic', rarity: 'Lime'},//
 {name: 'Chromatic Fury', image: 'https://thoriummod.wiki.gg/images/Chromatic_Fury.png?fb8b81', tier: [Boss.Plantera, Boss.Empress], tags: [], class: 'Magic', rarity: 'Yellow'},//
 {name: 'Cobalt Staff', image: 'https://thoriummod.wiki.gg/images/Cobalt_Staff.png?9727be', tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Light Red'},//
 {name: 'Cyclone', image: 'https://thoriummod.wiki.gg/images/Cyclone.png?edde41', tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Pink'},//
 {name: 'Dark Wave', image: 'https://thoriummod.wiki.gg/images/Dark_Wave.png?a84eaa', tier: [Boss.PreBoss], tags: [VanillaTag.Corruption], class: 'Magic', rarity: 'Blue'},//
 {name: 'Dynasty War Fan', image: 'https://thoriummod.wiki.gg/images/Dynasty_War_Fan.png?c4b283', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Magic', rarity: 'Light Red'},//
 {name: 'Enchanted Staff', image: 'https://thoriummod.wiki.gg/images/Enchanted_Staff.png?262b50', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
 {name: 'Hallowed Staff', image: 'https://thoriummod.wiki.gg/images/Hallowed_Staff.png?dc4d58', tier: [Boss.MechBoss1], tags: [CalamityTag.Hollow], class: 'Magic', rarity: 'Pink'},//
 {name: 'High Tide', image: 'https://thoriummod.wiki.gg/images/High_Tide.png?67face', tier: [Boss.Skeletron], tags: [], class: 'Magic', rarity: 'Green'},//
 {name: 'Inferno Staff', image: 'https://thoriummod.wiki.gg/images/Inferno_Staff.png?c0250e', tier: [Boss.EvilBoss], tags: [CalamityTag.PreBossHellstone], class: 'Magic', rarity: 'Orange'},//
 {name: 'Joyeuse', image: 'https://thoriummod.wiki.gg/images/Joyeuse.png?114b8e', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Magic', rarity: 'Light Red'},//
 {name: 'Jungles Wrath', image: 'https://thoriummod.wiki.gg/images/Jungle%27s_Wrath.png?16575c', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Orange'},//
 {name: 'Mythril Staff', image: 'https://thoriummod.wiki.gg/images/Mythril_Staff.png?abd6b6', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Magic', rarity: 'Light Red'},//
 {name: 'Orichalcum Staff', image: 'https://thoriummod.wiki.gg/images/Orichalcum_Staff.png?8537e5', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Magic', rarity: 'Light Red'},//
 {name: 'Palladium Staff', image: 'https://thoriummod.wiki.gg/images/Palladium_Staff.png?caae8c', tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Light Red'},//
 {name: 'Spectral Blade', image: 'https://thoriummod.wiki.gg/images/Spectral_Blade.png?d5569b', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Magic', rarity: 'Yellow'},//
 {name: 'Spine Breaker', image: 'https://thoriummod.wiki.gg/images/Spine_Breaker.png?fe53f1', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Orange'},//
 {name: 'Spores', image: 'https://thoriummod.wiki.gg/images/Spores.png?96b039', tier: [Boss.Plantera], tags: [], class: 'Magic', rarity: 'Yellow'},//
 {name: 'Stalagmite', image: 'https://thoriummod.wiki.gg/images/Stalagmite.png?53d9d5', tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Light Red'},//
 {name: 'Time Gate', image: 'https://thoriummod.wiki.gg/images/Time_Gate.png?370ece', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Magic', rarity: 'Yellow'},//
 {name: 'Titanium Staff', image: 'https://thoriummod.wiki.gg/images/Titanium_Staff.png?6e96ee', tier: [Boss.WallOfFlesh], tags: [CalamityTag.TitaniumAdamantite], class: 'Magic', rarity: 'Light Red'},//
 {name: 'Vessel Buster', image: 'https://thoriummod.wiki.gg/images/Vessel_Buster.png?e6035e', tier: [Boss.PreBoss], tags: [VanillaTag.Crimson], class: 'Magic', rarity: 'Blue'},//
 {name: 'Destroyers Rage', image: 'https://thoriummod.wiki.gg/images/Destroyer%27s_Rage.png?496616', tier: [Boss.MechBossRest], tags: [], class: 'Ranged', rarity: 'Light Purple'},//
 {name: 'Eye of the Destroyer', image: 'https://thoriummod.wiki.gg/images/Eye_of_the_Destroyer.png?6cf3d2', tier: [Boss.MechBossRest], tags: [], class: 'Melee', rarity: 'Light Purple'},//
 {name: 'Primes Fury', image: 'https://thoriummod.wiki.gg/images/Prime%27s_Fury.png?586fdb', tier: [Boss.MechBossRest], tags: [], class: 'Melee', rarity: 'Light Purple'},//
 {name: 'Spark Taser', image: 'https://thoriummod.wiki.gg/images/Spark_Taser.png?db77a4', tier: [Boss.MechBossRest], tags: [], class: 'Throwing', rarity: 'Light Purple'},//
 {name: 'Twins Ire', image: 'https://thoriummod.wiki.gg/images/Twin%27s_Ire.png?4d8501', tier: [Boss.MechBossRest], tags: [], class: 'Magic', rarity: 'Light Purple'},//
 {name: 'Doom Fire Axe', image: 'https://thoriummod.wiki.gg/images/Doom_Fire_Axe.png?73d0d9', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Melee', rarity: 'Light Red'},//
 {name: 'Nocturnal', image: 'https://thoriummod.wiki.gg/images/Nocturnal.png?fa74be', tier: [Boss.Skeletron], tags: [VanillaTag.Corruption], class: 'Melee', rarity: 'Orange'},//
 {name: 'Sanguine', image: 'https://thoriummod.wiki.gg/images/Sanguine.png?2f5dcb', tier: [Boss.Skeletron], tags: [VanillaTag.Crimson], class: 'Melee', rarity: 'Orange'},//
 {name: 'Sol-Scorched Slab', image: 'https://thoriummod.wiki.gg/images/Sol-Scorched_Slab.png?3a706e', tier: [Boss.Plantera], tags: [], class: 'Melee', rarity: 'Yellow'},//
 {name: 'Aquamarine Staff', image: 'https://thoriummod.wiki.gg/images/Aquamarine_Staff.png?87894b', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'White'},//
 {name: 'Opal Staff', image: 'https://thoriummod.wiki.gg/images/Opal_Staff.png?4c25c8', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'White'},//
 {name: 'Armor Bane', image: 'https://thoriummod.wiki.gg/images/Armor_Bane.png?280b80', tier: [ThoriumBoss.FallenBeholder], tags: [], class: 'Ranged', rarity: 'Pink'},//
 {name: 'Back Stabber', image: 'https://thoriummod.wiki.gg/images/Back_Stabber.png?4c27f6', tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},//
 {name: 'Bent Zombie Arm', image: 'https://thoriummod.wiki.gg/images/Bent_Zombie_Arm.png?f90181', tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
 {name: 'Bone Flayer Tail', image: 'https://thoriummod.wiki.gg/images/Bone_Flayer_Tail.png?143ea6', tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},//
 {name: 'Bullet Storm', image: 'https://thoriummod.wiki.gg/images/Bullet_Storm.png?6439c6', tier: [ThoriumBoss.FallenBeholder], tags: [], class: 'Ranged', rarity: 'Pink'},//
 {name: 'Chum', image: 'https://thoriummod.wiki.gg/images/Chum.png?6d3fd8', tier: [ThoriumBoss.QueenJelly, Boss.WallOfFlesh], tags: [], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Detached Blaster', image: 'https://thoriummod.wiki.gg/images/Detached_Blaster.png?50b4aa', tier: [Boss.EvilBoss], tags: [], class: 'Magic', rarity: 'Green'},//
 {name: 'Ebon Hammer', image: 'https://thoriummod.wiki.gg/images/Ebon_Hammer.png?d11c2a', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Melee', rarity: 'Blue'},//
 {name: 'Ebony Tail', image: 'https://thoriummod.wiki.gg/images/Ebony_Tail.png?de8cd5', tier: [Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},//
 {name: 'Eel-rod', image: 'https://thoriummod.wiki.gg/images/Eel-rod.png?a152e6', tier: [ThoriumBoss.QueenJelly, Boss.Skeletron], tags: [], class: 'Magic', rarity: 'Green'},//
 {name: 'Eighth Plague Staff', image: 'https://thoriummod.wiki.gg/images/Eighth_Plague_Staff.png?fe8b88', tier: [ThoriumBoss.ThunderBird], tags: [], class: 'Magic', rarity: 'Blue'},//
 {name: 'Executioner', image: 'https://thoriummod.wiki.gg/images/Executioner.png?bee577', tier: [ThoriumBoss.FallenBeholder], tags: [], class: 'Melee', rarity: 'Pink'},//
 {name: 'Fork', image: 'https://thoriummod.wiki.gg/images/Fork.png?5f8e1c', tier: [Boss.KingSlime, Boss.EyeOfCthulhu], tags: [], class: 'Melee', rarity: 'Blue'},//
 {name: 'Frost Plague Staff', image: 'https://thoriummod.wiki.gg/images/Frost_Plague_Staff.png?34582a', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Corruption], class: 'Magic', rarity: 'Light Red'},//
 {name: 'Hail Bomber', image: 'https://thoriummod.wiki.gg/images/Hail_Bomber.png?267c17', tier: [Boss.WallOfFlesh], tags: [], class: 'Summon', rarity: 'Light Red'},//
 {name: 'Hex Wand', image: 'https://thoriummod.wiki.gg/images/Hex_Wand.png?69b3f7', tier: [Boss.EvilBoss, Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Light Red'},//
 {name: 'Hot Pot', image: 'https://thoriummod.wiki.gg/images/Hot_Pot.png?f95c2e', tier: [Boss.WallOfFlesh], tags: [], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Kinetic Knife', image: 'https://thoriummod.wiki.gg/images/Kinetic_Knife.png?f8a0f4', tier: [ThoriumBoss.FallenBeholder], tags: [], class: 'Magic', rarity: 'Pink'},//
 {name: 'Kitchen Knife', image: 'https://thoriummod.wiki.gg/images/Kitchen_Knife.png?17c2f2', tier: [Boss.KingSlime, Boss.EyeOfCthulhu], tags: [], class: 'Melee', rarity: 'Blue'},//
 {name: 'Kunai', image: 'https://thoriummod.wiki.gg/images/Kunai.png?cd8dd2', tier: [ThoriumBoss.ThunderBird, Boss.WallOfFlesh], tags: [], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Lasting Pliers', image: 'https://thoriummod.wiki.gg/images/Lasting_Pliers.png?cdd8b8', tier: [Boss.PreBoss], tags: [], class: 'Throwing', rarity: 'Blue'},//
 {name: 'Legion Ornament', image: 'https://thoriummod.wiki.gg/images/Legion_Ornament.png?e14853', tier: [Boss.WallOfFlesh], tags: [], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Livewire Crasher', image: 'https://thoriummod.wiki.gg/images/Livewire_Crasher.png?c61c8f', tier: [Boss.Golem], tags: [], class: 'Melee', rarity: 'Yellow'},//
 {name: 'Marine Launcher', image: 'https://thoriummod.wiki.gg/images/Marine_Launcher.png?29be5c', tier: [ThoriumBoss.QueenJelly, Boss.Skeletron], tags: [], class: 'Ranged', rarity: 'Green'},//
 {name: 'Prism Staff', image: 'https://thoriummod.wiki.gg/images/Prism_Staff.png?800627', tier: [Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Light Red'},//
 {name: 'Rapier', image: 'https://thoriummod.wiki.gg/images/Rapier.png?8719cc', tier: [ThoriumBoss.FallenBeholder], tags: [], class: 'Melee', rarity: 'Pink'},//
 {name: 'Red Hourglass', image: 'https://thoriummod.wiki.gg/images/Red_Hourglass.png?c066f9', tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
 {name: 'Scalper', image: 'https://thoriummod.wiki.gg/images/Scalper.png?2df1a2', tier: [ThoriumBoss.FallenBeholder], tags: [], class: 'Melee', rarity: 'Pink'},//
 {name: 'Scorpain', image: 'https://thoriummod.wiki.gg/images/Scorpain.png?499fe6', tier: [ThoriumBoss.ThunderBird], tags: [], class: 'Melee', rarity: 'Blue'},//
 {name: 'Severed Hand', image: 'https://thoriummod.wiki.gg/images/Severed_Hand.png?7eb663', tier: [Boss.PreBoss], tags: [], class: 'Throwing', rarity: 'Blue'},//
 {name: 'Spine Buster', image: 'https://thoriummod.wiki.gg/images/Spine_Buster.png?671b32', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Crimson], class: 'Ranged', rarity: 'Light Red'},//
 {name: 'Spoon', image: 'https://thoriummod.wiki.gg/images/Spoon.png?3f7000', tier: [Boss.KingSlime, Boss.EyeOfCthulhu], tags: [], class: 'Melee', rarity: 'Blue'},//
 {name: 'Spud Bomber', image: 'https://thoriummod.wiki.gg/images/Spud_Bomber.png?8771ac', tier: [Boss.KingSlime, Boss.EyeOfCthulhu], tags: [], class: 'Ranged', rarity: 'Blue'},//
 {name: 'Steam Flail', image: 'https://thoriummod.wiki.gg/images/Steam_Flail.png?cefc3e', tier: [Boss.MechBoss1], tags: [], class: 'Melee', rarity: 'Pink'},//
 {name: 'The Sea Mine', image: 'https://thoriummod.wiki.gg/images/The_Sea_Mine.png?9c8d1d', tier: [ThoriumBoss.QueenJelly], tags: [], class: 'Melee', rarity: 'Pink'},//
 {name: 'Tommy Gun', image: 'https://thoriummod.wiki.gg/images/Tommy_Gun.png?6cf1cf', tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Red'},//
 {name: 'Vega Phaser', image: 'https://thoriummod.wiki.gg/images/Vega_Phaser.png?101ab6', tier: [Boss.EvilBoss, Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Red'},//
 {name: 'Vile Spitter', image: 'https://thoriummod.wiki.gg/images/Vile_Spitter.png?6888c4', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Corruption], class: 'Magic', rarity: 'Light Red'},//
 {name: 'Whirlpool Saber', image: 'https://thoriummod.wiki.gg/images/Whirlpool_Saber.png?a91fca', tier: [ThoriumBoss.QueenJelly, Boss.Skeletron], tags: [], class: 'Melee', rarity: 'Green'},//
 {name: 'Adamantite Carbine', image: 'https://thoriummod.wiki.gg/images/Adamantite_Carbine.png?21fe27', tier: [Boss.WallOfFlesh], tags: [CalamityTag.TitaniumAdamantite], class: 'Ranged', rarity: 'Light Red'},//
 {name: 'Cinder String', image: 'https://thoriummod.wiki.gg/images/Cinder_String.png?f4aa9d', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Ranged', rarity: 'Light Red'},//
 {name: 'Cobalt Popper', image: 'https://thoriummod.wiki.gg/images/Cobalt_Popper.png?4c7a7e', tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Red'},//
 {name: 'Comet Crossfire', image: 'https://thoriummod.wiki.gg/images/Comet_Crossfire.png?fc3d70', tier: [Boss.EvilBoss, Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Ranged', rarity: 'Light Red'},//
 {name: 'Elephant Gun', image: 'https://thoriummod.wiki.gg/images/Elephant_Gun.png?895f74', tier: [Boss.Skeletron], tags: [], class: 'Ranged', rarity: 'Orange'},//
 {name: 'Eternal Night', image: 'https://thoriummod.wiki.gg/images/Eternal_Night.png?d39fce', tier: [Boss.Skeletron], tags: [], class: 'Ranged', rarity: 'Orange'},//
 {name: 'Bramble Shot', image: 'https://thoriummod.wiki.gg/images/Bramble_Shot.png?19200c', tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Orange'},//
 {name: 'Micro Launcher', image: 'https://thoriummod.wiki.gg/images/Micro_Launcher.png?f2fea2', tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
 {name: 'Mycelium Gatling Gun', image: 'https://thoriummod.wiki.gg/images/Mycelium_Gatling_Gun.png?1784bf', tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
 {name: 'Mythril Pelter', image: 'https://thoriummod.wiki.gg/images/Mythril_Pelter.png?b20f31', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Ranged', rarity: 'Light Red'},//
 {name: 'Orichalcum Pelter', image: 'https://thoriummod.wiki.gg/images/Orichalcum_Pelter.png?9a9ad2', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Ranged', rarity: 'Light Red'},//
 {name: 'Palladium Sub-machine Gun', image: 'https://thoriummod.wiki.gg/images/Palladium_Sub-machine_Gun.png?f4ea94', tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Red'},//
 {name: 'Rejects Blowpipe', image: 'https://thoriummod.wiki.gg/images/Reject%27s_Blowpipe.png?a349db', tier: [Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
 {name: 'Slugger', image: 'https://thoriummod.wiki.gg/images/Slugger.png?7b19e7', tier: [Boss.Skeletron], tags: [], class: 'Ranged', rarity: 'Green'},//
 {name: 'Stream Sting', image: 'https://thoriummod.wiki.gg/images/Stream_Sting.png?7a1dec', tier: [Boss.Skeletron], tags: [], class: 'Ranged', rarity: 'Green'},//
 {name: 'The Zapper', image: 'https://thoriummod.wiki.gg/images/The_Zapper.png?67741a', tier: [Boss.EvilBoss], tags: [], class: 'Ranged', rarity: 'Green'},//
 {name: 'Titanium Rifle', image: 'https://thoriummod.wiki.gg/images/Titanium_Rifle.png?2d6f8c', tier: [Boss.WallOfFlesh], tags: [CalamityTag.TitaniumAdamantite], class: 'Ranged', rarity: 'Light Red'},//
 {name: 'Tranquilizer Gun', image: 'https://thoriummod.wiki.gg/images/Tranquilizer_Gun.png?a4626c', tier: [Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Red'},//
 {name: 'Trapper', image: 'https://thoriummod.wiki.gg/images/Trapper.png?289853', tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Blue'},//
 {name: 'Trigun', image: 'https://thoriummod.wiki.gg/images/Trigun.png?49989e', tier: [Boss.MechBoss1], tags: [CalamityTag.Hollow], class: 'Ranged', rarity: 'Pink'},//
 {name: 'Webgun', image: 'https://thoriummod.wiki.gg/images/Webgun.png?3508f2', tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Green'},//
 {name: 'Sandstone Scimitar', image: 'https://thoriummod.wiki.gg/images/Sandstone_Scimitar.png?b23cfd', tier: [ThoriumBoss.ThunderBird], tags: [], class: 'Melee', rarity: 'Blue'},//
 {name: 'Sandstone Bow', image: 'https://thoriummod.wiki.gg/images/Sandstone_Bow.png?87bb7f', tier: [ThoriumBoss.ThunderBird], tags: [], class: 'Ranged', rarity: 'Blue'},//
 {name: 'Sandstone Spear', image: 'https://thoriummod.wiki.gg/images/Sandstone_Spear.png?b0612d', tier: [ThoriumBoss.ThunderBird], tags: [], class: 'Melee', rarity: 'Blue'},//
 {name: 'Sandstone Throwing Knife', image: 'https://thoriummod.wiki.gg/images/Sandstone_Throwing_Knife.png?a73160', tier: [ThoriumBoss.ThunderBird], tags: [], class: 'Throwing', rarity: 'Blue'},//
 {name: 'Wind Gust', image: 'https://thoriummod.wiki.gg/images/Wind_Gust.png?eab2bf', tier: [ThoriumBoss.ThunderBird], tags: [], class: 'Magic', rarity: 'Blue'},//
 {name: 'Durasteel Blade', image: 'https://thoriummod.wiki.gg/images/Durasteel_Blade.png?7c914d', tier: [Boss.EyeOfCthulhu, Boss.WallOfFlesh], tags: [], class: 'Melee', rarity: 'Light Red'},//
 {name: 'Durasteel Repeater', image: 'https://thoriummod.wiki.gg/images/Durasteel_Repeater.png?b23206', tier: [Boss.EyeOfCthulhu, Boss.WallOfFlesh], tags: [], class: 'Ranged', rarity: 'Light Red'},//
 {name: 'Durasteel Throwing Spear', image: 'https://thoriummod.wiki.gg/images/Durasteel_Throwing_Spear.png?29d6c4', tier: [Boss.EyeOfCthulhu, Boss.WallOfFlesh], tags: [], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Steel Blade', image: 'https://thoriummod.wiki.gg/images/Steel_Blade.png?c7eca7', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Melee', rarity: 'Blue'},//
 {name: 'Steel Bow', image: 'https://thoriummod.wiki.gg/images/Steel_Bow.png?1dd25e', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Ranged', rarity: 'Blue'},//
 {name: 'Steel Throwing Axe', image: 'https://thoriummod.wiki.gg/images/Steel_Throwing_Axe.png?e67d18', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Throwing', rarity: 'Blue'},//
 {name: 'Antlion Staff', image: 'https://thoriummod.wiki.gg/images/Antlion_Staff.png?cec3ef', tier: [Boss.PreBoss], tags: [], class: 'Summon', rarity: 'White'},//
 {name: 'Bleeding Heart Staff', image: 'https://thoriummod.wiki.gg/images/Bleeding_Heart_Staff.png?beeed1', tier: [Boss.EvilBoss], tags: [VanillaTag.Crimson], class: 'Summon', rarity: 'Blue'},//
 {name: 'Butterfly Staff', image: 'https://thoriummod.wiki.gg/images/Butterfly_Staff.png?397be1', tier: [Boss.PreBoss], tags: [], class: 'Summon', rarity: 'Blue'},//
 {name: 'Corruptling Staff', image: 'https://thoriummod.wiki.gg/images/Corruptling_Staff.png?bd1ac2', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Corruption, CalamityTag.MythrilOrichalcum], class: 'Summon', rarity: 'Light Red'},//
 {name: 'Creeping Vine Staff', image: 'https://thoriummod.wiki.gg/images/Creeping_Vine_Staff.png?4f00b2', tier: [Boss.PreBoss], tags: [], class: 'Summon', rarity: 'Orange'},//
 {name: 'Crimson Hound Staff', image: 'https://thoriummod.wiki.gg/images/Crimson_Hound_Staff.png?c6b57c', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Crimson, CalamityTag.MythrilOrichalcum], class: 'Summon', rarity: 'Light Red'},//
 {name: 'Devourer Staff', image: 'https://thoriummod.wiki.gg/images/Devourer_Staff.png?fb2dc8', tier: [Boss.EvilBoss], tags: [VanillaTag.Corruption], class: 'Summon', rarity: 'Blue'},//
 {name: 'Enchanted Cane', image: 'https://thoriummod.wiki.gg/images/Enchanted_Cane.png?54c6ca', tier: [Boss.PreBoss], tags: [], class: 'Summon', rarity: 'Blue'},//
 {name: 'Fungal Cane', image: 'https://thoriummod.wiki.gg/images/Fungal_Cane.png?110bc5', tier: [Boss.WallOfFlesh], tags: [], class: 'Summon', rarity: 'Pink'},//
 {name: 'Living Wood Acorn', image: 'https://thoriummod.wiki.gg/images/Living_Wood_Acorn.png?6a705c', tier: [Boss.PreBoss], tags: [], class: 'Summon', rarity: 'White'},//
 {name: 'Meteor Head Staff', image: 'https://thoriummod.wiki.gg/images/Meteor_Head_Staff.png?1050ec', tier: [Boss.EvilBoss], tags: [], class: 'Summon', rarity: 'Blue'},//
 {name: 'Mortar Staff', image: 'https://thoriummod.wiki.gg/images/Mortar_Staff.png?9bf617', tier: [Boss.WallOfFlesh], tags: [], class: 'Summon', rarity: 'Light Red'},//
 {name: 'Spittin Fish', image: 'https://thoriummod.wiki.gg/images/Spittin%27_Fish.png?868da2', tier: [Boss.PreBoss], tags: [], class: 'Summon', rarity: 'Green'},//
 {name: 'Strongest Link', image: 'https://thoriummod.wiki.gg/images/Strongest_Link.png?ffb2b7', tier: [Boss.Skeletron], tags: [], class: 'Summon', rarity: 'Green'},//
 {name: 'Thrombosis', image: 'https://thoriummod.wiki.gg/images/Thrombosis.png?f05bd8', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Summon', rarity: 'Light Red'},//
 {name: 'Void Lance', image: 'https://thoriummod.wiki.gg/images/Void_Lance.png?9edf95', tier: [Boss.WallOfFlesh, ThoriumBoss.FallenBeholder], tags: [CalamityTag.MythrilOrichalcum], class: 'Summon', rarity: 'Pink'},//
 {name: 'Volt Module', image: 'https://thoriummod.wiki.gg/images/Volt_Module.png?8fbc88', tier: [Boss.Golem], tags: [], class: 'Summon', rarity: 'Yellow'},//
 {name: 'Terrarium Bomber', image: 'https://thoriummod.wiki.gg/images/Terrarium_Bomber.png?db9878', tier: [Boss.Cultist], tags: [], class: 'Ranged', rarity: 'Terrarium'},//
 {name: 'Terrarium Enigma Staff', image: 'https://thoriummod.wiki.gg/images/Terrarium_Enigma_Staff.png?6f1d86', tier: [Boss.Cultist], tags: [], class: 'Summon', rarity: 'Terrarium'},//
 {name: 'Terrarium Holy Scythe', image: 'https://thoriummod.wiki.gg/images/Terrarium_Holy_Scythe.png?4dfea3', tier: [Boss.Cultist], tags: [], class: 'Radiant', rarity: 'Terrarium'},//
 {name: 'Terrarium Hyper Disc', image: 'https://thoriummod.wiki.gg/images/Terrarium_Hyper_Disc.png?90779a', tier: [Boss.Cultist], tags: [], class: 'Melee', rarity: 'Terrarium'},//
 {name: 'Terrarium Longbow', image: 'https://thoriummod.wiki.gg/images/Terrarium_Longbow.png?1da8cf', tier: [Boss.Cultist], tags: [], class: 'Ranged', rarity: 'Terrarium'},//
 {name: 'Terrarium Pulse Rifle', image: 'https://thoriummod.wiki.gg/images/Terrarium_Pulse_Rifle.png?2c101f', tier: [Boss.Cultist], tags: [], class: 'Ranged', rarity: 'Terrarium'},//
 {name: 'Terrarium Ripple Knife', image: 'https://thoriummod.wiki.gg/images/Terrarium_Ripple_Knife.png?3f28cc', tier: [Boss.Cultist], tags: [], class: 'Throwing', rarity: 'Terrarium'},//
 {name: 'Terrarium Saber', image: 'https://thoriummod.wiki.gg/images/Terrarium_Saber.png?8a4823', tier: [Boss.Cultist], tags: [], class: 'Melee', rarity: 'Terrarium'},//
 {name: 'Terrarium Sage Staff', image: 'https://thoriummod.wiki.gg/images/Terrarium_Sage_Staff.png?63358d', tier: [Boss.Cultist], tags: [], class: 'Magic', rarity: 'Terrarium'},//
 {name: 'Terrarium Spear', image: 'https://thoriummod.wiki.gg/images/Terrarium_Spear.png?9e4887', tier: [Boss.Cultist], tags: [], class: 'Melee', rarity: 'Terrarium'},//
 {name: 'Thors Hammer: Magic', image: 'https://thoriummod.wiki.gg/images/Thor%27s_Hammer_-_Ranged.png?2b8dba', tier: [Boss.EvilBoss], tags: [CalamityTag.PreBossHellstone], class: 'Magic', rarity: 'Orange'},//
 {name: 'Thors Hammer: Melee', image: 'https://thoriummod.wiki.gg/images/Thor%27s_Hammer_-_Ranged.png?2b8dba', tier: [Boss.EvilBoss], tags: [CalamityTag.PreBossHellstone], class: 'Melee', rarity: 'Orange'},//
 {name: 'Thors Hammer: Ranged', image: 'https://thoriummod.wiki.gg/images/Thor%27s_Hammer_-_Ranged.png?2b8dba', tier: [Boss.EvilBoss], tags: [CalamityTag.PreBossHellstone], class: 'Ranged', rarity: 'Orange'},//
 {name: 'Thorium Blade', image: 'https://thoriummod.wiki.gg/images/Thorium_Blade.png?b607d8', tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
 {name: 'Thorium Boomerang', image: 'https://thoriummod.wiki.gg/images/Thorium_Boomerang.png?6692b7', tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
 {name: 'Thorium Bow', image: 'https://thoriummod.wiki.gg/images/Thorium_Bow.png?89b997', tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Blue'},//
 {name: 'Thorium Dagger', image: 'https://thoriummod.wiki.gg/images/Thorium_Dagger.png?46a284', tier: [Boss.PreBoss], tags: [], class: 'Throwing', rarity: 'Blue'},//
 {name: 'Thorium Revolver', image: 'https://thoriummod.wiki.gg/images/Thorium_Revolver.png?89d2b6', tier: [Boss.PreBoss], tags: [], class: 'Ranged', rarity: 'Blue'},//
 {name: 'Thorium Spear', image: 'https://thoriummod.wiki.gg/images/Thorium_Spear.png?f3ed1f', tier: [Boss.PreBoss], tags: [], class: 'Melee', rarity: 'Blue'},//
 {name: 'Thorium Staff', image: 'https://thoriummod.wiki.gg/images/Thorium_Staff.png?35dc8d', tier: [Boss.PreBoss], tags: [], class: 'Magic', rarity: 'Blue'},//
 {name: 'Adamantite Ricochet', image: 'https://thoriummod.wiki.gg/images/Adamantite_Ricochet.png?bb3a0f', tier: [Boss.PreBoss, Boss.WallOfFlesh], tags: [CalamityTag.TitaniumAdamantite], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Angels End', image: 'https://thoriummod.wiki.gg/images/Angel%27s_End.png?a48004', tier: [Boss.MoonLord], tags: [], class: 'Throwing', rarity: 'Red'},//
 {name: 'Aphrodisiac Vial', image: 'https://thoriummod.wiki.gg/images/Aphrodisiac_Vial.png?400c71', tier: [Boss.WallOfFlesh], tags: [], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Axe Blade', image: 'https://thoriummod.wiki.gg/images/Axe_Blade.png?f2fdf9', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Crude Bat', image: 'https://thoriummod.wiki.gg/images/Crude_Bat.png?933481', tier: [Boss.PreBoss], tags: [], class: 'Throwing', rarity: 'White'},//
 {name: 'Blooming Shuriken', image: 'https://thoriummod.wiki.gg/images/Blooming_Shuriken.png?a2213d', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Throwing', rarity: 'Green'},//
 {name: 'Bolas', image: 'https://thoriummod.wiki.gg/images/Bolas.png?8ade2f', tier: [Boss.PreBoss], tags: [], class: 'Throwing', rarity: 'Orange'},//
 {name: 'Bud Bomb', image: 'https://thoriummod.wiki.gg/images/Bud_Bomb.png?81e0e1', tier: [Boss.Plantera], tags: [], class: 'Throwing', rarity: 'Lime'},//
 {name: 'Shade Shuriken', image: 'https://thoriummod.wiki.gg/images/Shade_Shuriken.png?68a58a', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Throwing', rarity: 'Yellow'},//
 {name: 'Cactus Needle', image: 'https://thoriummod.wiki.gg/images/Cactus_Needle.png?fbdff4', tier: [Boss.PreBoss], tags: [], class: 'Throwing', rarity: 'White'},//
 {name: 'Captains Poignard', image: 'https://thoriummod.wiki.gg/images/Captain%27s_Poignard.png?e653de', tier: [Boss.WallOfFlesh], tags: [], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Carnwennan', image: 'https://thoriummod.wiki.gg/images/Carnwennan.png?bd4929', tier: [Boss.MechBoss1], tags: [CalamityTag.Hollow], class: 'Throwing', rarity: 'Pink'},//
 {name: 'Chlorophyte Tomahawk', image: 'https://thoriummod.wiki.gg/images/Chlorophyte_Tomahawk.png?4ed41a', tier: [Boss.MechBossRest], tags: [], class: 'Throwing', rarity: 'Lime'},//
 {name: 'Clockwork Bomb', image: 'https://thoriummod.wiki.gg/images/Clockwork_Bomb.png?2a1068', tier: [Boss.MechBoss1], tags: [], class: 'Throwing', rarity: 'Pink'},//
 {name: 'Cobalt Throwing Spear', image: 'https://thoriummod.wiki.gg/images/Cobalt_Throwing_Spear.png?deef71', tier: [Boss.WallOfFlesh], tags: [], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Combustion Vial', image: 'https://thoriummod.wiki.gg/images/Combustion_Vial.png?383f14', tier: [Boss.WallOfFlesh], tags: [], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Corrosive Vial', image: 'https://thoriummod.wiki.gg/images/Corrosive_Vial.png?e0686e', tier: [Boss.WallOfFlesh], tags: [], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Corrupters Balloon', image: 'https://thoriummod.wiki.gg/images/Corrupter%27s_Balloon.png?d774c1', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Corruption, CalamityTag.MythrilOrichalcum], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Crimtane Tomahawk', image: 'https://thoriummod.wiki.gg/images/Crimtane_Tomahawk.png?2429bd', tier: [Boss.PreBoss], tags: [VanillaTag.Crimson], class: 'Throwing', rarity: 'Blue'},//
 {name: 'Crystal Balloon', image: 'https://thoriummod.wiki.gg/images/Crystal_Balloon.png?21a984', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Demonite Tomahawk', image: 'https://thoriummod.wiki.gg/images/Demonite_Tomahawk.png?efcd14', tier: [Boss.PreBoss], tags: [VanillaTag.Corruption], class: 'Throwing', rarity: 'Blue'},//
 {name: 'Dragon Fang', image: 'https://thoriummod.wiki.gg/images/Dragon_Fang.png?a9a055', tier: [Boss.Golem], tags: [], class: 'Throwing', rarity: 'Yellow'},//
 {name: 'Electro-Rebounder', image: 'https://thoriummod.wiki.gg/images/Electro-Rebounder.png?f18b03', tier: [Boss.Golem], tags: [], class: 'Throwing', rarity: 'Yellow'},//
 {name: 'Embowelment', image: 'https://thoriummod.wiki.gg/images/Embowelment.png?468fc9', tier: [Boss.EvilBoss, Boss.Skeletron], tags: [VanillaTag.Crimson], class: 'Throwing', rarity: 'Orange'},//
 {name: 'Enchanted Knife', image: 'https://thoriummod.wiki.gg/images/Enchanted_Knife.png?b101fa', tier: [Boss.PreBoss], tags: [], class: 'Throwing', rarity: 'Blue'},//
 {name: 'Eviscerating Claw', image: 'https://thoriummod.wiki.gg/images/Eviscerating_Claw.png?1fb44f', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Festering Balloon', image: 'https://thoriummod.wiki.gg/images/Festering_Balloon.png?1f3d6f', tier: [Boss.WallOfFlesh], tags: [VanillaTag.Crimson, CalamityTag.MythrilOrichalcum], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Fungal Popper', image: 'https://thoriummod.wiki.gg/images/Fungal_Popper.png?6da9fa', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Gas Container', image: 'https://thoriummod.wiki.gg/images/Gas_Container.png?db7c79', tier: [Boss.WallOfFlesh], tags: [], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Iron Tomahawk', image: 'https://thoriummod.wiki.gg/images/Iron_Tomahawk.png?648007', tier: [Boss.PreBoss], tags: [], class: 'Throwing', rarity: 'White'},//
 {name: 'Lead Tomahawk', image: 'https://thoriummod.wiki.gg/images/Lead_Tomahawk.png?174be2', tier: [Boss.PreBoss], tags: [], class: 'Throwing', rarity: 'White'},//
 {name: 'Lights Anguish', image: 'https://thoriummod.wiki.gg/images/Light%27s_Anguish.png?6d89af', tier: [Boss.EvilBoss, Boss.Skeletron], tags: [VanillaTag.Corruption], class: 'Throwing', rarity: 'Orange'},//
 {name: 'Lihzahrd Kunai', image: 'https://thoriummod.wiki.gg/images/Lihzahrd_Kunai.png?745dc9', tier: [Boss.Plantera], tags: [], class: 'Throwing', rarity: 'Yellow'},//
 {name: 'Playing Card', image: 'https://thoriummod.wiki.gg/images/Playing_Card.png?a95e3f', tier: [Boss.MechBossRest], tags: [], class: 'Throwing', rarity: 'Light Purple'},//
 {name: 'Meteorite Cluster Bomb', image: 'https://thoriummod.wiki.gg/images/Meteorite_Cluster_Bomb.png?c78600', tier: [Boss.EvilBoss], tags: [], class: 'Throwing', rarity: 'Blue'},//
 {name: 'Molten Knife', image: 'https://thoriummod.wiki.gg/images/Molten_Knife.png?d4d2ab', tier: [Boss.EvilBoss], tags: [CalamityTag.PreBossHellstone], class: 'Throwing', rarity: 'Orange'},//
 {name: 'Morel Grenade', image: 'https://thoriummod.wiki.gg/images/Morel_Grenade.png?f5d11f', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Naiads Shiv', image: 'https://thoriummod.wiki.gg/images/Naiad%27s_Shiv.png?f8b3d5', tier: [Boss.Skeletron], tags: [], class: 'Throwing', rarity: 'Green'},//
 {name: 'Nitrogen Vial', image: 'https://thoriummod.wiki.gg/images/Nitrogen_Vial.png?7b1164', tier: [Boss.WallOfFlesh], tags: [], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Obsidian Striker', image: 'https://thoriummod.wiki.gg/images/Obsidian_Striker.png?6ae237', tier: [Boss.PreBoss], tags: [], class: 'Throwing', rarity: 'Blue'},//
 {name: 'Palladium Throwing Spear', image: 'https://thoriummod.wiki.gg/images/Palladium_Throwing_Spear.png?dea307', tier: [Boss.WallOfFlesh], tags: [], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Pharaohs Slab', image: 'https://thoriummod.wiki.gg/images/Pharaoh%27s_Slab.png?b85519', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Throwing', rarity: 'Yellow'},//
 {name: 'Phase Chopper', image: 'https://thoriummod.wiki.gg/images/Phase_Chopper.png?3b0e21', tier: [Boss.Skeletron], tags: [], class: 'Throwing', rarity: 'Green'},//
 {name: 'Plasma Vial', image: 'https://thoriummod.wiki.gg/images/Plasma_Vial.png?f62b98', tier: [Boss.Plantera], tags: [], class: 'Throwing', rarity: 'Yellow'},//
 {name: 'Proximity Mine', image: 'https://thoriummod.wiki.gg/images/Proximity_Mine.png?142502', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Throwing', rarity: 'Yellow'},//
 {name: 'Rift Tearer', image: 'https://thoriummod.wiki.gg/images/Rift_Tearer.png?f0d609', tier: [ThoriumBoss.FallenBeholder, Boss.MechBoss1], tags: [CalamityTag.Hollow], class: 'Throwing', rarity: 'Light Purple'},//
 {name: 'Rocket Fist', image: 'https://thoriummod.wiki.gg/images/Rocket_Fist.png?681507', tier: [Boss.WallOfFlesh], tags: [CalamityTag.MythrilOrichalcum], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Pod Bomb', image: 'https://thoriummod.wiki.gg/images/Pod_Bomb.png?91149c', tier: [Boss.PreBoss], tags: [], class: 'Throwing', rarity: 'Orange'},//
 {name: 'Shade Kunai', image: 'https://thoriummod.wiki.gg/images/Shade_Kunai.png?8b3be0', tier: [ThoriumBoss.ThunderBird, Boss.Skeletron, Boss.Plantera], tags: [], class: 'Throwing', rarity: 'Yellow'},//
 {name: 'Shade Kusarigama', image: 'https://thoriummod.wiki.gg/images/Shade_Kusarigama.png?ee4f6c', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Throwing', rarity: 'Yellow'},//
 {name: 'Shadow-Purge Caltrop', image: 'https://thoriummod.wiki.gg/images/Shadow-Purge_Caltrop.png?5a5c54', tier: [Boss.WallOfFlesh], tags: [], class: 'Throwing', rarity: 'Pink'},//
 {name: 'Shadow-Tipped Javelin', image: 'https://thoriummod.wiki.gg/images/Shadow-Tipped_Javelin.png?f1cc29', tier: [Boss.WallOfFlesh], tags: [], class: 'Throwing', rarity: 'Pink'},//
 {name: 'Shinobi Slicer', image: 'https://thoriummod.wiki.gg/images/Shinobi_Slicer.png?fb8d06', tier: [Boss.KingSlime], tags: [], class: 'Throwing', rarity: 'Blue'},//
 {name: 'Soft Serve Sunderer', image: 'https://thoriummod.wiki.gg/images/Soft_Serve_Sunderer.png?8938e0', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Throwing', rarity: 'Yellow'},//
 {name: 'Soulslasher', image: 'https://thoriummod.wiki.gg/images/Soulslasher.png?24af60', tier: [ThoriumBoss.ThunderBird, Boss.Skeletron, Boss.Plantera], tags: [], class: 'Throwing', rarity: 'Yellow'},//
 {name: 'Spike Bomb', image: 'https://thoriummod.wiki.gg/images/Spike_Bomb.png?aaf825', tier: [Boss.PreBoss], tags: [], class: 'Throwing', rarity: 'Green'},//
 {name: 'Spiky Caltrop', image: 'https://thoriummod.wiki.gg/images/Spiky_Caltrop.png?9db2ea', tier: [Boss.Skeletron], tags: [], class: 'Throwing', rarity: 'Green'},//
 {name: 'Stalkers Snippers', image: 'https://thoriummod.wiki.gg/images/Stalker%27s_Snippers.png?4858ab', tier: [Boss.MechBossRest], tags: [], class: 'Throwing', rarity: 'Light Purple'},//
 {name: 'Star Eater', image: 'https://thoriummod.wiki.gg/images/Star_Eater.png?3afef5', tier: [Boss.Cultist], tags: [], class: 'Throwing', rarity: 'Red'},//
 {name: 'Stone Throwing Spear', image: 'https://thoriummod.wiki.gg/images/Stone_Throwing_Spear.png?fd421a', tier: [Boss.PreBoss], tags: [], class: 'Throwing', rarity: 'White'},//
 {name: 'Swamp Rot', image: 'https://thoriummod.wiki.gg/images/Swamp_Rot.png?32f36f', tier: [Boss.MechBoss1], tags: [], class: 'Throwing', rarity: 'Pink'},//
 {name: 'Terra Knife', image: 'https://thoriummod.wiki.gg/images/Terra_Knife.png?8f8300', tier: [Boss.Plantera], tags: [], class: 'Throwing', rarity: 'Yellow'},//
 {name: 'Titanium Ricochet', image: 'https://thoriummod.wiki.gg/images/Titanium_Ricochet.png?f0e077', tier: [Boss.WallOfFlesh], tags: [CalamityTag.TitaniumAdamantite], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'True Carnwennan', image: 'https://thoriummod.wiki.gg/images/True_Carnwennan.png?5ba331', tier: [Boss.Plantera], tags: [], class: 'Throwing', rarity: 'Yellow'},//
 {name: 'True Embowelment', image: 'https://thoriummod.wiki.gg/images/True_Embowelment.png?5ef149', tier: [Boss.Plantera], tags: [VanillaTag.Crimson], class: 'Throwing', rarity: 'Yellow'},//
 {name: 'True Lights Anguish', image: 'https://thoriummod.wiki.gg/images/True_Light%27s_Anguish.png?c5bf0d', tier: [Boss.Plantera], tags: [VanillaTag.Corruption], class: 'Throwing', rarity: 'Yellow'},//
 {name: 'Venom Kunai', image: 'https://thoriummod.wiki.gg/images/Venom_Kunai.png?5bef3a', tier: [ThoriumBoss.ThunderBird, Boss.WallOfFlesh], tags: [], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Volt Hatchet', image: 'https://thoriummod.wiki.gg/images/Volt_Hatchet.png?65c8d1', tier: [Boss.WallOfFlesh], tags: [], class: 'Throwing', rarity: 'Light Red'},//
 {name: 'Wack Wrench', image: 'https://thoriummod.wiki.gg/images/Wack_Wrench.png?34833e', tier: [Boss.Skeletron], tags: [], class: 'Throwing', rarity: 'Green'},//
 {name: 'White Dwarf Cutter', image: 'https://thoriummod.wiki.gg/images/White_Dwarf_Cutter.png?ba41b7', tier: [Boss.Cultist], tags: [], class: 'Throwing', rarity: 'Red'},//
 {name: 'Witchblade', image: 'https://thoriummod.wiki.gg/images/Witchblade.png?30482a', tier: [Boss.Skeletron, Boss.Plantera], tags: [], class: 'Throwing', rarity: 'Yellow'},//
 {name: 'Titan Boomerang', image: 'https://thoriummod.wiki.gg/images/Titan_Boomerang.png?948532', tier: [Boss.MechBossRest], tags: [], class: 'Melee', rarity: 'Light Purple'},//
 {name: 'Titan Bow', image: 'https://thoriummod.wiki.gg/images/Titan_Bow.png?c21343', tier: [Boss.MechBossRest], tags: [], class: 'Ranged', rarity: 'Light Purple'},//
 {name: 'Titan Javelin', image: 'https://thoriummod.wiki.gg/images/Titan_Javelin.png?be45ca', tier: [Boss.MechBossRest], tags: [], class: 'Throwing', rarity: 'Light Purple'},//
 {name: 'Titan Scythe', image: 'https://thoriummod.wiki.gg/images/Titan_Scythe.png?faf9a9', tier: [Boss.MechBossRest], tags: [], class: 'Radiant', rarity: 'Light Purple'},//
 {name: 'Titan Sword', image: 'https://thoriummod.wiki.gg/images/Titan_Sword.png?90d285', tier: [Boss.MechBossRest], tags: [], class: 'Melee', rarity: 'Light Purple'},//
 {name: 'Cursed Hammer', image: 'https://thoriummod.wiki.gg/images/Cursed_Hammer_%28weapon%29.png?7c55b7', tier: [Boss.EyeOfCthulhu, Boss.WallOfFlesh], tags: [], class: 'Radiant', rarity: 'Light Red'},//
 {name: 'God Killer', image: 'https://thoriummod.wiki.gg/images/God_Killer.png?7959d3', tier: [Boss.EyeOfCthulhu, Boss.Plantera], tags: [], class: 'Magic', rarity: 'Yellow'},//
 {name: 'Icy Gaze', image: 'https://thoriummod.wiki.gg/images/Icy_Gaze.png?5adf8b', tier: [Boss.EyeOfCthulhu, Boss.WallOfFlesh], tags: [], class: 'Magic', rarity: 'Pink'},//
 {name: 'Rosy Slime Staff', image: 'https://thoriummod.wiki.gg/images/Rosy_Slime_Staff.png?fa93b5', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Summon', rarity: 'Blue'},//
 {name: 'The Black Blade', image: 'https://thoriummod.wiki.gg/images/The_Black_Blade.png?583f85', tier: [Boss.EyeOfCthulhu, Boss.Plantera], tags: [], class: 'Melee', rarity: 'Yellow'},//
 {name: 'The Black Bow', image: 'https://thoriummod.wiki.gg/images/The_Black_Bow.png?c4a703', tier: [Boss.EyeOfCthulhu, Boss.Plantera], tags: [], class: 'Ranged', rarity: 'Yellow'},//
 {name: 'The Black Cane', image: 'https://thoriummod.wiki.gg/images/The_Black_Cane.png?76f954', tier: [Boss.EyeOfCthulhu, Boss.Plantera], tags: [], class: 'Summon', rarity: 'Yellow'},//
 {name: 'The Black Dagger', image: 'https://thoriummod.wiki.gg/images/The_Black_Dagger.png?fc4546', tier: [Boss.EyeOfCthulhu, Boss.Plantera], tags: [], class: 'Throwing', rarity: 'Yellow'},//
 {name: 'The Black Otamatone', image: 'https://thoriummod.wiki.gg/images/The_Black_Otamatone.png?de5424', tier: [Boss.EyeOfCthulhu, Boss.Plantera], tags: [], class: 'Symphonic', rarity: 'Yellow'},//
 {name: 'The Black Scythe', image: 'https://thoriummod.wiki.gg/images/The_Black_Scythe.png?94f8d1', tier: [Boss.EyeOfCthulhu, Boss.Plantera], tags: [], class: 'Radiant', rarity: 'Yellow'},//
 {name: 'The Black Staff', image: 'https://thoriummod.wiki.gg/images/The_Black_Staff.png?506e5f', tier: [Boss.EyeOfCthulhu, Boss.Plantera], tags: [], class: 'Magic', rarity: 'Yellow'},//
 {name: 'Totem Caller', image: 'https://thoriummod.wiki.gg/images/Totem_Caller.png?1cebf9', tier: [Boss.EyeOfCthulhu, Boss.EvilBoss], tags: [], class: 'Summon', rarity: 'Green'},//
 {name: 'Trackers Skinning Blade', image: 'https://thoriummod.wiki.gg/images/Tracker%27s_Skinning_Blade.png?3f64e9', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Melee', rarity: 'Blue'},//
 {name: 'Whip', image: 'https://thoriummod.wiki.gg/images/Whip.png?52c501', tier: [Boss.EyeOfCthulhu], tags: [], class: 'Melee', rarity: 'Green'},//
 {name: 'Valadium Throwing Axe', image: 'https://thoriummod.wiki.gg/images/Valadium_Throwing_Axe.png?2c6989', tier: [Boss.WallOfFlesh, ThoriumBoss.FallenBeholder], tags: [CalamityTag.MythrilOrichalcum], class: 'Throwing', rarity: 'Pink'},//
 {name: 'Valadium Bow', image: 'https://thoriummod.wiki.gg/images/Valadium_Bow.png?e10f60', tier: [Boss.WallOfFlesh, ThoriumBoss.FallenBeholder], tags: [CalamityTag.MythrilOrichalcum], class: 'Ranged', rarity: 'Pink'},//
 {name: 'Valadium Foe Blaster', image: 'https://thoriummod.wiki.gg/images/Valadium_Foe_Blaster.png?9cbb8d', tier: [Boss.WallOfFlesh, ThoriumBoss.FallenBeholder], tags: [CalamityTag.MythrilOrichalcum], class: 'Ranged', rarity: 'Pink'},//
 {name: 'Valadium Slicer', image: 'https://thoriummod.wiki.gg/images/Valadium_Slicer.png?9ad759', tier: [Boss.WallOfFlesh, ThoriumBoss.FallenBeholder], tags: [CalamityTag.MythrilOrichalcum], class: 'Melee', rarity: 'Pink'},//
 {name: 'Valadium Spear', image: 'https://thoriummod.wiki.gg/images/Valadium_Spear.png?b9f55a', tier: [Boss.WallOfFlesh, ThoriumBoss.FallenBeholder], tags: [CalamityTag.MythrilOrichalcum], class: 'Melee', rarity: 'Pink'},//
 {name: 'Valadium Staff', image: 'https://thoriummod.wiki.gg/images/Valadium_Staff.png?e27764', tier: [Boss.WallOfFlesh, ThoriumBoss.FallenBeholder], tags: [CalamityTag.MythrilOrichalcum], class: 'Magic', rarity: 'Pink'},//
]