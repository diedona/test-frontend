import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod2RoutingModule } from './mod2-routing.module';
import { HelloMod2Component } from './pages/hello-mod2/hello-mod2.component';


@NgModule({
  declarations: [
    HelloMod2Component
  ],
  imports: [
    CommonModule,
    Mod2RoutingModule
  ]
})
export class Mod2Module { }
