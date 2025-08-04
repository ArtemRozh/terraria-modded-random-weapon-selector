using System.IO;
using System.Collections.Generic;
using Terraria;
using Terraria.ID;
using Terraria.ModLoader;

namespace GatherWeaponData
{
    partial class WeaponScanner : ModCommand
    {
        public override CommandType Type => CommandType.Chat;
        public override string Command => GatherDataConfig.weaponListerCommand;
        public override string Description => GatherDataConfig.listerCommandDescription;

        // test
        public int totalSaved = 0;
        public int badApples = 0;

        public override void Action(CommandCaller caller, string input, string[] args)
        {
            Main.NewText("Running weapon scan...");
            totalSaved = 0;
            badApples = 0;

            List<Item> allWeapons = new List<Item>();

            for (int i = 0; i < ItemLoader.ItemCount; ++i)
            {
                Item item = new Item();
                item.SetDefaults(i);

                if (FilterWeapons(item)) continue;

                allWeapons.Add(item);
            }

            Main.NewText("All weapons scanned");

            SaveGatheredToFile(GatherDataConfig.weaponExportFolder, GatherDataConfig.weaponExportFileName,
                        allWeapons);

            if(OrganizeDataConfig.toGatherImages)
                GatherSprites(GatherDataConfig.weaponExportFolder,
                        GatherDataConfig.weaponSpriteExportFolder,
                        GatherDataConfig.vanillaFolderName,
                        allWeapons);

            Main.NewText($"Total images saved: {totalSaved}. Failed: {badApples}. Good ones: {totalSaved - badApples}");

            string exportPath = Path.Combine(Main.SavePath, GatherDataConfig.weaponExportFolder);
            System.Diagnostics.Process.Start("explorer.exe", exportPath);
        }

        public bool FilterWeapons(Item item)
        {
            // Ammo, air, blocks
            if (item.damage == -1 || item.IsAir || item.ammo != AmmoID.None) return true;

            // Tools
            if (item.axe != 0 || item.pick != 0 || item.hammer != 0) return true;

            // random shit filter
            if (item.DamageType == DamageClass.Default) return true;

            // pet filter
            if (Main.vanityPet[item.buffType] || Main.lightPet[item.buffType]) return true;

            // hook filer
            if (GatherDataConfig.existingVanillaHooks.Contains(item.type)) return true;

            // Final ignore list filter
            if (GatherDataConfig.itemIgnoreList.Contains(item.type)) return true;

            return false;
        }

        public static string GetModifiedItemName(Item item)
        {
            if (GatherDataConfig.itemModifyDict.ContainsKey(item.type))
                return GatherDataConfig.itemModifyDict[item.type];

            return item.Name;
        }
    }
}
