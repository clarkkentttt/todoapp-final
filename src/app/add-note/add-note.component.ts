import { Component,  Inject  } from '@angular/core';
import { ManageService } from '../manage.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Note {
  noteId: any,
  noteName: string;
  noteContent: string
}


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  

  constructor(private service: ManageService, @Inject(MAT_DIALOG_DATA) public value: any) {}

    
  generateId() {
    return Date.now();
  }
 
  onSubmit(event: any) {
    
    let data = this.service.getData()
    console.log(this.value)

   for (let i=0; i < data.length; i++) {
    for (let j=0; j < data[0].length; j++) {


      if (data[i][j].folderId == this.value) {
        console.log('Entered the loopp')
    
          let newNote: Note[] = [{
            noteId: this.generateId(),
            noteName: event, 
            noteContent: 'ffsdfsd'
      
          }]
          
          data[i][j].notes.push(newNote);
          console.log(data[i][j].notes)

          localStorage.setItem('Folders', JSON.stringify(data))
          break;
      }

    }
   }
      

  }

}
