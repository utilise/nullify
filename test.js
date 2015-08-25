var expect = require('chai').expect
  , nullify = require('./')

describe('nullify', function() {
  it('should invert result of function', function() {
    var a = [0, 1]
    expect(a.map(nullify(Boolean))).to.eql([null, true])
  })
})