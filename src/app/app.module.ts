import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { shortenPipe } from './shorten.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { RevStringPipe } from './rev-string.pipe';
import { SortPipePipe } from './sort-pipe.pipe';

@NgModule({
  declarations: [AppComponent, shortenPipe, FilterPipe, RevStringPipe, SortPipePipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
