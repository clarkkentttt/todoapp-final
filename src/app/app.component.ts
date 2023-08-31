import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';

  folderIndex: string = '';
  folderIndex2: any;
  noteIndex: any;

  folderEmit(event: any) {
    this.folderIndex = event['folderIndex']

  }

  noteEmit(event: any) {
    console.log(event)
    this.folderIndex2 = event.folderIndex
    this.noteIndex = event.noteIndex;
  }
}
