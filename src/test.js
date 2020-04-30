var assert = require('assert');
var expect = require("expect.js");
const snap = require("./snap");

describe('Snap', function() {
    describe('#snap()', function() {  
        it('should return 0 when point is undefined', function() {
            assert.equal(snap(undefined, 1), 0.0);
        });

        it('should return 0 when point is undefined', function() {
            assert.equal(snap(undefined, 1), 0.0);
        });

        it('should return 0.4 when spacing is undefined', function() {
            assert.equal(snap(0.4, undefined), 0.4);
        });
    });
    describe('#snap() as unidimensional', function() { 
        it('should return 0 when point is 0.49 and spacing is 1', function() {
            assert.equal(snap(0.49, 1), 0.0);
        });

        it('should return 1 when point is 0.51 and spacing is 1', function() {
            assert.equal(snap(0.51, 1), 1.0);
        });

        it('should return 0 when point is 1 and spacing is 10', function() {
            assert.equal(snap(1, 10), 0.0);
        });

        it('should return 10 when point is 6 and spacing is 10', function() {
            assert.equal(snap(6, 10), 10);
        }); 
    });

    describe('#snap() as multidimensional', function() {
        it('should return [0.49, 0] when point is [0.49, 0] and spacing is [1] (mismatched lengths)', function() {
            expect(snap([0.49, 0], [1])).to.eql([0.49, 0]);
        });

        it('should return [0, 0] when point is [0.49, 0] and spacing is [1, 1]', function() {
            expect(snap([0.49, 0], [1, 1])).to.eql([0, 0]);
        });

        it('should return [1, 0] when point is [0.51, 0] and spacing is [1, 1]', function() {
            expect(snap([0.51, 0], [1, 1])).to.eql([1, 0]);
        });

        it('should return {x: 0, y: 0} when point is {x: 0.49, y: 0} and spacing is {x: 1, y: 1}', function() {
            expect(snap({x: 0.49, y: 0}, {x:1, y:1})).to.eql({x: 0, y: 0});
        });
    });
});