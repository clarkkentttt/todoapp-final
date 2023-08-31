// import { Component, Input } from '@angular/core';
// import { ManageService } from '../manage.service';

// @Component({
//   selector: 'app-card',
//   templateUrl: './card.component.html',
//   styleUrls: ['./card.component.css']
// })
// export class CardComponent {

//   @Input() folderindex: any;
//   @Input() noteindex: any;

//   notecontent: string = '';


//   constructor(private service: ManageService) {}

//   saveNoteContent() {

//     let data = this.service.getData()
//     data[this.folderindex].notes[this.noteindex].noteContent = this.notecontent
//     localStorage.setItem('Folders', JSON.stringify(data));
    

//   }

// }
import { Component, Input } from '@angular/core';
import { ManageService } from '../manage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() folderindex: any;
  @Input() noteindex: any;
  updatedData: any;

  notecontent: string = '';

  constructor(private service: ManageService) {}

  saveNoteContent() {
    let data = this.service.getData();
    console.log(data[this.folderindex].notes[this.noteindex].noteContent);
    data[this.folderindex].notes[this.noteindex].noteContent = this.notecontent;
    localStorage.setItem('Folders', JSON.stringify(data));
  }

}
