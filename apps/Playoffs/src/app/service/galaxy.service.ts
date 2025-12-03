import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class GalaxyService {

  getAllStars() {
    return ['Sun','Earth', 'Sirius', 'Alpha Centauri'];
  }

}
