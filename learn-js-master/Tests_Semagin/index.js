export function repeatWord(word, count) {
   let Words = "";
   for (let i = 1; i <= count; i++) {
      Words += word + i + ', ';
   }

   return Words;
};

//repeatWord('word',-1);