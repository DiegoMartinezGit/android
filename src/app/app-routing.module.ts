import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    children:[{
      path:':cat_id',pathMatch: 'full',
      loadChildren:() => import('./productos/productos.module').then(m=>m.ProductosPageModule)
    }
    ],
    
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'producto-detail',
    children:[{
      path:':prod_id',pathMatch: 'full',
      loadChildren: () => import('./producto-detail/producto-detail.module').then( m => m.ProductoDetailPageModule)
    }
  ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
