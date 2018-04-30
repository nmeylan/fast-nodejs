const LibBenchmark = require('benchmark');
const Util = require('./util');

module.exports = class Benchmark {
  constructor(name) {
    this.suite = new LibBenchmark.Suite;
    this.name = name;
  }

  run() {
    console.log(this.name);
    this.suite.run({'async': false});
    console.log("");
  }

  getUtil() {
    return Util;
  }
};
