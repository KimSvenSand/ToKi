'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class CurrentHandler {
  constructor() {
    this.start = null;
    this.aux = null;
    this.dest = null;
  }

  init(start, aux, dest) {
    this.start = start;
    this.aux = aux;
    this.dest = dest;
    this.stack = [];
  }

  destToAux() {
    this.stack.push({ 'start': this.start, 'aux': this.aux, 'dest': this.dest });
    this.start = this.stack[this.stack.length - 1].dest;
    this.dest = this.stack[this.stack.length - 1].aux;
    this.aux = this.stack[this.stack.length - 1].start;
  }

  auxToDest() {
    this.stack.push({ 'start': this.start, 'aux': this.aux, 'dest': this.dest });
    this.start = this.stack[this.stack.length - 1].aux;
    this.aux = this.stack[this.stack.length - 1].start;
    this.dest = this.stack[this.stack.length - 1].dest;
  }

  popLastState() {
    var state = this.stack.pop();
    this.start = state.start;
    this.aux = state.aux;
    this.dest = state.dest;
  }
}
exports.default = CurrentHandler;
//# sourceMappingURL=CurrentHandler.js.map
