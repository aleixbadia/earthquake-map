import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataEarthquake } from './earthquake';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getEarthquakes(): Observable<DataEarthquake>{
    return this.http.get<DataEarthquake>(
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'
    );
  }

  getTectonicPlates(): Observable<any>{
    return this.http.get<any>(
      'https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json'
    );
  }
}
