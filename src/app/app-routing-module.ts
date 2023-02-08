import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'listar',
    loadChildren: () => import('./pages/listar/listar.module').then(m => m.ListarModule)
  },
  {
    path: 'cliente/:id',
    loadChildren: () => import('./pages/cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: 'cadastrar/cliente',
    loadChildren: () => import('./pages/cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: '404',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  { path: '', redirectTo: '/listar', pathMatch: 'full' },
  { path: '**', redirectTo: '/listar', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }