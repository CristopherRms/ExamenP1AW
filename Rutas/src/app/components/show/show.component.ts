import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [NgIf, NgClass,FormsModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
  @Output()
  public deleteCard:EventEmitter<string>= new EventEmitter();
  @Output()
  public editCard:EventEmitter<string>= new EventEmitter();

  @Input()
  public show: Show={
    description:"",
    episodes:0,
    genre:"",
    image:"",
    name:"",
    year:0,
    likes:[]
  };

  public seleccionado : boolean= false;
  public changeSelec(): void{
    this.seleccionado=!this.seleccionado;
  }

  public onDeleted(){
    this.deleteCard.emit(this.show.name);
  }
  public editar(){
    this.editCard.emit(this.show.name);
  }
}
