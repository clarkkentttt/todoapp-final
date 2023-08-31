import { Component, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'

import { AddFolderComponent} from '../add-folder/add-folder.component';
import { ManageService } from '../manage.service';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit, OnChanges{
  @Output('folderValueEmit') folderValue = new EventEmitter<any>();

  onEmitFolder(event: any) {
    this.folderValue.emit({
      'folderIndex': event, 
    })
  }
   folderArray: any = [];

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
    let data = this.service.getData();
    data.splice(index, 1);
    localStorage.setItem('Folders', JSON.stringify(data));
    this.fetchData();
   
  }

 
  




}
