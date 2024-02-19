import { Injectable } from '@angular/core';
import { Pais } from '../interfaces/paises.interface';
import { environmets } from '../../environments/environments';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {

  private _paisesList! : Array<Pais>;

  private baseUrl: string = environmets.baseUrl;

  constructor(private http : HttpClient) { }

  public getPaisByCapital(capital : string):Observable<Pais[]> {

    let endPoint: string = environmets.endPoint.byCapital;

    const url = `${this.baseUrl}/${endPoint}/${capital}`;

    return this.http.get<Pais[]>(url).pipe(
      catchError(() => of([]))
    );
  }

  public getPaisByPais(pais : string ) : Observable<Pais[]>{
    let endPoint: string = environmets.endPoint.byCountry;
    const url= `${this.baseUrl}/${endPoint}/${pais}`;
    return this.http.get<Pais[]>(url)
                    .pipe(
                      catchError( () => of([]))
                    );
  }

  public getPaisByRegion( region : string ): Observable<Pais[]>{
    let endpoint : string = environmets.endPoint.byRegion;
    const url = `${this.baseUrl}/${endpoint}/${region}`;
    return this.http.get<Pais[]>(url).pipe(
      catchError( () => of([]))
    );
  }

  public getPaisByID(id : string): Observable<Pais | null>{

    let endPoint = environmets.endPoint.byID;
    const url: string = `${this.baseUrl}/${endPoint}/${id}`;
    // let params : HttpParams= new HttpParams()
    //                           .set('code', id);

    return this.http.get<Pais[]>(url)
                    .pipe(
                      map( paises => { return (paises.length > 0)? paises[0]: null}),
                      catchError( () => of(null))
                    );

  }

  private set paisesList( paises : Array<Pais>){
    this._paisesList = paises;
  }

  public get paisesList(): Pais[]{
    return this._paisesList;
  }


}
