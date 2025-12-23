//
// This is only a SKELETON file for the "Parallel Letter Frequency" exercise. It"s been provided as a
// convenience to get you started writing code faster.
//

export const parallelLetterFrequency = async (texts) => {
  let acceptables = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ø", "φ", "ほ", "本"]
  let letters = {};
  let text = texts.join("")
  let characters = text.toLowerCase().split("").sort();
  let num = 1;
  for (let i = 0; i < characters.length; i++){
    if (acceptables.includes(characters[i])){
      if (characters[i] === characters[i + 1]){
      num++;
    }
    else {
      letters[characters[i]] = num;
      num = 1; 
    }
    }
  }
  
  return letters;
};