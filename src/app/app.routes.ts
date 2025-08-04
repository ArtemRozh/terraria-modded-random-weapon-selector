import { Routes } from '@angular/router';
import { WeaponSelectorComponent } from './weapon-selector/weapon-selector.component';
import { WeaponConfigComponent } from './weapon-config/weapon-config.component';

export const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: "main"},
    {path: "main", component: WeaponSelectorComponent},
    {path: "config", component: WeaponConfigComponent},
];

