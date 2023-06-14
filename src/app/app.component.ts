import { Component, ViewChild } from '@angular/core';
import { City } from './city';
import { FormGroup } from '@angular/forms';
import { TemperaturesService } from './temperatures.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('form') form!: FormGroup;
  title = 'cities-weathers';

  constructor(private temperatureService: TemperaturesService) { }

  cityList: City[] = [{ cityName: "Rome", temperature: 25 }]

  newCity() {

    let city = new City(
      this.form.value.city,
      this.temperatureService.getTemperature()
    );
    this.cityList.push(city);
    this.form.reset()
  }
}

