import { Injectable } from '@angular/core';
import { Folder } from './models/folder.model';
import { Note } from './models/note.model';

@Injectable({
  providedIn: 'root'
})
export class ManageService {

  constructor() { }


  array: Folder[] = this.getData() || [];

  storeFolder(folderId: any, folderName: string, notes: Note[]) {
    let newData: Folder = {
      folderId: folderId.toString(),
      folderName: folderName,
      notes: notes
    };
    this.array = this.getData()
    this.array.push(newData);
    this.updateLocalStorage();
  }

  getData(): Folder[] {
    const storedDataJSON = localStorage.getItem('Folders');
    if (storedDataJSON === null) {
      return [];
    }
    return JSON.parse(storedDataJSON);
  }

  saveData(index: number, newData: any) {
    const dataArray = this.getData();
    
    if (index == null || index >= dataArray.length) {
      alert('Select a valid folder');
    } else {
      dataArray[index].notes.push(newData);
      this.updateLocalStorage(dataArray);
    }
  }

  onDeleteFolder(index: number) {
    const array = this.getData();
    
    if (index == null || index >= array.length) {
      alert('Select a valid folder');
    } else {
      array.splice(index, 1);
      
      this.updateLocalStorage(array);
    }
  }


  private updateLocalStorage(dataArray: Folder[] = this.array) {
    localStorage.setItem('Folders', JSON.stringify(dataArray));
  }
}
