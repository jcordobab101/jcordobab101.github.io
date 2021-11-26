//your code here
let myFriend = 'Piggy'

///////////////
function greetings() {
  //also your code here
  return `Greetings ${myFriend}.`
}

//leave this line unchanged to console log the results
console.log('results: ', greetings());

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = greetings;
}
