import uniqueRandomArray from 'unique-random-array'
import pokemonCharacters from './pokemon-names.json'

module.exports={
    all: pokemonCharacters,
    unique:uniqueRandomArray(pokemonCharacters)
}