import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoldersComponent } from './folders/folders.component';
import { NotesComponent } from './notes/notes.component';

import { FormsModule } from '@angular/forms';
// import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddFolderComponent } from './add-folder/add-folder.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { AddNoteComponent } from './add-note/add-note.component';
import { CardComponent } from './card/card.component';
import { BoxCardComponent } from './box-card/box-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FoldersComponent,
    NotesComponent,
    AddFolderComponent,
    AddNoteComponent,
    CardComponent,
    BoxCardComponent
    
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
