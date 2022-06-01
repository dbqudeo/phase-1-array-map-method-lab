const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  let answerArray = []

  for(let j=0;j<tutorials.length;j++) {
      let sentence = tutorials[j]; // 'what does the this keyword mean?'
      let words = sentence.split(" ");
      let answer = ""

      for(let i=0;i<words.length;i++) {
          let word = words[i]
          let firstLetterCapital = word[0].toUpperCase() 
          let modifiedWord = firstLetterCapital + word.slice(1) 

          if(i == 0) {
              answer = answer + modifiedWord;
          }else{
              answer = answer + " " + modifiedWord;
          }

      }
      answerArray.push(answer)
  }
  return answerArray;
}
