import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class HereMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.loadMap();
  }

  loadMap() {
    const platform = new H.service.Platform({
      apikey: 'HZkPx3GYmJhzX80dRW-mjRJB_VzfyZhSJmXyjseBXiA',
    });

    const defaultLayers = platform.createDefaultLayers();

    const map = new H.Map(
      document.getElementById('mapContainer') as HTMLElement,
      defaultLayers.vector.normal.map,
      {
        zoom: 14,
        center: { lat: 27.7172, lng: 85.324 },
      }
    );

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    const ui = H.ui.UI.createDefault(map, defaultLayers);
  }
}
