import { PeaceComponent } from '../peace/peace.component';
import { Peace } from '../peace/peace.interface';
import { PeaceService } from '../peace/service/peace.service';
import { limitMapX, limitMapY } from './../../app.constants';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.scss']
})
export class TabuleiroComponent implements OnInit {

  @ViewChildren(PeaceComponent) peaceComponents!: QueryList<PeaceComponent>;
  limitMapXArray: number[] = Array.from({ length: limitMapX }, (_, i) => i);
  limitMapYArray: number[] = Array.from({ length: limitMapY }, (_, i) => i);
  numberOfPlayers: number = 5;
  allPeaces: Peace[] = this.peaceService.createPeaces(this.numberOfPlayers);

  constructor(private peaceService: PeaceService) { }

  ngOnInit(): void {
    console.log(this.allPeaces)
    this.setIsPiecePresentById("0-0", true)
  }

  setIsPiecePresentById(id: string, isPiecePresent: boolean): void {
    const targetPeaceComponent = this.peaceComponents.find(peaceComponent => peaceComponent.id === id);
    if (targetPeaceComponent) {
      targetPeaceComponent.isPeace = isPiecePresent;
    }
  }

}
