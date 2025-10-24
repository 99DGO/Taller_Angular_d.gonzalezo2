import { Component } from '@angular/core';
import { SerieService } from '../serie-service';
import { SerieDTO } from '../serieDTO';

@Component({
  selector: 'app-serie-listar', //HTML tag to use the component
  standalone: false,
  templateUrl: './serie-listar.component.html',
  styleUrls: ['./serie-listar.component.css']
})
export class SerieListar {

  series: Array<SerieDTO> = [];
  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    })
  };
}
