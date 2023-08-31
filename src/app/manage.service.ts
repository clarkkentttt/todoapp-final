import { Injectable } from '@angular/core';

interface Data {
  folderId: string;
  folderName: string;
  notes: any[]; 
}

@Injectable({
  providedIn: 'root'
})
export class ManageService {

  constructor() { }

  array: Data[][] = []; 

  storeFolder(folderId: any, folderName: string, notes: any[]) {
    let newData: Data[] = [{
      folderId: folderId.toString(),
      folderName: folderName,
      notes: notes
    }];

    this.array.push(newData);
    localStorage.setItem('Folders', JSON.stringify(this.array));
  }


  getData() {
    // Retrieve the value associated with the key 'Folders' from localStorage
  const dataJSON = localStorage.getItem('Folders');
    
    // Parse the JSON data and return it
    return JSON.parse(dataJSON || '');
}


// deleteFolder (id: string) {
//   localStorage.removeItem(id);
// }

// storeNote(note: any[]) {
//   return note

// }

}
