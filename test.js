var expect = require('chai').expect
  , nullify = require('./')

describe('nullify', function() {

  it('should invert result of function', function() {
    var a = [0, 1]
    expect(a.map(nullify(Boolean))).to.eql([null, true])
  })

  it('should nullify value', function() {
    expect(nullify(0)).to.eql(null)
    expect(nullify(1)).to.eql(true)
  })

})