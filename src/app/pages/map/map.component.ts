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
    mapId: 'a32963f6d3042cd8',
    center: { lat: -31, lng: 147 },
    zoom: 4,
  };
}
