import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Earthquake } from '../app.component';

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
    console.log(`onEarthquakeSelected`, earthquake)
    this.earthquakeSelected.emit(earthquake)
  }

  ngOnInit(): void {
  }

}
