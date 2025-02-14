import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cardcontent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardcontent.component.html',
  styleUrl: './cardcontent.component.css'
})
export class CardcontentComponent {
  @Input() tasks: string[] = [];
  @Output() deleteTask = new EventEmitter<string>();
  @Output() editTask = new EventEmitter<{ oldTask: string, newTask: string }>();

  onDelete(task: string) {
    this.deleteTask.emit(task);
  }

  onEdit(task: string) {
    const newTask = prompt('Edit Task', task);
    if (newTask && newTask.trim()) {
      this.editTask.emit({ oldTask: task, newTask });
    }
  }
}