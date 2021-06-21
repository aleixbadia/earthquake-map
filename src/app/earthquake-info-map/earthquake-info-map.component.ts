import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Earthquake } from '../earthquake';
import { LeafletMap } from './leaflet-map';

@Component({
  selector: 'app-earthquake-info-map',
  templateUrl: './earthquake-info-map.component.html',
  styleUrls: ['./earthquake-info-map.component.css'],
})
export class EarthquakeInfoMapComponent implements OnInit, AfterViewInit {
  _earthquake: Earthquake | null = null;
  _allEarthquakes: Earthquake[] | null = null;

  @Input() set earthquake(value: Earthquake | null) {
    this._earthquake = value;
    if (this.map && this._earthquake) {
      const name = this._earthquake.properties.place;
      const lat = this._earthquake.geometry.coordinates[1];
      const lng = this._earthquake.geometry.coordinates[0];
      this.map.update(lat, lng, name);
    }
  }

  @Input() set allEarthquakes(value: Earthquake[] | null) {
    this._allEarthquakes = value;
    if (this.map && this._allEarthquakes) {
      this.map.load(this._allEarthquakes);
    }
  }

  map: LeafletMap | null = null;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.map = new LeafletMap('map', this._dataService);
  }
}
