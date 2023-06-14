import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperaturesService {

  constructor() { }
  getTemperature() {
    const temperature: number = Math.floor(Math.random() * (41 - (-10))) + (-10);
    return temperature;
  }
}
