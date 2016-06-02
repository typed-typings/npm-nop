import test = require('blue-tape');

import nop = require('nop');

test('nop', (t) => {
  class A {
    fn: (a: string, b: number) => string[];
    constructor() {
      this.fn = nop;
    }
  }
  t.pass('noop can assigned to (a: string, b: number) => string[]');
  t.end();
});
