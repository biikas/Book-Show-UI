import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true,
  imports: [RouterOutlet, GoogleMapsModule],
})
export class MapComponent {
  options: google.maps.MapOptions = {
    mapId: '7f88b912a72985ad',
    center: { lat: -31, lng: 147 },
    zoom: 4,
  };

  map: google.maps.Map | undefined;

  ngAfterViewInit(): void {
    // Ensure the map object is created after the view has been initialized
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      this.options
    );
  }
}
