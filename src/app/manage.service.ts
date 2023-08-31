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

  array: Data[] = []; 

  storeFolder(folderId: any, folderName: string, notes: any[]) {
    let newData: Data = {
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
  return JSON.parse(storedDataJSON || defaultData);
}

saveData(index: number, newData: any) {
  const dataArray = this.getData();
  dataArray[index].notes.push(newData);
  localStorage.setItem('Folders', JSON.stringify(dataArray))

}

}
