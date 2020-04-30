# Grid Snap
----

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![Node.js CI](https://github.com/reload-kurt/grid-snap/workflows/Node.js%20CI/badge.svg?branch=master)

Grid snap is a zero-dependency library that allows you to pass through a point (or array of points) along with a grid-spacing metric which will return a similarly dimensioned variable of the points snapped to the spacing sent through.

# Installation
----
To install, simply include the JS file (`dist/snap.min.js`) or using NPM:
```
npm i --save grid-snap
```


# Usage
----
To snap a unidimensional number to a grid spacing of 5 units:
```
let snap = require('grid-snap'); // for nodejs, for browser window.snap is avaiable (as just snap(...))

let pointA = snap(1.4, 5) // returns 0
let pointB = snap(2.6, 5) // returns 5
```
For multidimensional arrays, pass either an array or an object to the method
```
let snap = require('grid-snap');

// as an array (// returns [64,0])
let pointA = snap([50, 24], [64,64])

// as an object (returns {x: 16, y:0})
let pointB = snap({x: 14.5, y: 2.5}, {x: 16, y: 16})
```

License
----

MIT
