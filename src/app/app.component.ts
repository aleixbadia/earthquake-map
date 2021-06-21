import { Component, OnInit } from '@angular/core';
import { Earthquake } from './earthquake';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'map';
  earthquakes: Earthquake[] = [];
  currentEarthquake: Earthquake | null = null;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this._dataService
      .getEarthquakes()
      .subscribe((data) => (this.earthquakes = data.features));
  }

  handleEarthquakeChange(earthquake: Earthquake): void {
    this.currentEarthquake = earthquake;
  }
}
