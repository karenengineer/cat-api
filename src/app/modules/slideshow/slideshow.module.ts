import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {DashboardComponent} from './dashboard/dashboard.component';
import {SlideshowRoutingModule} from './slideshow-routing.module';
import {ApiService} from './services/api.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SlideshowRoutingModule
  ],
  providers: [ApiService]
})

export class SlideshowModule {
}
