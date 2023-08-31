import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManageService } from '../manage.service';

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.component.html',
  styleUrls: ['./add-folder.component.css']
})
export class AddFolderComponent {

  @Output('addFolder') addFolderEmit = new EventEmitter<any>();

  constructor(private service: ManageService, private dialogRef: MatDialog) {}

  generateId() {
    return Date.now();
  }

  onSumbit (event: any) {

    this.service.storeFolder( this.generateId() ,event['folder-name'], [])
    this.dialogRef.closeAll();
    
  }
   
}
