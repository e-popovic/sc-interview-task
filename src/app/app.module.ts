import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoTitleComponent } from './components/info-chunk/info-title/info-title.component';
import { InfoTextComponent } from './components/info-chunk/info-text/info-text.component';
import { InfoChunkComponent } from './components/info-chunk/info-chunk.component';
import { PreviewComponent } from './components/preview/preview.component';
import { InfoComponent } from './components/info/info.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoTitleComponent,
    InfoTextComponent,
    InfoChunkComponent,
    PreviewComponent,
    InfoComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
