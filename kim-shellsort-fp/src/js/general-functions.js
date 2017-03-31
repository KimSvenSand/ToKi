'use strict'

function compose(f, g) {
  return f(g(x));
}

export {
  compose
}
