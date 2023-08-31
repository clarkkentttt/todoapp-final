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

  notesArray: any[] = []; 

  constructor(private dialogRef: MatDialog, private service: ManageService) {}

  onEmitNote (noteindex: number) {
    this.emitNote.emit({
      folderIndex: this.folderindex,
      noteIndex: noteindex
    })
  }

  ngOnInit(): void {
    this.fetchData();
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes.folderindex) {
        this.fetchData();
      }
  }

  fetchData() {
    const data = this.service.getData();
  
    this.notesArray = data[this.folderindex].notes;
    console.log(this.notesArray);
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
