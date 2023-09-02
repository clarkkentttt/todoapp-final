import { Component,  Inject  } from '@angular/core';
import { ManageService } from '../manage.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Note } from '../models/note.model';

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
  
  let newNote: Note = {
    noteId: this.generateId(),
    noteName: event['note-name'], 
    noteContent: ''
  }
  if (event['note-name'] === '') {
    alert('Please select the note name');
    
  } else {
    this.service.saveData(this.value, newNote)
  }
  this.dialogRef.closeAll();

  }

  
}