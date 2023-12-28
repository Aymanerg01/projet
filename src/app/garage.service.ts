// garage.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Correct import
import { Observable } from 'rxjs';




export class GarageService {
   readonly API_URL = 'http://localhost:8080';
   readonly ENDPOINT_CARS = '/Car';

  constructor(private httpClient: HttpClient) {} // Correct type: HttpClient, not _HttpClient

  // Example method to get data from the API
  getCars(): Observable<any> {
   
    return this.httpClient.get(this.API_URL+this.ENDPOINT_CARS);
  }
  // Add more methods for other API calls or functionality
}
