import { Component, Input } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog'
import { AddNoteComponent } from '../add-note/add-note.component';
import { ManageService } from '../manage.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  
})
export class NotesComponent {


  @Input() folderid : any;
  constructor(private dialogRef: MatDialog, private service: ManageService) {}
  NotesArray: any = []


  fetchData () {
    let data = this.service.getData();


    
   for (let i=0; i < data.length; i++) {
    for (let j=0; j < data[0].length; j++) {

      if(data[i][j].folderId == this.folderid) {
        // this.NotesArray = data[i][]
      }


    }}    

  }


  


  
 

  openAddNotes() {

    const dialogRef = this.dialogRef.open(AddNoteComponent, {
      'data': this.folderid 
    });


    

  
  
}
}