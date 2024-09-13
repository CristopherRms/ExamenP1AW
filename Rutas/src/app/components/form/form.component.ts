import { Component ,EventEmitter, Input, Output,} from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ShowComponent } from '../show/show.component';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgIf,FormsModule,ShowComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output()
  public createElement:EventEmitter<Show>= new EventEmitter();
  
  public onformSumited(form: NgForm):void{
    if(form.valid){
        const newshow :Show={
            name:form.value.name,
            year: 0,
            description: form.value.description,
            image: form.value.image,
            episodes:0,
            likes: [],
            genre: "",
        }
        this.createElement.emit(newshow);
        form.resetForm();
    }
  }
}
