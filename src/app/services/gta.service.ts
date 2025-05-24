import {Injectable} from "@angular/core";

declare global {
  interface Window { dataLayer: any[]; gtag: (...args: any[]) => void; }
}

@Injectable({
  providedIn: 'root'
})
export class GtaService {

  public loadAnalytics(gkey: string): void {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gkey}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', gkey);
  }
}
