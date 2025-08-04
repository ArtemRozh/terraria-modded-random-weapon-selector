using System.Collections.Generic;
using Terraria;
using Terraria.ID;

namespace GatherWeaponData
{
    public static class OrganizeDataConfig
    {
        public static string defaultVanillaTier = "Boss.PreBoss";
        public static string defaultCalamityTier = "Calamityboss.DesertScourge";
        public static string defaultStarsAbovetier = "StarsAboveBoss.Vagrant";
        public static Dictionary<string, string> modDefaultTiers = new Dictionary<string, string>()
        {
            {GatherDataConfig.vanillaFolderName, defaultVanillaTier},
            {"CalamityMod", defaultCalamityTier},
            {"StarsAbove", defaultStarsAbovetier},
        };

        public static string replaceSeq = "REPLACE";
        public static string imageExtension = ".png";
        public static string stringFormat = $"\t{{name: '{replaceSeq}', image: 'weapon-images/{replaceSeq}/{replaceSeq}{imageExtension}', "
                                        + $" tier: {replaceSeq}}},";

        public static string defaultImage = "Default";
        public static bool toGatherImages = false;
        public static bool toGatherModdedImages = true;

        public static string GetTierOrDefault(string modName)
        {
            if (modDefaultTiers.ContainsKey(modName))
                return modDefaultTiers[modName];

            return modDefaultTiers[GatherDataConfig.vanillaFolderName]; 
        }
    }
}