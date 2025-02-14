import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searching',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './searching.component.html',
  styleUrl: './searching.component.css'
})
export class SearchingComponent {
  task: string = '';

  @Output() addTask = new EventEmitter<string>();

  onAddTask() {
    if (this.task.trim()) {
      this.addTask.emit(this.task);
      this.task = '';
    }
  }
}
