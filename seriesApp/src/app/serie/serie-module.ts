import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListar } from './serie-listar/serie-listar';
import { SerieDetail } from './serie-detail/serie-detail';



@NgModule({
  declarations: [
    SerieListar,
    SerieDetail
  ],
  imports: [
    CommonModule
  ]
})
export class SerieModule { }
