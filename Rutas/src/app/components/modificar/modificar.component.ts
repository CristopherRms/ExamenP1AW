import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // Importar FormsModule y NgForm
import { CommonModule } from '@angular/common'; // Importar CommonModule para ngIf
import { Show } from '../../interfaces/show.interface'; // Ajustar la ruta según sea necesario

@Component({
  selector: 'app-modificar',
  standalone: true,
  imports: [FormsModule, CommonModule], // Agregar FormsModule y CommonModule
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css'
})
export class ModificarComponent {
  @Input() show: Show | null = null;
  @Output() updateShow = new EventEmitter<Show>();
  @Output() cancelEdit = new EventEmitter<void>();

  public onFormSubmitted(form: NgForm) {
    if (form.valid && this.show) {
      const updatedShow: Show = {
        ...this.show,
        name: form.value.name,
        description: form.value.description,
        image: form.value.image,
      };
      this.updateShow.emit(updatedShow);
    }
  }

  public onCancel() {
    this.cancelEdit.emit();
  }
}
