'use strict'

var expect=require('chai').expect
var pokemonNames=require('../src/index.js')

describe('pokemon-names',()=>{
    it('should have a list of all pokemon names',()=>{
        // pokemonNames.all
        expect(isArrayOfString(pokemonNames.all)).to.be.true
    })

    it('should allow me to get a random names from the list',()=>{
        // pokemonNames.unique
        // expect(isIncludeIn(pokemonNames.all)(pokemonNames.unique())).to.be.true

        expect(pokemonNames.unique()).to.satisfy(isIncludeIn(pokemonNames.all))
    })
})

function isArrayOfString(array){
   return array.every(itm=>{
        return typeof itm === 'string'
    })
}

function isIncludeIn(array){
    return (item)=>{
        return array.indexOf(item) !== -1
    }
}