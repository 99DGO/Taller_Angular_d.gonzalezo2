import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie-service';
import { SerieDTO } from '../serieDTO';

@Component({
  selector: 'app-serie-listar', //HTML tag to use the component
  standalone: false,
  templateUrl: './serie-listar.component.html',
  styleUrls: ['./serie-listar.component.css']
})
export class SerieListar implements OnInit {

  series: Array<SerieDTO> = [];
  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries(): void {
    this.serieService.getSeries().subscribe(series => {
      console.log('✅ Series received:', series);
      this.series = series;
    })
  };
}
