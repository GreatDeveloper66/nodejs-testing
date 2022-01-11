const chai = require('chai')
const expect = chai.expect

describe('chai test', () => {
    it('should compare some value', () => {
        expect(1).to.equal(1)
    })
    it('should test some other stuff', () => {
        expect({name:'foo'}).to.deep.equal({name: 'foo'})
    })
})