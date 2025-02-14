import { Component } from '@angular/core';
import { SearchingComponent } from '../searching/searching.component';
import { CardcontentComponent } from '../cardcontent/cardcontent.component';

@Component({
  selector: 'app-listcontent',
  standalone: true,
  imports: [SearchingComponent, CardcontentComponent],
  templateUrl: './listcontent.component.html',
  styleUrl: './listcontent.component.css'
})
export class ListcontentComponent {
  tasks: string[] = [];

  addTask(task: string) {
    this.tasks.push(task);
  }

  deleteTask(task: string) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  editTask(event: { oldTask: string, newTask: string }) {
    const index = this.tasks.indexOf(event.oldTask);
    if (index > -1) {
      this.tasks[index] = event.newTask;
    }
  }
}
