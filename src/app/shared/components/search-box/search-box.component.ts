import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-serach-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {

  @ViewChild('busqueda')
  public busqueda!: ElementRef<HTMLInputElement>;

  @Input()
  public _placeHolder! : string;

  @Output()
  public onValue: EventEmitter<string> ;

  constructor(){
    this.onValue = new EventEmitter<string>();
  }

  public search(): void{
    this.onValue.emit(this.busqueda.nativeElement.value);
  }

}
