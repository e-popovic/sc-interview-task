import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoTitleComponent } from './components/info-chunk/info-title/info-title.component';
import { InfoTextComponent } from './components/info-chunk/info-text/info-text.component';
import { InfoChunkComponent } from './components/info-chunk/info-chunk.component';
import { PreviewComponent } from './components/preview/preview.component';
import { InfoComponent } from './components/info/info.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { KeywordsChunkComponent } from './components/info/keywords-chunk/keywords-chunk.component';
import { MatChipsModule } from '@angular/material/chips';
import { ThreeInfosChunkComponent } from './components/info/three-infos-chunk/three-infos-chunk.component';
import { MatDividerModule } from '@angular/material/divider';
import { NotesComponent } from './components/sidebar/notes/notes.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InfoTitleComponent,
    InfoTextComponent,
    InfoChunkComponent,
    PreviewComponent,
    InfoComponent,
    SidebarComponent,
    KeywordsChunkComponent,
    ThreeInfosChunkComponent,
    NotesComponent,
  ],
  imports: [
    BrowserModule,
    MatChipsModule,
    MatDividerModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
