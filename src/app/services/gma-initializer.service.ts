import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GmaInitializerService {
  private readonly API_KEY: any = environment.googleMapsApiKey || 'abc'


  constructor() {
  }


  public async initialize(): Promise<void> {
    const element = document.createElement('script');
    const element2 = document.createElement('script');

    element.type = 'text/javascript';

    element.src = `https://maps.googleapis.com/maps/api/js?key=${this.API_KEY}&libraries=maps,marker`;
    element.async = true;

    element2.src = 'https://unpkg.com/@googlemaps/advanced-markers';

    document.head.appendChild(element);
    document.head.appendChild(element2);
  }
}
