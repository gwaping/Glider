import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ScriptloaderService } from './scriptloader.service';

import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [ScriptloaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
