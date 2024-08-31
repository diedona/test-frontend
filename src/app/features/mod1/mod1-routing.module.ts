import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloMod1Component } from './pages/hello-mod1/hello-mod1.component';

const routes: Routes = [
  {
    path: '',
    component: HelloMod1Component,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mod1RoutingModule {}
