// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],

  imports: [BrowserModule, 
    HttpClientModule,
     CommonModule], 
    
  providers: [GarageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
