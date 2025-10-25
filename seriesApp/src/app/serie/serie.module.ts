import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListar } from './serie-listar/serie-listar.component';
import { SerieDetail } from './serie-detail/serie-detail.component';



@NgModule({
  declarations: [
    SerieListar,
    SerieDetail
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SerieListar,
    SerieDetail
  ]
})
export class SerieModule { }
