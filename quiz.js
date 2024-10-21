//Array med spørgsmål, samt array indeni for de forskellige svarmuligheder. 

// a=1;
// b="text";
// c=[1,2,3];
// c2={0:1,1:2,2:3};
// d=c[0];
// e={text: "noget tekst", i:42, f:[[g,h],2,3]};
// g=e.text;
// h=e.f[0][0];

const quizData = [
    {
      question: "What is the capital of France?",
      answers: [{text: "Paris", value: 0},{text:"Madrid", value: 1}, {text:"London", value: 2}, {text:"Amsterdam", value: 3}],
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: [{text: "Paris", value: 0},{text:"Madrid", value: 1} ,{text:"London", value: 2}, {text:"Amsterdam", value: 3}],
    },
  ];
  const quizResults = ["det er nummer 1", "det er nummer to", "det er nummer tre", "det er nummer 4"
  ];

  //Tager fat i HTML elementer 
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("answers");
  
  //Sætter scoren for alle kategorier til 0 fra start, så der kan tælles +1 eftersom de bliver valgt. 
  let currentQuestion = 0;
  let scores = [0,0,0,0];

  //sætter spørgsmålet ind i question HTML element
  function showQuestion() {
    let questionCard = quizData[currentQuestion];
    questionElement.innerText = questionCard.question;
  
    //Indsætter svarmuligheder, [] fjener tidligere svarmuligheder for erstatte med de nye
    optionsElement.innerHTML = [];

    //skaber de enkelte knapper for hver svarmulighed 
    questionCard.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      optionsElement.appendChild(button);

      //Når du klikker på et svar, kører funktionen onAnswerSelected
      button.addEventListener("click", onAnswerSelected);
    });
  }
  
//onAswerSelected = Eventhandler, hvad der sker ved event 
  function onAnswerSelected(e) {
    let questionCard = quizData[currentQuestion];
    //tager fat i den knap der er trykket på
    const selectedButton = e.target;
    const answerText = selectedButton.innerText;
  

  for(let i=0; i<questionCard.answers.length; ++i){
    if (questionCard.answers[i].text===answerText){
      scores[questionCard.answers[i].value]++;
    }
  }
  currentQuestion++;

  //let i=0;

  // while(i<questionCard.answers.length){
  //   if (questionCard.answers[i].text===answerText){
  //     scores[questionCard.answers[i].value]++;
  //   }
  //   ++i;
  // }
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    let max = 0;
    let maxIndex = -1;
    scores.forEach((value, index) =>{
      if(value>max){
        max=value;
        maxIndex = index;
      }
    });

    quiz.innerHTML = 
    `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${quizResults[maxIndex]}</p>
    `;
  }
  
  showQuestion();