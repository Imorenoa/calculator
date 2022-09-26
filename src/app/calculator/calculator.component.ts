import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  //Display of thee user input
  userInput: string = '';

  //Display the result
  result: number = 0;

  //First operand
  operandOne: number = 0;

  //Second operand
  operandTwo: number = 0;

  //Operator
  operator!: string;

  operatorBool: boolean = false;

  resultBool: boolean = false;

  disableBool: boolean = false;

  constructor() {}

  pressNum(key: string) {
    if (this.disableBool) {
      this.clearAll();
      this.disableBool = false;
    }
    this.userInput += key;
  }

  clearAll() {
    this.userInput = '';

    this.result = 0;

    this.operatorBool = false;

    this.operandOne = 0;

    this.operandTwo = 0;
  }

  pressOperators(ope: string) {
    //Check if operator have value to limit operations to one

    if (this.userInput === '') {
      return;
    }

    if (!this.operatorBool) {
      this.operandOne = Number(this.userInput);

      this.userInput += ope;

      this.operator = ope;

      this.operatorBool = true;
    }
    if (this.operator) {
      const lastString = this.userInput.split('')[this.userInput.length - 1];

      if (lastString.match('[0-9]')) {
        return;
      }

      this.userInput = this.userInput.substring(0, this.userInput.length - 1);

      this.userInput += ope;
    }
  }
  getResult() {
    this.operatorBool = false;

    this.disableBool = true;

    this.operandTwo = parseFloat(this.userInput.split(this.operator)[1]);

    if (this.operator === '+') {
      this.result = this.operandOne + this.operandTwo;
    }
    if (this.operator === '-') {
      this.result = this.operandOne - this.operandTwo;
    }
    if (this.operator === '/') {
      this.result = this.operandOne / this.operandTwo;
    }
    if (this.operator === 'x') {
      this.result = this.operandOne * this.operandTwo;
    }

    /* console.log('operador 1:', this.operandOne);
    console.log('operador:', this.operator);
    console.log('operador 2:', this.operandTwo);
    console.log('operator boolean:', this.operatorBool);
    console.log(this.userInput); */
  }
}
