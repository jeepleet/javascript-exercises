const reverseString = function(words) {
let s = words;
s = s.split("");
s.reverse();
s.join("");
return s.join("");


};

// Do not edit below this line
module.exports = reverseString;
