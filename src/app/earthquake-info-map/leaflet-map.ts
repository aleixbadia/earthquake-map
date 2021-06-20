import * as Leaflet from 'leaflet';

const origin = {
  coords: new Leaflet.LatLng(0, 0),
  zoom: 2,
};

const defaultZoom = 8;

export class LeafletMap {
  map: Leaflet.Map;
  popup: Leaflet.Popup | null = null;

  constructor(el: string | HTMLElement) {
    this.map = Leaflet.map(el);

    Leaflet.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    ).addTo(this.map);

    this.map.setView(origin.coords, origin.zoom);
  }

  update(lat: number, lng: number, name: string): void {
    const coords = new Leaflet.LatLng(lat, lng);
    this.map.setView(coords, defaultZoom);

    if(this.popup){
      this.popup.setLatLng(coords);
      this.popup.setContent(name);
    } else {
      this.popup = Leaflet.popup({
        closeButton: false,
        closeOnEscapeKey: false,
        closeOnClick: false
      })
      .setLatLng(coords)
      .setContent(name)
      .openOn(this.map)
    }
  }
}
