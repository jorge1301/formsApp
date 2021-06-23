import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  miFormulario: FormGroup = this.formBuilder.group({
    producto: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      producto: 'RTX4080zi',
      precio: 45000,
    })
  }

  campoEsValido(campo: string): boolean | null {
    return this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
  };

  guardar(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.reiniciarFomulario();
  }

  reiniciarFomulario(): void {
    this.miFormulario.reset();
  }

}
