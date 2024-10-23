//Array med spørgsmål, samt array indeni for de forskellige svarmuligheder. 

// a=1;
// b="text";
// c=[1,2,3];
// c2={0:1,1:2,2:3};
// d=c[0];
// e={text: "noget tekst", i:42, f:[[g,h],2,3]};
// g=e.text;
// h=e.f[0][0];

function startQuiz() { 
	document.getElementById("hero_cover").style.display="none"; 
	document.getElementById("quiz").style.display="block"; 
}

const quizData = [
    {
      question: "Hvor meget tid har du lyst til at bruge?",
      answers: [{text: "2-4 timer om måneden", value: 0},{text:"4-6 timer om ugen", value: 1}, {text:"En enkelt dag", value: 2}, {text:"4-8 timer om måneden", value: 3}],
    },
    {
      question: "Hvad er din motivation for at hjælpe andre?",
      answers: [{text: "At opbygge nye relationer med hvor du allerede findes", value: 0},{text:"At hjælpe den individuelle person", value: 1} ,{text:"At have det sjovt samtidig med at jeg ved det gør en forskel", value: 2}, {text:"At tage ansvar og skabe konkrete løsninger for et breder publikum", value: 3}],
    },
    {
      question: "Hvad håber du at få ud af din tid hos headspace?",
      answers: [{text: "Styrke min kreativitet og finde på nye idéer til online content", value: 0},{text:"At blive bedre til at lytte og bruge min empati ", value: 1} ,{text:"At holde mange bolde i luften og opbygge en stemning ", value: 2}, {text:"At præsentere foran mange mennesker og formidle et budskab", value: 3}],
    },
    {
      question: "Hvordan har du det med at tale med andre?",
      answers: [{text: "Jeg foretrækker at arbejde i mindre teams", value: 0},{text:"Det kommer naturligt for mig, og jeg kan godt lide at fordybe mig i samtaler", value: 1} ,{text:"Jeg kan godt lide at tale med mange forskellige mennesker på en aften", value: 2}, {text:"Jeg kan godt lide at tale foran mange mennesker og præsentere foran andre", value: 3}],
    },
    {
      question: "Hvad gør dig mest glad?",
      answers: [{text: "At finde på nye idéer og være kreativ", value: 0},{text:"At tale med andre om følelser og oplevelser", value: 1} ,{text:"At være med til større events og være en del af stemningen", value: 2}, {text:"At fortælle om et emne jeg er passioneret omkring", value: 3}],
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