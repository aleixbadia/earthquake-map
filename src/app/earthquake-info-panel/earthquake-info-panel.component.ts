import { Component, OnInit, Input } from '@angular/core';
import { Earthquake } from '../earthquake';

@Component({
  selector: 'app-earthquake-info-panel',
  templateUrl: './earthquake-info-panel.component.html',
  styleUrls: ['./earthquake-info-panel.component.css']
})
export class EarthquakeInfoPanelComponent implements OnInit {

  @Input() earthquake: Earthquake | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  title(): string | void {
    if(this.earthquake){
      return this.earthquake.properties.place.split("km").pop()?.trim()
    }
  }

  radius(): string | void {
    if(this.earthquake){
      const s = this.earthquake.properties.place;
      return s.substring(0, s.indexOf('km')+2)
    }
  }

  time(): string | void {
    if(this.earthquake){
      let date = new Date(this.earthquake.properties.time)
      return date.toUTCString()
    }
  }
}
