const SpliceVsShift = require('./benchmarks/splice-vs-shift');
const SliceZeroVsForVsFrom = require('./benchmarks/slice-zero-vs-for-vs-from');

(new SpliceVsShift("Array#shift vs Array#splice")).run();
(new SliceZeroVsForVsFrom("Array#slice vs for vs Array#from")).run();
