import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'slideshow',
    pathMatch: 'full'
  },
  {
    path: 'slideshow',
    loadChildren: () => import('./modules/slideshow/slideshow.module').then((m) => m.SlideshowModule)
  },
  {path: '**', redirectTo: 'slideshow'}

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
