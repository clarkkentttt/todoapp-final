import { Component, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'

import { AddFolderComponent} from '../add-folder/add-folder.component';
import { ManageService } from '../manage.service';
import { Folder } from '../models/folder.model';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit, OnChanges{
  @Output('folderValueEmit') folderValue = new EventEmitter<any>();
  @Output('deleteValueEmitter') deleteEmitValue = new EventEmitter<any>();

  clickedFolderIndex: number | null = null;

  generateNumber() {
    return Math.random() * 10;
  }

  deleteEmit() {
    
    this.deleteEmitValue.emit({
      'randomNumber': this.generateNumber()

    })
  }

 
  onEmitFolder(event: any) {
    this.clickedFolderIndex = event; 
    this.folderValue.emit({
      'folderIndex': event,
     
    })
  }
   folderArray: Folder[] = [];

  constructor(private dialogRef: MatDialog, private service: ManageService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.folderArray = this.service.getData();
  }

  ngOnInit(): void {
    this.fetchData();
    
  }

  fetchData () {
    this.folderArray = this.service.getData();
  
  }
 
addFolder() {
  this.dialogRef.open(AddFolderComponent, {width: '300px'}).afterClosed().subscribe(() => {this.fetchData()})  
}

onDelete(index: number) {
  this.service.onDeleteFolder(index)
  this.deleteEmit();
  this.fetchData();
  this.clickedFolderIndex = null
 

   
  }

 
  




}
