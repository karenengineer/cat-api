import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const slideshowRoutes: Routes = [
  {
    path: '', component: DashboardComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(slideshowRoutes)],
  exports: [RouterModule]
})

export class SlideshowRoutingModule {
}
