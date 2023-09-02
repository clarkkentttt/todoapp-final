import { Component, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNoteComponent } from '../add-note/add-note.component';
import { ManageService } from '../manage.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit, OnChanges {
  @Input() folderindex: any;
  @Output('onEmitNoteMain') emitNote = new EventEmitter<any>();
  @Input() noteindex: any;
  @Input() randomId: any;
  notesArray: any[] = []; 
  clickedNoteIndex: number | null = null;

  constructor(private dialogRef: MatDialog, private service: ManageService) {
   
    
  }

  onEmitNote (noteindex: number) {
    this.clickedNoteIndex = noteindex
    this.emitNote.emit({
      folderIndex: this.folderindex,
      noteIndex: noteindex
    })
  }

  ngOnInit(): void {
    this.folderindex = null;
    this.fetchData();
   
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (this.folderindex != '' || this.noteindex != '') {
    //   console.log(this.folderindex);
      
    // }

    if (changes.folderindex || changes.noteindex || changes.randomId) {
      this.fetchData();
    } 
  }
  

  fetchData() {
    const data = this.service.getData();
  
    if (this.folderindex === null) {
      this.notesArray = []
    } else {
      this.notesArray = data[this.folderindex].notes
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
