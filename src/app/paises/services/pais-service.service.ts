import { Injectable } from '@angular/core';
import { Pais } from '../interfaces/paises.interface';
import { environmets } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {

  private _paisesList! : Array<Pais>;

  private baseUrl: string = environmets.baseUrl;
  private endPoint: string = environmets.endPoint.byCapital;

  constructor(private http : HttpClient) { }

  public getPaisByCapital(capital : string):Observable<Pais[]> {

    const url = `${this.baseUrl}/${this.endPoint}/${capital}`;

    return this.http.get<Pais[]>(url);
  }

  private set paisesList( paises : Array<Pais>){
    this._paisesList = paises;
  }

  public get paisesList(): Pais[]{
    return this._paisesList;
  }


}
