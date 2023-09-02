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
  noteIndex2: any;
  noteIndex: any;
  randomNumber: any

  folderEmit(event: any) {

    this.folderIndex = event['folderIndex']
    this.randomNumber = event['randomId']


  }

  noteEmit(event: any) {
 
    this.folderIndex2 = event.folderIndex
    this.noteIndex = event.noteIndex;
  }


  mainCardEmit(event: any) {
    console.log(event)
    this.noteIndex2 = event.funNoteIndex

  }
}