/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the last element in a one-dimensional single-precision floating-point ndarray equal to a corresponding element in another one-dimensional single-precision floating-point ndarray.
*
* @module @stdlib/blas-ext-base-ndarray-slast-index-equal
*
* @example
* var Float32Vector = require( '@stdlib/ndarray-vector-float32' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var slastIndexEqual = require( '@stdlib/blas-ext-base-ndarray-slast-index-equal' );
*
* var x = new Float32Vector( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Float32Vector( [ 0.0, 0.0, 3.0, 0.0 ] );
*
* var fromIndex = scalar2ndarray( 3, {
*     'dtype': 'generic'
* });
*
* var idx = slastIndexEqual( [ x, y, fromIndex ] );
* // returns 2
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
