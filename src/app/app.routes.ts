import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout.component';

export const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: 'mage',
        loadComponent: () => import('./pages/mage/mage.page').then( m => m.MagePage)
      },
      {
        path: 'market',
        loadComponent: () => import('./pages/market/market.page').then( m => m.MarketPage)
      },
      {
        path: 'nemesis',
        loadComponent: () => import('./pages/nemesis/nemesis.page').then( m => m.NemesisPage)
      },
      {
        path: 'turn-order',
        loadComponent: () => import('./pages/turn-order/turn-order.page').then( m => m.TurnOrderPage)
      },
    ]
  },
];
