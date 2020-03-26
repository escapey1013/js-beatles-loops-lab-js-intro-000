// add solution here
var array = []

function theBeatlesPlay(musicians, instruments) {
for (let i = 0; i < musicians.length; i += 1) {
  array.push(`${musicians[i]} plays ${instruments[i]}`);
}
return array
}

// var exclamationFacts = []
//
// function johnLennonFacts(facts) {
// for (let i = 0; i < facts.length; i += 1) {
//   exclamationFacts.push(`${facts[i]}!!!`);
// }
// return exclamationFacts
// }

function johnLennonFacts(facts) {
  for (let i = 0; i < facts.length; i += 1) {
    var fact = facts[i];
    facts[i] = `${fact}!!!`;
  }
  return facts
}

var array = [];

function iLoveTheBeatles(number) {
  do {
    array.push("I love the Beatles!")
    number += 1
  } while (number < 15);
  return array;
}
