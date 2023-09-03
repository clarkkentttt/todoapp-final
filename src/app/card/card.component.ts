import { Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter,Output } from '@angular/core';
import { ManageService } from '../manage.service';
import { FormsModule } from '@angular/forms'
import { Note } from '../models/note.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() folderindex: any;
  @Input() noteindex: any;
  updatedData: any;
  @Output('cardEmitter') cardEmit = new EventEmitter<any>();
  @Output('deleteNoteEmitter') deleteNote = new EventEmitter<any>(); 
  notesArray: Note[] = []; 
  notecontent: string = '';

  constructor(private service: ManageService) {
    this.folderindex = null;
    this.noteindex = null;
   
  }

  generateRandomNum() {
    return Math.random() * 10;
  }

  deleteNoteAlert() {
    this.deleteNote.emit({
      randomNumber: this.generateRandomNum()
    })
  }

  funCardEmit() {
    console.log('CardEmit')
    this.cardEmit.emit({
      'funNoteIndex': this.noteindex
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.noteindex && this.noteindex != null && this.folderindex != null) {
      this.notecontent = this.getNoteContent()
    }
  }

  ngOnInit(): void {
    if (this.folderindex != null) {
      let data = this.getNoteContent()
    this.notecontent = data
  }

 
    if (this.folderindex != null) {
      this.notesArray = this.getNotesArray();
      let data = this.getNoteContent();
      this.notecontent = data;
    }
  


    }  
    

  // getNoteContent () {
  //   let data = this.service.getData();
  //   return data[this.folderindex].notes[this.noteindex].noteContent

  // }


  getNoteContent() {
    let data = this.service.getData();
  
    if (
      data[this.folderindex] &&
      data[this.folderindex].notes &&
      this.noteindex !== null &&
      this.noteindex !== undefined &&
      this.noteindex < data[this.folderindex].notes.length
    ) {
      return data[this.folderindex].notes[this.noteindex].noteContent;
    } else {
      return ''; // Return an empty string or handle the undefined case gracefully
    }
  }
  

  saveNoteContent() {
    let data = this.service.getData();
    if (this.noteindex === undefined) {
      alert('Select a note')
    } else {
      data[this.folderindex].notes[this.noteindex].noteContent = this.notecontent;
      localStorage.setItem('Folders', JSON.stringify(data));
      alert('Note has been Saved!')

    }

  }

  // deleteNoteContent() {
  //   let data = this.service.getData();
    
  //   if (this.noteindex === undefined) {
  //     alert('Select a note to delete')

  //   } else {
  //     if (data[this.folderindex].notes.length === 1) {
  //       data[this.folderindex].notes = []; 
  //     } else {
  //       data[this.folderindex].notes.splice(this.noteindex, 1);
  //     }
  //     localStorage.setItem('Folders', JSON.stringify(data));
    
  //     this.notecontent = '';
  //     alert('Note has been Deleted')
  //   }
   

  // deleteNoteContent() {
  //   let data = this.service.getData();
  //   if (this.noteindex === undefined) {
  //     alert('Select a note to delete');
  //   } else {
  //     if (data[this.folderindex].notes.length === 1) {
  //       data[this.folderindex].notes = []; 
  //       this.notecontent = ''
  //       this.deleteNoteAlert()
  //     } else {
  //       data[this.folderindex].notes.splice(this.noteindex, 1);
  //     }
  //     localStorage.setItem('Folders', JSON.stringify(data));
  //     this.notecontent = this.getNoteContent()
  //     this.deleteNoteAlert()
  //     alert('Note has been Deleted');
  //   }
  // }


  deleteNoteContent() {
    let data = this.service.getData();
    if (this.noteindex === undefined) {
      alert('Select a note to delete');
    } else {
      if (data[this.folderindex].notes.length === 1) {
        data[this.folderindex].notes = [];
        this.notesArray = []; 
        this.deleteNoteAlert();
      } else {
        data[this.folderindex].notes.splice(this.noteindex, 1);
        this.notesArray = this.getNotesArray(); 
      }
      localStorage.setItem('Folders', JSON.stringify(data));
      this.notecontent = this.getNoteContent();
      this.deleteNoteAlert();
      alert('Note has been Deleted');
    }
  }
  

  getNotesArray(): Note[] {
    let data = this.service.getData();
    if (this.folderindex != null && data[this.folderindex] && data[this.folderindex].notes) {
      return data[this.folderindex].notes;
    }
    return [];
  }

  
  }
  



