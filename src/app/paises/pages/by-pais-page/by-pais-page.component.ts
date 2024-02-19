import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { PaisServiceService } from '../../services/pais-service.service';

@Component({
  selector: 'app-by-pais-page',
  templateUrl: './by-pais-page.component.html',
  styles: ``
})
export class ByPaisPageComponent {

  public paisesList : Array<Pais> = [];

  constructor( private paisService : PaisServiceService){}

  public getPaisesByPais(pais : string): void{
    this.paisService.getPaisByPais(pais)
                    .subscribe(resp => this.paisesList = resp);
  }

}
