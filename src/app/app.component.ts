// app.component.ts

import { Component, OnInit } from '@angular/core';
import { GarageService } from './garage.service'; // Adjust the path accordingly
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
imports:[CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit {
  
  cars!: Object; // Use a suitable type or 'any' based on your response structure

  constructor(private https : HttpClient,private garageService: GarageService) {}

  ngOnInit() {
   console.log('On Init ..............')
   this.garageService.getCars().subscribe(datas=>{
    this.cars=[datas];
   })
  }
}
