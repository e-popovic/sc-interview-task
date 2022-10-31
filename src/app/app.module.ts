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
import { PurchaseOptionsComponent } from './components/sidebar/purchase-options/purchase-options.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ButtonGroupComponent } from './components/sidebar/purchase-options/button-group/button-group.component';
import { SizesComponent } from './components/sidebar/purchase-options/sizes/sizes.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

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
    PurchaseOptionsComponent,
    ButtonGroupComponent,
    SizesComponent,
  ],
  imports: [
    BrowserModule,
    MatChipsModule,
    MatDividerModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
