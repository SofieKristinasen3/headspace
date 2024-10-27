
// Quiz funktion, Sofie

// function startQuiz() { 
// 	document.getElementById("hero_cover").style.display="none"; 
// 	document.getElementById("quiz").style.display="block"; 
// }

const quizData = [
    {
      question: "Hvor meget tid har du lyst til at bruge?",
      answers: [{text: "2-4 timer om måneden", category: 0},{text:"4-6 timer om ugen", category: 1}, {text:"En enkelt dag", category: 2}, {text:"4-8 timer om måneden", category: 3}],
    },
    {
      question: "Hvad er din motivation for at hjælpe andre?",
      answers: [{text: "At opbygge nye relationer med hvor du allerede findes", category: 0},{text:"At hjælpe den individuelle person", category: 1} ,{text:"At have det sjovt samtidig med at jeg ved det gør en forskel", category: 2}, {text:"At tage ansvar og skabe konkrete løsninger for et breder publikum", category: 3}],
    },
    {
      question: "Hvad håber du at få ud af din tid hos headspace?",
      answers: [{text: "Styrke min kreativitet og finde på nye idéer til online content", category: 0},{text:"At blive bedre til at lytte og bruge min empati ", category: 1} ,{text:"At holde mange bolde i luften og opbygge en stemning ", category: 2}, {text:"At præsentere foran mange mennesker og formidle et budskab", category: 3}],
    },
    {
      question: "Hvordan har du det med at tale med andre?",
      answers: [{text: "Jeg foretrækker at arbejde i mindre teams", category: 0},{text:"Det kommer naturligt for mig, og jeg kan godt lide at fordybe mig i samtaler", category: 1} ,{text:"Jeg kan godt lide at tale med mange forskellige mennesker på en aften", category: 2}, {text:"Jeg kan godt lide at tale foran mange mennesker og præsentere foran andre", category: 3}],
    },
    {
      question: "Hvad gør dig mest glad?",
      answers: [{text: "At finde på nye idéer og være kreativ", category: 0},{text:"At tale med andre om følelser og oplevelser", category: 1} ,{text:"At være med til større events og være en del af stemningen", category: 2}, {text:"At fortælle om et emne jeg er passioneret omkring", category: 3}],
    },
  ];
  const quizResults = [
    "SoMe coordinator! <br> Arbejdet med sociale medier er lige noget for dig, fordi du elsker at skabe nye relationer og netværke med forskellige mennesker. <br> Du trives i samarbejde med andre, og du nyder at være kreativ, både når det gælder indhold og idéer. <br> At tænke ud af boksen og finde på nye måder at engagere folk på, er noget, der virkelig motiverer dig.",
    "ungerådgiver! <br> Du brænder for at hjælpe andre på et personligt plan og sætter pris på ægte øjenkontakt, fordi du er god til at sætte dig i andres sted. <br> Din følsomhed gør det nemt for folk at åbne op for dig, og de føler sig hurtigt set og forstået i din tilstedeværelse",
    "events coordinator! <br>  Du elsker at være omkring mange forskellige mennesker og trives i et dynamisk miljø med flere ting i gang samtidig. <br> At kunne gøre en forskel, mens du skaber sjove og mindeværdige oplevelser for andre, er det, der gør dig til en dygtig eventkoordinator. <br> For dig handler det om at kombinere glæde med overblik og skabe noget særligt ", 
    "formidler! <br> Du er passioneret og elsker at dele din entusiasme med andre.<br>  Du er ikke bange for at tage ansvar, og du trives med at stå foran mange mennesker og fortælle om det, du brænder for. <br>  At formidle dine idéer og inspirere andre er noget, der virkelig motiverer dig. "
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
  
    //Indsætter svarmuligheder, [] fjener tidligere svarmuligheder for erstatte med de nye, ved at indsætte et tomt array
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
  
/*onAswerSelected = Eventhandler, hvad der sker ved event 
eventarguments indeholder relevant information omkring en event, 
såsom hvilken button der er blevet trykket på i dette tilfælde.*/

  function onAnswerSelected(eventarguments) {
    let questionCard = quizData[currentQuestion];
    //tager fat i den knap der er trykket på
    const selectedButton = eventarguments.target;
    const buttonText = selectedButton.innerText;
  
    for(let i=0; i<questionCard.answers.length; ++i) {
      let answer = questionCard.answers[i];
      if (answer.text===buttonText) {
        scores[answer.category]++;
      }
    }
    currentQuestion++;

  //let i=0;

  // while(i<questionCard.answers.length){
  //   if (questionCard.answers[i].text===answerText){
  //     scores[questionCard.answers[i].category]++;
  //   }
  //   ++i;
  // }
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  //score bliver talt om, samt hvilken plads der er størst. 
  function showResult() {
    let maxScore = 0;
    let maxCategory = 0;
    scores.forEach((score, category) => {
      if(score>maxScore) {
        maxScore = score;
        maxCategory = category;
      }
    });

    //quizzen indre HTML bliver erstattet med resultatet. $ lader js blive indsat i html 
    quiz.innerHTML = 
    `
      <p class="quiz_result"> <b>Du passer godt som</b> ${quizResults[maxCategory]} </p>
      <button id="cta_button">Bliv Frivillig!</button>
    `;
      
    //CTA knap i slutningen af quizzen kører Jacques javascript under tilmeldingsformular.js 
      let button = document.getElementById("cta_button"); 
      button.onclick = function() {
        modal.style.display = "block";
        populateDropdown(); // Sørg for at drop-down bliver fyldt
    }
  }
  
  showQuestion();