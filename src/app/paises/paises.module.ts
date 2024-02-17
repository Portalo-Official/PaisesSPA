import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByPaisPageComponent } from './pages/by-pais-page/by-pais-page.component';
import { PaisPageComponent } from './pages/pais-page/pais-page.component';
import { PaisesRountingModule } from './paises-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PaisesTablaComponent } from './components/paises-tabla/paises-tabla.component';




@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByPaisPageComponent,
    ByRegionPageComponent,
    PaisPageComponent,
    PaisesTablaComponent
  ],
  imports: [
    CommonModule,
    PaisesRountingModule,
    SharedModule,
  ]
})
export class PaisesModule { }
