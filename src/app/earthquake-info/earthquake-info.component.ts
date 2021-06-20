import { Component, OnInit, Input } from '@angular/core';
import { Earthquake } from '../app.component';

@Component({
  selector: 'app-earthquake-info',
  templateUrl: './earthquake-info.component.html',
  styleUrls: ['./earthquake-info.component.css']
})
export class EarthquakeInfoComponent implements OnInit {

  @Input() earthquake: Earthquake | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
