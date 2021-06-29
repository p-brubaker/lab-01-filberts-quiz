  import { countsAsYes } from './utils.js'; 
  
  // get the button element
const launchQuiz = document.getElementById('click-me')
const results = document.getElementById('results');

  // add "click" event listener to the button
launchQuiz.addEventListener('click', () => {
    let userName = prompt('What is our name?');
    let wantsQuiz = confirm('Do you want to start the quiz?');
    if (!wantsQuiz) {
      return
    } 
    else {
      let totalCorrect = 0;
      let ans1 = prompt('Are filberts the best nut?');
      if (countsAsYes(ans1)) totalCorrect++;
      let ans2 = prompt('Do you love filberts?');
      if (countsAsYes(ans2)) totalCorrect++;
      let ans3 = prompt('Are roasted filberts the best kind of filbert?');
      if (countsAsYes(ans3)) totalCorrect++;
      alert('Quiz complete! Ready for your results?');
      results.textContent = `Okay ${userName}, you got ${totalCorrect}/3 correct`;
    }
})
  //   confirm the user wants to start the quiz
  //   if they do -- prompt for at least 3 questions and store the answer
  //   for each answer, check if the user entered a correct value
  //   track the number of correct answers
  //   at the end of the quiz, update the results section with the number of correct answers
