import { Component,  Inject  } from '@angular/core';
import { ManageService } from '../manage.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';

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
  

  constructor(private service: ManageService, @Inject(MAT_DIALOG_DATA) public value: any, private dialogRef: MatDialog) {}

    
  generateId() {
    return Date.now();
  }
 
  onSubmit(event: any) {
  let data = this.service.getData() 
  let newNote: Note = {
    noteId: this.generateId(),
    noteName: event['note-name'], 
    noteContent: 'ffsdfsd'
  }
  
  this.service.saveData(this.value, newNote)
  this.dialogRef.closeAll();


  }

  

}