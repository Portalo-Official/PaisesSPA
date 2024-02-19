import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisServiceService } from '../../services/pais-service.service';
import { Pais, Name } from '../../interfaces/paises.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-pais-page',
  templateUrl: './pais-page.component.html',
  styles: ``
})
export class PaisPageComponent implements OnInit{
  public pais?: Pais;

  constructor(private activatedRoute : ActivatedRoute,
              private paisService : PaisServiceService,
              private router: Router
            ){}

  ngOnInit(): void {
    this.activatedRoute.params
        .pipe(
          switchMap( params => this.paisService.getPaisByID(params['id']))
        )
        .subscribe( (resp) => {
          if(!resp) return this.router.navigateByUrl('');
          return this.pais = resp;
        });
  }

}
