//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let acceptables = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let noletters = true;
  let containsnums = false;
  const text = message.trim().split("");
  for (let i = 0; i < acceptables.length; i++){
    if (message.toLowerCase().includes(acceptables[i])){
      noletters = false;
    }
    else if (message.includes(numbers[i])){
      containsnums = true;
    }
  }

  if (message.toUpperCase() === message && text[text.length - 1] === '?' && !noletters){
    return 'Calm down, I know what I\'m doing!'
  }
  else if (message.toUpperCase() === message && !noletters){
    return 'Whoa, chill out!'
  }
  else if (text[text.length - 1] === '?'){
    return 'Sure.'
  }
  else if (noletters && !containsnums){
    return 'Fine. Be that way!'
  }
  else {
    return 'Whatever.'
  }
};
