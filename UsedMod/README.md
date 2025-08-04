Source code of the mod used and its tmod. Too lazy to create a separate repository just for a small thing like this.  
But it's also important to this project, so it's here.  
How to use:
1. Load all the mods you need
2. Create a character and join any world
3. Use /listweapons command in chat (or any other command set in the code)
4. It would gather all data into a format that is set in one of the config files, including weapon sprites

Note:
It's not entirely accurate, and doesn't detect vanilla hooks as they work kinda strangely, so when they add more hooks, it needs to be hardcoded to remove them. Fine with modded. Also, it would ignore any weapon that is also a tool, like Feller of Evergreens crafting tree in Calamity, so it needs to be added manually too, or like Suistrume from the Stars Above mod, which is purely a supporting weapon, but passes all conditions to be considered a normal weapon in my code.
