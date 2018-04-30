const Benchmark = require('./benchmark');

module.exports = class SpliceVsShift extends Benchmark {
  constructor(name) {
    super(name);

    const array = (new Array(1000)).fill(this.getUtil().longString);

    this.suite
      .add('splice', () => {
        array.push(this.getUtil().longString + '');
        while (array.length > 1000) {
          array.splice(0, 1);
        }
      })
      .add('shift', () => {
        array.push(this.getUtil().longString + '');
        while (array.length > 1000) {
          array.shift();
        }
      })
      .on('cycle', function(event) {
        console.log(String(event.target));
      })
      .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
      });
  }

};
