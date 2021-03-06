const assert = require('assert')

describe('file to be tested', () => {
    context('function to be tested', () => {
        before(() => {
            console.log('========before=========')
        })
        after (() => {
            console.log('=============after=================')
        })
        beforeEach(() => {
            console.log('==============beforeEach================')
        })
        afterEach(() => {
            console.log('================afterEach====================')
        })
        it('should do something', () => {
            assert.equal(1,1)
        })
        it('should do something else', () => {
            assert.deepEqual({name: 'Joe'},{name: 'Joe'})
        })

        it('should do something else more', () => {
            assert.equal('hello','hello')
        })

        it('should test numbers', () => {
            assert.equal(4, 2  + 2)
        })

        it('this is a pending test')
    })
    context('another function',() => {
        it('should do something')
    })
})