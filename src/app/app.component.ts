import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ListcontentComponent } from './listcontent/listcontent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,ListcontentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist';
}
