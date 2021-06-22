import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') formulario!: NgForm;
  initialForm = {
    producto: '',
    precio: 0,
    existencias: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

  obtenerData() {
    this.formulario.resetForm({
      precio: 0,
      existencias: 0,
    });
  }

  nombreValido(): boolean {
    return this.formulario?.controls.producto?.invalid &&
      this.formulario?.controls.producto?.touched;
  }

  precioValido(): boolean {
    return this.formulario?.controls.precio?.touched && this.formulario?.value.precio < 0;
  }

  existenciasValido(): boolean {
    return this.formulario?.controls.existencias?.touched && this.formulario?.value.existencias < 0;
  }

}
