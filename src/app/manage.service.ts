// import { Injectable } from '@angular/core';
// import { Folder } from './models/folder.model';


// @Injectable({
//   providedIn: 'root'
// })
// export class ManageService {

//   constructor() { }

//   array: Folder[] = []; 

//   storeFolder(folderId: any, folderName: string, notes: any[]) {
//     let newData: Folder = {
//         folderId: folderId.toString(),
//         folderName: folderName,
//         notes: notes
//     };

//     this.array = this.getData()
//     this.array.push(newData);
//     localStorage.setItem('Folders', JSON.stringify(this.array));
// }



// getData() {
//   let storedDataJSON = localStorage.getItem('Folders');
//   if (storedDataJSON === null) {
//     return JSON.parse('')
//   }
//   return JSON.parse(storedDataJSON);
// }

// saveData(index: number, newData: any) {
//   const dataArray = this.getData();
//   if (index == null) {
//     alert('Select a folder')
//   } else {
//     dataArray[index].notes.push(newData);
//     localStorage.setItem('Folders', JSON.stringify(dataArray))

//   }
// }

// onDeleteFolder(index: number) {
//   let array = this.getData();
  
//   array.splice(index, 1);
//   localStorage.setItem('Folders', JSON.stringify(array));


// }

// // onNoteDelete() {
// //   let data = this.service.getData();
    
// //   if (this.noteindex === undefined) {
// //     alert('Select a note to delete')

// //   } else {
// //     if (data[this.folderindex].notes.length === 1) {
// //       data[this.folderindex].notes = []; 
// //     } else {
// //       data[this.folderindex].notes.splice(this.noteindex, 1);
// //     }
  
// //     localStorage.setItem('Folders', JSON.stringify(data));
// //     this.notecontent = '';
// //     alert('Note has been Deleted')

// // }



// }


import { Injectable } from '@angular/core';
import { Folder } from './models/folder.model';

@Injectable({
  providedIn: 'root'
})
export class ManageService {

  constructor() { }

  // Initialize the array from local storage or as an empty array if no data exists.
  array: Folder[] = this.getData() || [];

  storeFolder(folderId: any, folderName: string, notes: any[]) {
    let newData: Folder = {
      folderId: folderId.toString(),
      folderName: folderName,
      notes: notes
    };
    this.array = this.getData()
    // Push the new data into the array.
    this.array.push(newData);
    // Update the data in local storage.
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
    // Get the data from local storage.
    const dataArray = this.getData();
    
    if (index == null || index < 0 || index >= dataArray.length) {
      alert('Select a valid folder');
    } else {
      // Push the new data into the selected folder's notes array.
      dataArray[index].notes.push(newData);
      // Update the data in local storage.
      this.updateLocalStorage(dataArray);
    }
  }

  onDeleteFolder(index: number) {
    const array = this.getData();
    
    if (index == null || index < 0 || index >= array.length) {
      alert('Select a valid folder');
    } else {
      // Remove the folder at the specified index.
      array.splice(index, 1);
      // Update the data in local storage.
      this.updateLocalStorage(array);
    }
  }

  // Helper function to update data in local storage.
  private updateLocalStorage(dataArray: Folder[] = this.array) {
    localStorage.setItem('Folders', JSON.stringify(dataArray));
  }
}
