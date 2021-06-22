import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BasicosComponent } from './pages/basicos/basicos.component';
import { CustomMinDirective } from './pages/directives/custom-min.directive';
import { DinamicosComponent } from './pages/dinamicos/dinamicos.component';
import { FormsModule } from '@angular/forms';
import { SwitchesComponent } from './pages/switches/switches.component';
import { TemplateRoutingModule } from './template-routing.module';

@NgModule({
  declarations: [
    BasicosComponent,
    CustomMinDirective,
    DinamicosComponent,
    SwitchesComponent,
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ]
})
export class TemplateModule { }
