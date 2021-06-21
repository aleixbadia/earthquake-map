import * as Leaflet from 'leaflet';
import { Earthquake } from '../earthquake';
import { DataService } from '../data.service';
import './leaflet-map';

const origin = {
  coords: new Leaflet.LatLng(0, 0),
  zoom: 2,
};

const defaultZoom = 2;

export class LeafletMap {
  map: Leaflet.Map;
  popup: Leaflet.Popup | null = null;

  constructor(el: string | HTMLElement, private _dataService: DataService) {
    this.map = Leaflet.map(el);

    Leaflet.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    ).addTo(this.map);

    this.map.setView(origin.coords, origin.zoom);

    const tectonicPlates = new Leaflet.LayerGroup();

    this._dataService.getTectonicPlates().subscribe((data) => {
      Leaflet.geoJSON(data).addTo(tectonicPlates);
      // Add tectonicPlates Layer to the Map
      tectonicPlates.addTo(this.map);
    });

    const legend = new Leaflet.Control({ position: 'bottomright' });
    legend.onAdd = function () {
      const div = Leaflet.DomUtil.create('div', 'info legend');
      div.style.backgroundColor = '#E5E7E9';
      div.style.color = '#000000';
      div.style.padding = '1px 10px';
      div.style.borderRadius = '5px';
      div.style.lineHeight = '25px';

      div.innerHTML +=
        '<h3>Legend</h3> <hr> <p>🔴 - Earthquakes</p> <hr> <p>🔵 - Tectonic plate</p>';
      return div;
    };
    legend.addTo(this.map);
  }

  update(lat: number, lng: number, name: string): void {
    const coords = new Leaflet.LatLng(lat, lng);
    this.map.setView(coords, defaultZoom);

    if (this.popup) {
      this.popup.setLatLng(coords);
      this.popup.setContent(name);
    } else {
      this.popup = Leaflet.popup({
        closeButton: false,
        closeOnEscapeKey: false,
        closeOnClick: false,
      })
        .setLatLng(coords)
        .setContent(name)
        .openOn(this.map);
    }
  }

  load(allEarthquakes: Earthquake[]): void {
    allEarthquakes?.forEach((earthquake: Earthquake) => {
      Leaflet.circle(
        [
          earthquake.geometry.coordinates[1],
          earthquake.geometry.coordinates[0],
        ],
        {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: earthquake.properties.mag * 50000,
        }
      ).addTo(this.map);
    });
  }
}
