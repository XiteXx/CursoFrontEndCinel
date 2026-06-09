import { DataTypes } from './pages/ebook/data-types/data-types';
import { Lacos } from './pages/lacos/lacos';
import { Welcome } from './pages/welcome/welcome';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: "", redirectTo: "welcome", pathMatch: 'full'},
    {path: "ebook/welcome", loadComponent: () => import ("./pages/welcome/welcome").then(leo => leo.Welcome)},
    {path: "ebook/lacos", component: Lacos},
    {path: 'ebook/tipo-de-dados', loadComponent:() => import("./pages/ebook/data-types/data-types").then(leo => leo.DataTypes)},
    {path: 'ebook/variaveis', loadComponent:() => import("./pages/ebook/variaveis/variaveis").then(leo => leo.Variaveis)},
    {path: 'ebook/operadores', loadComponent:() => import("./pages/ebook/operadores/operadores").then(leo => leo.Operadores)},
    {path: 'ebook/control-structure', loadComponent:() => import("./pages/ebook/control-structure/control-structure").then(leo => leo.ControlStructure)},
    /** Ultima rota */
    {path: '**', loadComponent: () => import('./pages/welcome/welcome'). then(c => c.Welcome)  },
];
