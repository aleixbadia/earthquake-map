import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Earthquake } from '../earthquake';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  @Input() earthquakes: Earthquake[] = [];

  @Output() earthquakeSelected: EventEmitter<Earthquake> = new EventEmitter;

  constructor() { }

  onEarthquakeSelected(earthquake: Earthquake): void{
    this.earthquakeSelected.emit(earthquake)
  }

  ngOnInit(): void {
  }

  title(earthquake: Earthquake): string | void {
    if(earthquake){
      return earthquake.properties.place.split("km").pop()?.trim()
    }
  }

}
