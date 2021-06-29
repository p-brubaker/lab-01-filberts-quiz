  // get the button element
  // add "click" event listener to the button
  //   confirm the user wants to start the quiz
  //   if they do -- prompt for at least 3 questions and store the answer
  //   for each answer, check if the user entered a correct value
  //   track the number of correct answers
  //   at the end of the quiz, update the results section with the number of correct answers
import { isYes } from './utils.js';

const quizButton = document.getElementById('click-me');
const results = document.getElementById('results');
  
quizButton.addEventListener('click', ()=>{
    const confirmed = confirm('Would you like to start the quiz');
    console.log(confirmed);
    if (confirmed){
        const name = prompt('What is your name?');
        const ans1 = prompt('Do I hate sleeping?'); // NO is the CORRECT ANSWER
        const ans2 = prompt('Do I hate squirrels?');
        const ans3 = prompt('Do I like to bark at the UPS guy?');
        console.log(name, ans1, ans2, ans3);
        
        let score = 0;
        
        // NO is the correct answer
        // !isYes(ans1)
        // !isYes('adfigjoaidjf')
        // !false
        // true
        if (!isYes(ans1)) {
            // score++;
            score = score + 1;
        }
        console.log('score after checking ans1', score);

        if (isYes(ans2)){
            score++;
        }

        console.log('score after checking ans2', score);
        if (isYes(ans3)){
            score++;
        }
        console.log('score after checking ans3', score);

        console.log('final score', score);
        results.textContent = `${name} you got ${score} right!`;
    } else {
        console.log('user cancelled');
    }
});
