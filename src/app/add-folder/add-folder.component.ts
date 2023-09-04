
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { ManageService } from '../manage.service';

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.component.html',
  styleUrls: ['./add-folder.component.css']
})
export class AddFolderComponent {


  constructor(private service: ManageService, private dialogRef: MatDialog) {}

  generateId() {
    return Date.now();
  }

  onSubmit(event: any) { 

    this.service.storeFolder(this.generateId(), event['folder-name'], []);
    this.dialogRef.closeAll();
  }
   
}
