import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-peace',
  templateUrl: './peace.component.html',
  styleUrls: ['./peace.component.scss']
})
export class PeaceComponent implements OnInit {


  @Input() id!: string;
  isPeace: boolean = false

  constructor() {

  }

  ngOnInit(): void {

  }


}
