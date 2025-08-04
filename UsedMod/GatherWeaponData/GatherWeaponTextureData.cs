using System.IO;
using System.Collections.Generic;
using Terraria;
using Terraria.ModLoader;
using Microsoft.Xna.Framework.Graphics;
using Terraria.GameContent;
using System.Text.RegularExpressions;


namespace GatherWeaponData
{
    partial class WeaponScanner : ModCommand
    {
        public void GatherSprites(string directoryname, string imageDirectoryName, string targetDirectoryName, List<Item> items)
        {
            string folderPath = Path.Combine(Main.SavePath, directoryname);
            string imageFolderPath = Path.Combine(folderPath, imageDirectoryName);
            string targetFolderPath = Path.Combine(imageFolderPath, targetDirectoryName);

            Directory.CreateDirectory(folderPath);
            Directory.CreateDirectory(imageFolderPath);
            Directory.CreateDirectory(targetFolderPath);

            ClearFolder(imageFolderPath);

            foreach (Item item in items)
            {
                string fileName = DetermineModFolder(item, imageDirectoryName);

                if (fileName == OrganizeDataConfig.defaultImage) continue;

                Main.instance.LoadItem(item.type);
                Texture2D texture = TextureAssets.Item[item.type].Value;

                SaveTextureAsPNG(texture, fileName);
            }

            Main.NewText("Weapon texture export done");
        }

        public void SaveTextureAsPNG(Texture2D texture, string path)
        {
            using (FileStream stream = new FileStream(path, FileMode.Create))
            {
                texture.SaveAsPng(stream, texture.Width, texture.Height);

                if (texture.Width == 1 && texture.Height == 1) badApples++;
                totalSaved++;
            }
        }

        public string DetermineModFolder(Item item, string imageFolderPath)
        {
            string modName = GetModName(item);

            string trimmName = GetTrimmFileName(item);

            if (!OrganizeDataConfig.toGatherModdedImages && modName != GatherDataConfig.vanillaFolderName)
                return OrganizeDataConfig.defaultImage;

            string folderPath = Path.Combine(Main.SavePath, GatherDataConfig.weaponExportFolder);
            string imageDirectoryName = Path.Combine(folderPath, imageFolderPath);

            string modFolderPath = Path.Combine(imageDirectoryName, modName);
            Directory.CreateDirectory(modFolderPath);

            return Path.Combine(modFolderPath, $"{trimmName}.png");
        }

        public string GetTrimmFileName(Item item)
        {
            string pattern = "[\\s\\W]";
            string itemName = GetModifiedItemName(item);

            return Regex.Replace(itemName, pattern, "");
        }
    }
}