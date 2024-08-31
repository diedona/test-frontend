import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloMod2Component } from './pages/hello-mod2/hello-mod2.component';

const routes: Routes = [
  { 
    path: '', 
    component: HelloMod2Component 
  },
  { 
    path: '**', 
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mod2RoutingModule {}
