'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _calculator = require('./calculator.js');

var _calculator2 = _interopRequireDefault(_calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

class Controller {
  constructor() {
    this.calculator = new _calculator2.default();
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
exports.default = Controller;
//# sourceMappingURL=controller.js.map
