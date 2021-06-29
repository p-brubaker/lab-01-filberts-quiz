  // get the button element
const launchQuiz = document.getElementById('click-me')

  // add "click" event listener to the button
launchQuiz.addEventListener('click', () => {
    let wantsQuiz = confirm('Do you want to start the quiz?');
    console.log(wantsQuiz);
})
  //   confirm the user wants to start the quiz
  //   if they do -- prompt for at least 3 questions and store the answer
  //   for each answer, check if the user entered a correct value
  //   track the number of correct answers
  //   at the end of the quiz, update the results section with the number of correct answers
