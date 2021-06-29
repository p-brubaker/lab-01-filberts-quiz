import { countsAsYes } from './utils.js'; 
  
const launchQuiz = document.getElementById('click-me')
const results = document.getElementById('results');

launchQuiz.addEventListener('click', () => {
    let userName = prompt('What is your name?');
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
  