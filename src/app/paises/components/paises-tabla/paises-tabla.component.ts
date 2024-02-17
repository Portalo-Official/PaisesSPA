import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';

@Component({
  selector: 'paises-paises-tabla',
  templateUrl: './paises-tabla.component.html',
  styles: ``
})
export class PaisesTablaComponent {
  @Input()
  public paisesList : Array<Pais> = [];
}
