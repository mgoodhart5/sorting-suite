const assert = require('chai').assert
const insertionSortNumbers = require('../insertion-sort')

describe('insertion-sort functionality', function() {
  context('sorting function', function() {
    it('it can sort two numbers', function(){
      assert.deepEqual(insertionSortNumbers([8,7]), [7,8])
    })
  })
})
describe('insertion-sort functionality', function() {
  context('sorting function', function() {
    it('it can sort three numbers', function(){
      assert.deepEqual(insertionSortNumbers([8,0,7]), [0,7,8])
    })
  })
})
describe('insertion-sort functionality', function() {
  context('sorting function', function() {
    it('it can sort five numbers', function(){
      assert.deepEqual(insertionSortNumbers([2,1,8,0,7]), [0,1,2,7,8])
    })
  })
})
describe('insertion-sort functionality', function() {
  context('sorting function', function() {
    it('it can sort seven numbers', function(){
      assert.deepEqual(insertionSortNumbers([2,1,8,5,3,0,7]), [0,1,2,3,5,7,8])
    })
  })
})
