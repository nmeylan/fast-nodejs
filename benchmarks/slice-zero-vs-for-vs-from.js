const Benchmark = require('./benchmark');

module.exports = class SliceZeroVsForVsFrom extends Benchmark {
  constructor(name) {
    super(name);

    const array = (new Array(1000)).fill(this.getUtil().longString);

    this.suite
      .add('slice', () => {
        const clone = array.slice(0);
      })
      .add('for', () => {
        const clone = new Array(array.length);
        for (let i = 0; i < array.length; i++) {
          clone[i] = array[i];
        }
      })
      .add('slice', () => {
        const clone = Array.from(array);
      })
      .on('cycle', function(event) {
        console.log(String(event.target));
      })
      .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
      });
  }

};
