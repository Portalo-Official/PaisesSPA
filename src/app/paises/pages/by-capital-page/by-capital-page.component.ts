import { Type } from '@angular/compiler';
import { Component } from '@angular/core';
import { PaisServiceService } from '../../services/pais-service.service';
import { Pais } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public _paisesList : Array<Pais> = [];

  constructor( private paisService: PaisServiceService){}
  searchByCapital( capital : string): void {
    // console.log({capital});
    this.paisService.getPaisByCapital(capital)
                    .subscribe( res => {
                      this.paisesList= res
                    });;

  }

  private set paisesList( paises: Array<Pais>){
    this._paisesList = paises;
  }



}

