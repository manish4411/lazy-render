import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { LazyForDirective } from './directives/lazyFor.directive';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule,HttpClientModule ],
  declarations: [AppComponent, LazyForDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
