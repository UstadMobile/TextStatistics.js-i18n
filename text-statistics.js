#!/usr/bin/env node

var textStatistics = require('text-statistics');
var path = require('path');


var nopt = require('nopt') 
  // , knownOpts = { "foo" : [String, null]
  //               , "bar" : [Stream, Number]
  //               , "baz" : path
  //               , "bloo" : [ "big", "medium", "small" ]
  //               , "flag" : Boolean
  //               , "pick" : Boolean
  //               , "many" : [String, Array]
  //               }
  // , shortHands = { "foofoo" : ["--foo", "Mr. Foo"]
  //                , "b7" : ["--bar", "7"]
  //                , "m" : ["--bloo", "medium"]
  //                , "p" : ["--pick"]
  //                , "f" : ["--flag"]
  //                }
  //            // everything is optional.
  //            // knownOpts and shorthands default to {}
  //            // arg list defaults to process.argv
  //            // slice defaults to 2
  // , parsed = nopt(knownOpts, shortHands, process.argv, 2)



/*

Desired API

Inputs:

textstat path/to/file.html
textstat directory
some output | textstat

Outputs

specific outputs

  fleschKincaidReadingEase          -r --flesch-kincaid-reading-ease
  fleschKincaidGradeLevel           -R --flesch-kincaid-grade-level
  gunningFogScore                   -g --gunning-fog
  colemanLiauIndex                  -c --coleman-liau
  smogIndex                         -G --smog
  automatedReadabilityIndex         -a --ari

  textLength                        -m --character-count
  letterCount                       -l --letter-count
  sentenceCount                     -s --sentences

  wordCount                         -w --words
  averageWordsPerSentence           -W --words-per-sentence
  wordsWithThreeSyllables           -t --3-syllable-words
  percentageWordsWithThreeSyllables -T --3-syllable-words-percent
  syllableCount                     -y --syllables
  averageSyllablesPerWord           -Y --syllables-per-word

-v --verbose

--test
  write to stderr and return error code if doesnt meet a particular limit


  textstat doc.txt --test --



*/