import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod1RoutingModule } from './mod1-routing.module';
import { HelloMod1Component } from './pages/hello-mod1/hello-mod1.component';


@NgModule({
  declarations: [
    HelloMod1Component
  ],
  imports: [
    CommonModule,
    Mod1RoutingModule
  ]
})
export class Mod1Module { }
