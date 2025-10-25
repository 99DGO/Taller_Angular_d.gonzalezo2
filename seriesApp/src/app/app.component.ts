import { Component, signal } from '@angular/core';
import { SerieDTO } from './serie/serieDTO';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class App {
  protected readonly title = signal('seriesApp');

  selectedSerie?: SerieDTO;

  constructor(private cdr: ChangeDetectorRef) { }

  onSerieSelected(serie: SerieDTO): void {
    console.log('Serie selected:', serie); // Debug line
    this.selectedSerie = serie;
    this.cdr.detectChanges();
  }
}
