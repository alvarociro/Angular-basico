import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

    heroes: string[] =['Spiderman','Iroman','Hulk','Thor'];
    heroeborrado: string='';

    borrarHeroe(){
      this.heroeborrado =this.heroes.shift() || '';
      // console.log(heroeBorrado);
    }
}

