import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router'; //(1)importo la ruta para poder crear redirecciones con boton

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html', 
})

export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesService:HeroesService, // idetenifico de donde viene 
               private router:Router  // (1)CREO UNA RUTA PARA PODER REDIRECCIONAR A UNA PAGINA DE CADA HEROE

    ){
    // console.log('constructor creado!!');
   }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes(); //se lo asigno a la variable heroes para despues usarla
    // console.log(this.heroes);
  }

  verHeroe( idx:number){ //(1) creo una función para poder retornar la ruta
    // console.log(idx);
    return this.router.navigate(['/heroe', idx])
  }

 
}
