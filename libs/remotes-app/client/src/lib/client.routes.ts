import { Route } from '@angular/router';
import { DevelopingGuard, HasLoggedInGuard, UserGuard } from '@cwp/core/guard';
import { HomeComponent } from './modules/home/home.component';

export const remotesAppClientRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'page',
    canActivate: [HasLoggedInGuard, UserGuard],
    loadChildren: () =>
      import('./modules/page-setting/page-setting.module').then((m) => m.ClientPageSettingModule),
  },
  {
    path: 'account',
    canActivate: [HasLoggedInGuard, UserGuard],
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.ClientAccountModule),
  },
  {
    path: 'marketplace',
    canActivate: [HasLoggedInGuard, UserGuard],
    loadChildren: () =>
      import('./modules/marketplace/marketplace.module').then(
        (m) => m.ClientMarketplaceModule
      ),
  },
  {
    path: 'community',
    canActivate: [DevelopingGuard],
    loadChildren: () => import('./modules/community/community.module').then(m => m.ClientCommunityModule)
  },
  {
    path: 'customer-support',
    canActivate: [HasLoggedInGuard, UserGuard],
    loadChildren: () =>
      import('./modules/customer-support/customer-support.module').then(
        (m) => m.ClientCustomerSupportModule
      ),
  },
];