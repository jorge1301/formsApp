import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  @ViewChild('miFormulario') formulario!: NgForm;
  nuevoFavorito: string = '';
  persona: Persona = {
    nombre: 'Jorge',
    favoritos: [
      {
        id: 1,
        nombre: 'Harry Potter'
      },
      {
        id: 2,
        nombre: 'See Thieves'
      }
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    this.persona.favoritos.push({
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFavorito
    });
    console.log('Formulario Posteado')
  }

  eliminar(id: number) {
    this.persona.favoritos.splice(id, 1);
  }

  agregarFavorito() {
    const nuevoJuego: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFavorito
    };
    this.persona.favoritos.push({ ...nuevoJuego });
    this.nuevoFavorito = '';
  }

}
