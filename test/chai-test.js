const chai = require('chai')
const expect = chai.expect

describe('chai test', () => {
    it('should compare some value', () => {
        expect(1).to.equal(1)
    })
    it('should test some other stuff', () => {
        expect({name:'foo'}).to.deep.equal({name: 'foo'})
        expect({name: 'foo'}).to.have.property('name').to.equal('foo')
        expect((5 > 8)).to.be.false
        expect('foo').to.be.a('string')
        expect(3).to.be.a('number')
        expect('bar').to.be.a('string').with.lengthOf(3)
        expect(undefined).to.not.exist
        expect(null).to.be(null)


    })
})