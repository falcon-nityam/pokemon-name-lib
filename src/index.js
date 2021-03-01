"use strict"

var uniqueRandomArray=require('unique-random-array')
var pokemonCharacters=require('./pokemon-names.json')

module.exports={
    all: pokemonCharacters,
    unique:uniqueRandomArray(pokemonCharacters)
}