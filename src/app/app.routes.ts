import { Routes } from '@angular/router';
import { WeaponSelectorComponent } from './weapon-selector/weapon-selector.component';
import { WeaponConfigComponent } from './weapon-config/weapon-config.component';
import { ProgressionChangerComponent } from './progression-changer/progression-changer.component';
import { WebsiteConfigComponent } from './website-config/website-config.component';
import { routeShortcuts } from './data/route/routes';

export const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: routeShortcuts.Main},
    {path: routeShortcuts.Main, component: WeaponSelectorComponent},
    {path: routeShortcuts.Config, component: WeaponConfigComponent},
    {path: routeShortcuts.Prog, component: ProgressionChangerComponent},
    {path: routeShortcuts.Webconfig, component: WebsiteConfigComponent},
];

