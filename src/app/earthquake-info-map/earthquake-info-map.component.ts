import {
  Component,
  Input,
  AfterViewInit,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Earthquake } from '../earthquake';
import { LeafletMap } from './leaflet-map';

@Component({
  selector: 'app-earthquake-info-map',
  templateUrl: './earthquake-info-map.component.html',
  styleUrls: ['./earthquake-info-map.component.css'],
})
export class EarthquakeInfoMapComponent
  implements OnInit, AfterViewInit, OnChanges
{
  @Input() earthquake: Earthquake | null = null;
  map: LeafletMap | null = null;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.map = new LeafletMap('map');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.map) {
      return;
    }

    if (changes.earthquake.currentValue) {
      console.log(`changes.earthquake.currentValue`, changes.earthquake.currentValue)
      const currentValue = changes.earthquake.currentValue;
      const name = currentValue.properties.place;
      const lat = currentValue.geometry.coordinates[1];
      const lng = currentValue.geometry.coordinates[0];
      this.map.update(lat, lng, name);
    }
  }
}
