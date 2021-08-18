let letters = ['a', 'e', 'i', 'h', 'k', 'l', 'u', 'o', 'n', 'm'];

function getVowelsAndConsonants (letters){
   const vowels = [];
   const consonants = [];
 
   for(const letter of letters){
       if((letter.indexOf('a') != -1) || (letter.indexOf('e') != -1) || (letter.indexOf('i') != -1) || (letter.indexOf('o') != -1) || (letter.indexOf('u') != -1)){
           vowels.push(letter);
       }
       else{
           consonants.push(letter);
       }
   }
   return consonants ;
}
console.log(getVowelsAndConsonants(letters));