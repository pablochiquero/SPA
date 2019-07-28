import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html', 
})

export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router  //CREO UNA RUTA PARA PODER REDIRECCIONAR A UNA PAGINA DE CADA HEROE
    
    ){
    // console.log('constructor creado!!');
   }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe( idx:number){
    // console.log(idx);
    return this.router.navigate(['/heroe', idx])
  }

 
}
