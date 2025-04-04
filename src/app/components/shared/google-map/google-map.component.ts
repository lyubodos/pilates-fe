import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss'
})
export class GoogleMapComponent implements AfterViewInit {
  @ViewChild('mapContainer', {static: false}) mapContainer!: ElementRef;
  map!: google.maps.Map;

  ngAfterViewInit(): void {
    // this.initMap();
  }

  // initMap(): void {
  //   const address = '1600 Amphitheatre Parkway, Mountain View, CA'; // Example address
  //   const geocoder = new google.maps.Geocoder();
  //
  //   geocoder.geocode({address: address}, (results: { geometry: { location: any; }; }[], status: string) => {
  //     if (results) {
  //       if (status === 'OK' && results[0]) {
  //         const location = results[0].geometry.location;
  //         this.map = new google.maps.Map(this.mapContainer.nativeElement, {
  //           center: location,
  //           zoom: 15
  //         });
  //
  //         new google.maps.Marker({
  //           position: location,
  //           map: this.map
  //         });
  //       } else {
  //         console.error('Geocode was not successful: ' + status);
  //       }
  //     }
  //
  //   });
  // }
}
