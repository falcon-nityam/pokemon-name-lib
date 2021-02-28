"use strict"

let uniqueRandomArray=require('unique-random-array')
let pokemonCharacters=require('./pokemon-names.json')

module.exports={
    all: pokemonCharacters,
    unique:uniqueRandomArray(pokemonCharacters)
}