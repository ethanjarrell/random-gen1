const express = require('express');
const app = express();
var loremIpsum = require('lorem-ipsum'),
output = loremIpsum({
 count:  3                 // Number of words, sentences, or paragraphs to generate.
, units: 'paragraphs'            // Generate words, sentences, or paragraphs.
, sentenceLowerBound: 3         // Minimum words per sentence.
, sentenceUpperBound: 4        // Maximum words per sentence.
, paragraphLowerBound: 3        // Minimum sentences per paragraph.
, paragraphUpperBound: 4        // Maximum sentences per paragraph.
, format: 'HTML'               // Plain text or html
// , words: ['ad', 'dolor', ... ]  // Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default.
// , random: Math.random           // A PRNG function. Uses Math.random by default
, suffix: "####"                // The character to insert between paragraphs. Defaults to default EOL for your OS.
});

app.get('/lorem/:count', function (req, res){
  res.send(
    let num = req.params.count
    , count:  num
    , units: 'paragraphs'
    , sentenceLowerBound: 3
    , sentenceUpperBound: 4
    , paragraphLowerBound: 3
    , paragraphUpperBound: 4
    , format: 'plain'
    , suffix: "####"
  );
});

app.listen(3000, function(){
  console.log('Successfully started express application')
});
