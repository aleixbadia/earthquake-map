import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataEarthquake, Earthquake} from './earthquake'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'map';
  earthquakes: Earthquake[] = [];
  currentEarthquake: Earthquake | null = null;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getEarthquakes();
  }

  handleEarthquakeChange(earthquake: Earthquake): void {
    console.log(`handleEarthquakeChange`, earthquake);
    this.currentEarthquake = earthquake;
  }

  getEarthquakes() {
    this.httpClient
      .get<DataEarthquake>(
        'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'
      )
      .subscribe((response) => {
        console.log(response);
        this.earthquakes = response.features;
      });
  }
}
