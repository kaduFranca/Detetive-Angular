import { Injectable } from '@angular/core';
import { Peace, colors } from '../peace.interface';

@Injectable({
  providedIn: 'root'
})
export class PeaceService {

  constructor() { }

  createPeaces(numberPlayers: number) {
    let aux: Peace[] = [];

    for (let i = 1; i <= numberPlayers; i++) {
      let peace: Peace = {
        id: i,
        location: {
          x: i,
          y: i
        },
        color: colors[i],
        image: `../../../../assets/imgs/peao/peao${i}.png`
      }
      aux.push(peace)
    }
    return aux;
  }

}

