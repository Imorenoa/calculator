import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  @Input() userInput: string = '';

  @Input() result: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
