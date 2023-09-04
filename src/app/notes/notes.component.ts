import { Component, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNoteComponent } from '../add-note/add-note.component';
import { ManageService } from '../manage.service';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit, OnChanges {
  @Input() folderindex: any;
  @Output('onEmitNoteMain') emitNote = new EventEmitter<any>();
  @Input() noteindex: any;
  @Input() changeFolder: any;
  @Input() changeNote: any;
  notesArray: Note[] = []; 
  clickedNoteIndex: number | null = null;

  constructor(private dialogRef: MatDialog, private service: ManageService) {
    this.folderindex = null;
    this.fetchData();
    this.changeFolder = 1;
    this.changeNote = 1;
    
  }

  onEmitNote (noteindex: number) {
    this.clickedNoteIndex = noteindex
    this.emitNote.emit({
      folderIndex: this.folderindex,
      noteIndex: noteindex
    })
  }

  ngOnInit(): void {
   
   
  }



  ngOnChanges(changes: SimpleChanges): void {
    


    if (changes.changeNote ) {
      console.log(this.noteindex)
      this.noteindex = null
    
    }
    if (
      changes.noteindex ||
      changes.folderindex ||
      changes.changeFolder ||
      changes.changeNote
    ) {
      this.fetchData();
      
    }
  }
  


fetchData() {
    const data = this.service.getData();
  
    if (this.folderindex === null) {
      this.notesArray = [];
      this.clickedNoteIndex = null;
      this.noteindex = null 
    } else {
      if (data[this.folderindex] && data[this.folderindex].notes) {
        this.notesArray = data[this.folderindex].notes;
        if (this.notesArray.length === 0) {
          this.clickedNoteIndex = null; 
          this.noteindex = null;
        }
      } else {
        this.notesArray = [];
        this.clickedNoteIndex = null;
        this.noteindex = null
      }
    }
  }
  
  

 


openAddNotes() {
    this.dialogRef
      .open(AddNoteComponent, {
        data: this.folderindex,
      })
      .afterClosed()
      .subscribe(() => {
        this.fetchData();
      });
  }
}
