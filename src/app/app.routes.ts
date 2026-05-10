import { Routes } from '@angular/router';
import { Firearm } from './components/firearm/firearm';
import { Homepage } from './components/homepage/homepage';
import { Inventory } from './components/inventory/inventory';
import { LoadData } from './components/load-data/load-data';
import { Recipe } from './components/recipe/recipe';

export const routes: Routes = [
  {
    path: '',
    component: Homepage
  },
  {
    path: 'load-data',
    component: LoadData
  },
  {
    path: 'recipe',
    component: Recipe
  },
  {
    path: 'firearm',
    component: Firearm
  },
  {
    path: 'inventory',
    component: Inventory
  },
  {
    path:'*',
    component: Homepage
  },
  {
    path: '**',
    component: Homepage
  }
];
