using System.IO;
using System.Collections.Generic;
using Terraria;
using Terraria.ModLoader;
using System.Text.RegularExpressions;
using System;

namespace GatherWeaponData
{
    partial class WeaponScanner : ModCommand
    {
        public void SaveGatheredToFile(string directoryname, string fileName, List<Item> items)
        {
            string folderPath = Path.Combine(Main.SavePath, directoryname);

            Directory.CreateDirectory(folderPath);

            Dictionary<string, List<Item>> organizedItems = OrganizeWeaponsToMods(items, folderPath);
            SaveToFile(organizedItems);

            Main.NewText("Weapon data written to file");
        }

        public void SaveToFile(Dictionary<string, List<Item>> organized)
        {
            foreach (string path in organized.Keys)
            {
                using (TextWriter textWriter = new StreamWriter(path))
                {
                    foreach (Item item in organized[path])
                    {
                        string modifiedName = GetModifiedItemName(item);
                        string formatName = FormatItemName(item, modifiedName);
                        textWriter.WriteLine(formatName);
                    }
                }
            }
        }

        public Dictionary<string, List<Item>> OrganizeWeaponsToMods(List<Item> items, string folderPath)
        {
            Dictionary<string, List<Item>> organized = new Dictionary<string, List<Item>>();

            foreach (Item item in items)
            {
                string modName = DetermineFileName(item, folderPath);
                if (!organized.ContainsKey(modName))
                {
                    organized[modName] = new List<Item>();
                }

                organized[modName].Add(item);
            }

            return organized;
        }

        public string DetermineFileName(Item item, string folderPath)
        {
            string modName = GetModName(item);

            string fileName = GatherDataConfig.weaponExportFileName + "-" + modName + ".txt";

            return Path.Combine(folderPath, fileName);
        }

        public string FormatItemName(Item item, string itemName)
        {
            string[] values = {
                    GetSafeItemName(itemName),
                    GetModName(item),
                    GetProperFileName(item),
                    OrganizeDataConfig.GetTierOrDefault(GetModName(item))};

            string result = OrganizeDataConfig.stringFormat;

            foreach (string value in values)
            {
                result = ReplaceFirst(result, OrganizeDataConfig.replaceSeq, value);
            }

            return result;
        }

        public string GetSafeItemName(string name)
        {
            return name.Replace("'", "").Replace("\"", "");
        }

        public string ReplaceFirst(string text, string search, string replace)
        {
            int pos = text.IndexOf(search);
            if (pos < 0)
            {
                return text;
            }

            return text.Substring(0, pos) + replace + text.Substring(pos + search.Length);
        }

        public string GetModName(Item item)
        {
            return item.ModItem?.Mod.Name ?? GatherDataConfig.vanillaFolderName;
        }

        public string GetProperFileName(Item item)
        {
            if (OrganizeDataConfig.toGatherModdedImages || GetModName(item) == GatherDataConfig.vanillaFolderName)
            {
                return GetTrimmFileName(item);
            }

            return OrganizeDataConfig.defaultImage;
        }

        public void ClearFolder(string folderPath)
        {
            if (Directory.Exists(folderPath))
            {
                foreach (string file in Directory.GetFiles(folderPath))
                {
                    try
                    {
                        File.Delete(file);
                    }
                    catch { }
                }
            }
        }
    }
}