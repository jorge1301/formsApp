import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ], Validators.required),
  });

  nuevoFavorito: FormControl = this.formBuilder.control('', [Validators.required, Validators.minLength(3)]);

  get favoritosArray(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  };

  inputInvalid(campoFormulario: string): boolean | null {
    return this.miFormulario.controls[campoFormulario].errors && this.miFormulario.controls[campoFormulario].touched;
  };

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.cleanInputs();
  };

  cleanInputs(): void {
    this.miFormulario.reset({
      nombre: '',
    });
  };

  cleanNewFavorite(): void {
    this.nuevoFavorito.reset();
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }
    this.favoritosArray.push(new FormControl(this.nuevoFavorito.value));
    this.cleanNewFavorite();
  }

  borrarFavorito(id: number): void {
    this.favoritosArray.removeAt(id);
  }
}
