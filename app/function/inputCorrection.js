const levenshtein = require('fast-levenshtein')
const middleware = require('../middleware')

let bestMatch = '';
let minDistance = 1;

const Array = [];
const Input = '';

Array.forEach(entry=> {
    const distance = levenshtein.get(Input, entr); 
    //Iterate through Array
    // will add connection between middleware
    //add a way to hold array of inputs temporarily
    if(distance < minDistance) {
        minDistance = distance;
        bestMatch = entry
    }
})

const threshold = 5
if(minDistance > threshold){
    console.log('No match')
} else {
    return bestMatch;
}