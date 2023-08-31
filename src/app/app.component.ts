import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';

  folderId: string = '';

  folderEmit(event: any) {
    this.folderId = event['folderId']

  }
}
