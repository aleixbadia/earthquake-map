import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type DataEarthquake = {
  type: string;
  metadata: {
    generated: number;
    url: string;
    title: string;
    status: number;
    api: string;
    count: number;
  };
  features: Earthquake[];
  bbox: number[];
};

export type Earthquake = {
  type: string;
  properties: {
    mag: number;
    place: string;
    time: number;
    updated: number;
    tz: number | null;
    url: string;
    detail: string;
    felt: number | null;
    cdi: number | null;
    mmi: number | null;
    alert: string | null;
    status: string;
    tsunami: number;
    sig: number;
    net: string;
    code: string;
    ids: string;
    sources: string;
    types: string;
    nst: number | null;
    dmin: number | null;
    rms: number;
    gap: number | null;
    magType: string;
    type: string;
    title: string;
  };
  geometry: {
    type: string;
    coordinates: number[];
  };
  id: string;
};

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
      .get<any>(
        'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'
      )
      .subscribe((response) => {
        console.log(response);
        this.earthquakes = response.features;
      });
  }
}
