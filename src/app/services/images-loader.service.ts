import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ImagesLoaderService {


  public preloadImages(items:any) {
    const preloadPromises = items.map((item: any) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = item.image;
      });
    });

    return Promise.all(preloadPromises);
  }
}
