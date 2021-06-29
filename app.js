  // get the button element
  // add "click" event listener to the button
  //   confirm the user wants to start the quiz
  //   if they do -- prompt for at least 3 questions and store the answer
  //   for each answer, check if the user entered a correct value
  //   track the number of correct answers
  //   at the end of the quiz, update the results section with the number of correct answers

  const quizButton = document.getElementById("click-me");
  const results = document.getElementById("results");

  quizButton.addEventListener("click", ()=>{
    console.log("i am being clicked!")
  })
