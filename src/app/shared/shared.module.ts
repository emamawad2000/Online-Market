import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componentes/header/header.component';
import { SpinerComponent } from './componentes/spiner/spiner.component';
import { SelectComponent } from './componentes/select/select.component';
import { FormsModule } from '@angular/forms';
import { FoterComponent } from './componentes/foter/foter.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinerComponent,
    SelectComponent,
    FoterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule

  ],
  exports:[
    HeaderComponent,
    SpinerComponent,
    SelectComponent,
    FormsModule,
    FoterComponent

  ]
})
export class SharedModule { }
