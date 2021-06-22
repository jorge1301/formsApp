import { Component } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu.interfaces';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [ `
    li {
      cursor: pointer;
    }
  `
  ]
})
export class SideMenuComponent {
  templateMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './template/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './template/switches'
    }];

  reactiveMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './reactive/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches'
    }]

}
