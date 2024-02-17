import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByPaisPageComponent } from './pages/by-pais-page/by-pais-page.component';
import { PaisPageComponent } from './pages/pais-page/pais-page.component';

const routes: Routes=[
  {
    path: 'by-capital',
    component: ByCapitalPageComponent
  },
  {
    path: 'by-region',
    component: ByRegionPageComponent
  },
  {
    path: 'by-pais',
    component: ByPaisPageComponent
  },
  {
    path: 'by/:id',
    component: PaisPageComponent
  },
  {
    path: '**',
    redirectTo: 'by-pais'
  },

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRountingModule { }

