import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// el siguiente modulo nos permite proteger el acceso a las rutas mientras no se tenga los permisos suficientes para acceder a ellas.
import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']); 
const redirectLoggedInToHome = () => redirectLoggedInTo(['/home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectLoggedInToHome },
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectLoggedInToHome },
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'trabajo',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./pages/trabajo/trabajo.module').then( m => m.TrabajoPageModule)
  },
  {
    path: 'stock',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./pages/stock/stock.module').then( m => m.StockPageModule)
  },
  {
    path: 'proveedor',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe : redirectUnauthorizedToLogin },
    loadChildren: () => import('./pages/proveedor/proveedor.module').then( m => m.ProveedorPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
