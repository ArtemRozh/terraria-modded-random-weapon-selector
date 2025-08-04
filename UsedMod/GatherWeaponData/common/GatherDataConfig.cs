using System.Collections.Generic;
using Terraria;
using Terraria.ID;

namespace GatherWeaponData
{
    public static class GatherDataConfig
    {
        // command
        public static string weaponListerCommand = "listweapons";
        public static string listerCommandDescription = "Lists weapons in the console";

        // files n folders
        public static string weaponExportFolder = "GatherWeaponData";
        public static string weaponExportFileName = "Weapons";

        public static bool toExportImages = true;
        public static string weaponSpriteExportFolder = "WeaponImages";
        public static string vanillaFolderName = "Vanilla";

        // Misc
        public static string cababityMod = "CalamityMod";

        // Hardcoded garbo
        public static List<int> existingVanillaHooks = new List<int>{
            ItemID.GrapplingHook,
            ItemID.AmethystHook,
            ItemID.DiamondHook,
            ItemID.EmeraldHook,
            ItemID.RubyHook,
            ItemID.SapphireHook,
            ItemID.TopazHook,
            ItemID.AmberHook,
            ItemID.SquirrelHook,
            ItemID.SkeletronHand,
            ItemID.SlimeHook,
            ItemID.FishHook,
            ItemID.IvyWhip,
            ItemID.BatHook,
            ItemID.CandyCaneHook,
            ItemID.WebSlinger,
            ItemID.DualHook,
            ItemID.QueenSlimeHook,
            ItemID.ThornHook,
            ItemID.IlluminantHook,
            ItemID.WormHook,
            ItemID.TendonHook,
            ItemID.AntiGravityHook,
            ItemID.ChristmasHook,
            ItemID.LunarHook,
            ItemID.StaticHook,
            ItemID.SpookyHook
        };

        public static List<int> itemIgnoreList = new List<int>
        {
            ItemID.PaperAirplaneA,
            ItemID.PaperAirplaneB,
            ItemID.ConfettiGun,
            ItemID.TragicUmbrella,
            ItemID.StaffofRegrowth,
            ItemID.Sickle,

            ItemID.RedPhaseblade,
            ItemID.GreenPhaseblade,
            ItemID.WhitePhaseblade,
            ItemID.OrangePhaseblade,
            ItemID.YellowPhaseblade,
            ItemID.PurplePhaseblade,

            ItemID.RedPhasesaber,
            ItemID.GreenPhasesaber,
            ItemID.WhitePhasesaber,
            ItemID.OrangePhasesaber,
            ItemID.YellowPhasesaber,
            ItemID.PurplePhasesaber,

            ItemID.StickyGrenade,
            ItemID.BouncyGrenade,
            ItemID.Grenade
        };

        public static Dictionary<int, string> itemModifyDict = new Dictionary<int, string>
        {
            {ItemID.PartyGirlGrenade, "Grenade (Any)"},
            {ItemID.BluePhasesaber, "Phasesaber (Any)"},
            {ItemID.BluePhaseblade, "Phaseblade (Any)"},
        };
    }
}
