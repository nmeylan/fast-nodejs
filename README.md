# Purpose
nodejs micro benchmark for some javascript functions.

Result presented below are get from my current laptop:
````
MacBook Pro (Retina, 15-inch, Late 2013)
CPU: 2,3 GHz Intel Core i7
Memory: 16 Go 1600 MHz DDR3
````

# Array#shift vs Array#splice (removing first array's element)
````
splice x 4,427,423 ops/sec ±1.28% (87 runs sampled)
shift x 9,625,196 ops/sec ±0.66% (90 runs sampled)
Fastest is shift
````
# Array#slice vs for vs Array#from (cloning array)

````
slice x 307,408 ops/sec ±1.32% (90 runs sampled)
for x 275,913 ops/sec ±2.44% (89 runs sampled)
slice x 11,210 ops/sec ±1.41% (92 runs sampled)
Fastest is slice
````
