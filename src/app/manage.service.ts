import { Injectable } from '@angular/core';
import { Folder } from './models/folder.model';


@Injectable({
  providedIn: 'root'
})
export class ManageService {

  constructor() { }

  array: Folder[] = []; 

  storeFolder(folderId: any, folderName: string, notes: any[]) {
    let newData: Folder = {
        folderId: folderId.toString(),
        folderName: folderName,
        notes: notes
    };
    this.array.push(newData);
    localStorage.setItem('Folders', JSON.stringify(this.array));
}



getData() {
  const storedDataJSON = localStorage.getItem('Folders');
  const defaultData = 'Data not found';
  return JSON.parse(storedDataJSON || '');
}

saveData(index: number, newData: any) {
  const dataArray = this.getData();
  if (index == null) {
    alert('Select a folder')
  } else {
    dataArray[index].notes.push(newData);
    localStorage.setItem('Folders', JSON.stringify(dataArray))

  }
}

onDeleteFolder(index: number) {
  let data = this.getData();
  data[index].notes = []
  data.splice(index, 1);
  localStorage.setItem('Folders', JSON.stringify(data));


}

// onNoteDelete() {
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

// }



}
