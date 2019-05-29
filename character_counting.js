var args = process.argv.slice(2);

function countLetters(str) {
  var string = str[0];
  string = string.replace(/\s/g, '');
  var output = {};
  for (let i = 0; i < string.length; i++) {
      if( (string.match(new RegExp(string[i], "g"))).length > 0) {
        output[string[i]] = (string.match(new RegExp(string[i], "g"))).length;
      }
  }
  return output;
}

console.log(countLetters(args));



