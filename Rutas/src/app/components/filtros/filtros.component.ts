import { Component,Output, EventEmitter } from '@angular/core';
import { ShowComponent } from '../show/show.component';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [ShowComponent,],
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css'
})
export class FiltrosComponent {
  @Output()
  public filter:EventEmitter<string>= new EventEmitter();

  public ordenarAbc(){
    this.filter.emit("A");
  }
  public ordenarAno(){
    this.filter.emit("B");
  }
}
