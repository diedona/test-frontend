import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod1RoutingModule } from './mod1-routing.module';
import { Mod1Component } from './mod1.component';
import { HelloMod1Component } from './pages/hello-mod1/hello-mod1.component';


@NgModule({
  declarations: [
    Mod1Component,
    HelloMod1Component
  ],
  imports: [
    CommonModule,
    Mod1RoutingModule
  ]
})
export class Mod1Module { }
