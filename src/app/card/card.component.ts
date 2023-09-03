import { Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter,Output } from '@angular/core';
import { ManageService } from '../manage.service';
import { FormsModule } from '@angular/forms'

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

    }  
    

  getNoteContent () {
    let data = this.service.getData();
    return data[this.folderindex].notes[this.noteindex].noteContent

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
   

  deleteNoteContent() {
    let data = this.service.getData();
    
    if (this.noteindex === undefined) {
      alert('Select a note to delete');
    } else {
      if (data[this.folderindex].notes.length === 1) {
        data[this.folderindex].notes = []; 
      } else {
        data[this.folderindex].notes.splice(this.noteindex, 1);
      }
      localStorage.setItem('Folders', JSON.stringify(data));
      this.notecontent = this.getNoteContent()
      this.deleteNoteAlert()
      alert('Note has been Deleted');
    }
  }
  
  }
  


