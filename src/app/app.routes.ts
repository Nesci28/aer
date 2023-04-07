import { Routes } from "@angular/router";

import { LayoutComponent } from "./layout.component";

export const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "nemesis",
      },
      {
        path: "mage",
        loadComponent: () => {
          return import("./pages/mage/mage.page").then((m) => {
            return m.MagePage;
          });
        },
      },
      {
        path: "market",
        loadComponent: () => {
          return import("./pages/market/market.page").then((m) => {
            return m.MarketPage;
          });
        },
      },
      {
        path: "nemesis",
        loadComponent: () => {
          return import("./pages/nemesis/nemesis.page").then((m) => {
            return m.NemesisPage;
          });
        },
      },
      {
        path: "turn-order",
        loadComponent: () => {
          return import("./pages/turn-order/turn-order.page").then((m) => {
            return m.TurnOrderPage;
          });
        },
      },
    ],
  },
];
