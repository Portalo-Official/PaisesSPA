import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { PaisServiceService } from '../../services/pais-service.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public paisList: Array<Pais> =[];

  constructor( private paisService: PaisServiceService){}

  public searchPaisByRegion(region : string){
    this.paisService.getPaisByRegion(region)
                    .subscribe(resp=> this.paisList = resp);
  }

}
