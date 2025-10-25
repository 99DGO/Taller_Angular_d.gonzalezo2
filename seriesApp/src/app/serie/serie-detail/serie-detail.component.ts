import { Component, Input } from '@angular/core';
import { SerieDTO } from '../serieDTO';

@Component({
  selector: 'app-serie-detail',
  standalone: false,
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetail {
  @Input() serie?: SerieDTO;

  ngOnChanges() {
  console.log('SerieDetail received serie:', this.serie);
  }

}
