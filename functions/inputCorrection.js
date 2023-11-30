const levenshtein = require('fast-levenshtein');
const fs = require('fs')
const { fetchEmails } = require('./fetchEmails')
//const emailArray = require('../emails.json')
// List of email addresses

// Typo email with a significant difference
//const typoEmail = 'foobar@random.com'; // change to inputTypo

if (!fs.existsSync('emails.json')) {
  fetchEmails()
}
else {
  // Initialize variables to store the best match and minimum edit distance
  let bestMatch = '';
  let minDistance = Infinity;

  // Iterate through the list of email addresses and find the one with the smallest edit distance
  comparatorArray.forEach(input => {
    const distance = levenshtein.get(inputTypo, input);

    if (distance < minDistance) {
      minDistance = distance;
      bestMatch = input;
    }
  });

  // Check if the minimum edit distance is above a certain threshold to determine if it's a significant typo.
  const threshold = 5; // You can adjust this threshold as needed.

  if (minDistance > threshold) {
    console.log('No match');
  } else {
    console.log(`The corrected email address is: ${bestMatch}`);
    return besthMatch
  }

}

