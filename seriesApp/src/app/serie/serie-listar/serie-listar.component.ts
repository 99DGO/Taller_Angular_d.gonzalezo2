import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SerieService } from '../serie-service';
import { SerieDTO } from '../serieDTO';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-serie-listar', //HTML tag to use the component
  standalone: false,
  templateUrl: './serie-listar.component.html',
  styleUrls: ['./serie-listar.component.css']
})
export class SerieListar implements OnInit {
  
  series: Array<SerieDTO> = [];
  constructor(private serieService: SerieService, private cdr: ChangeDetectorRef) { }

  @Output() serieSelected = new EventEmitter<SerieDTO>(); 

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries(): void {
    this.serieService.getSeries().subscribe(series => {
      console.log('✅ Series received:', series);
      this.series = series;
      this.cdr.detectChanges();
    })
  };

  getPromedioSeasons(): number {
    let totalSeasons = 0;

    for (let s of this.series) {
      totalSeasons += s.seasons;
    }

    return totalSeasons / this.series.length;
  }

  onSelect(serie: SerieDTO): void {
    this.serieSelected.emit(serie); // Emitimos el evento con la serie seleccionada
  }
}
