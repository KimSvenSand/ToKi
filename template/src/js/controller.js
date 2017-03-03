import Calculator from './calculator.js'

export default class Controller {
  constructor() {
    this.calculator = new Calculator();
    this.runCalculatorMeasurements(8, 5);
  }

  runCalculatorMeasurements(a, b) {
    var result = 0;
    var t0 = performance.now();
    for (var i = 0; i < 10000000; i++) {
      result = this.calculator.add(i, i + 1);
    }
    var t1 = performance.now();

    this.timeMeasure = (t1 - t0).toFixed(8) + 'ms';
  }
}
