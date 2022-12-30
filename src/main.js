import './style/style.scss';      // Importerar style
import { gsap } from 'gsap';      // Importerar gsap som behövs för animering

function chooseCategory() {     // Funktion för att visa startsidan
  document.querySelector('h1').classList.remove('hidden');     // Visar/tar fram det som ska synas på sidan
  document.querySelector('#categoryContainer').classList.remove('hidden');
  document.querySelector('#questionsContainer').classList.add('hidden');     // Döljer det som inte ska synas
  document.querySelector('#showTime').classList.add('hidden'); 
  document.querySelector('#timer').classList.add('hidden'); 
  document.querySelector('#resultBtn').classList.remove('visible'); 
}

const category = [      // Skapar array för de olika kategorierna
  {
    categoryText: 'Välj kategori:',
    categoryOptions: ['choice1', 'choice2', 'choice3'],
    userCategory: ' ',
  },
];

const choice1Btn = document.querySelector('#choice1'); // Skapar knappar för kategorier
const choice2Btn = document.querySelector('#choice2');
const choice3Btn = document.querySelector('#choice3');
const questionText = document.querySelector('#questionText');
let haveAnswered = false;     // Skapar variabel för att inte kunna svara flera gånger på samma fråga

choice1Btn.addEventListener('click', checkChoice); // Lägger till click-event till knapparna
choice2Btn.addEventListener('click', checkChoice);
choice3Btn.addEventListener('click', checkChoice);

let currentTarget = 0;
let currentQuestion = 0;
let chosenCat = [];

function checkChoice(e) {      // Skapar funktion för val av kategori 
  const userCategory = e.currentTarget.innerHTML;
  document.querySelector('.startGamePage').classList.remove('hidden');
  document.querySelector('.questionPage').classList.remove('hidden');
  document.querySelector('#player').classList.remove('hidden');

  if (userCategory === 'Film') {
    chosenCat = questionsChoice1;
    document.querySelector('h1').classList.add('hidden'); 
    console.log('Film');      // Skriv ut i konsollen vilken kategori som valts
    document.querySelector('#showChoice').innerHTML = `Film`;       // Visar på skärmen vilken kategori som valts
    gsap.to('#showChoice', { opacity: 0.5, delay: 1, repeat: -1, yoyo: true });  // Animering av vald kategori
  }
  if (userCategory === 'Musik') {
    chosenCat = questionsChoice2;
    document.querySelector('h1').classList.add('hidden'); 
    console.log('Musik');
    document.querySelector('#showChoice').innerHTML = `Musik`;
    gsap.to('#showChoice', { opacity: 0.5, delay: 1, repeat: -1, yoyo: true });
  }
  if (userCategory === 'Familj') {
    chosenCat = questionsChoice3;
    document.querySelector('h1').classList.add('hidden'); 
    console.log('Familj');
    document.querySelector('#showChoice').innerHTML = `Familj`;
  }
  document.querySelector('#categoryContainer').classList.add('hidden'); 
  gsap.to('#showChoice', { opacity: 0.5, delay: 1, repeat: -1, yoyo: true });
}

let player = 0;

document.querySelector('#startGameBtn').addEventListener('click', startGame);

document.querySelector('.startGamePage').classList.add('hidden'); 
document.querySelector('.questionPage').classList.add('hidden'); 
document.querySelector('#nextQuestBtn').classList.add('hidden'); 
document.querySelector('#questionsContainer').classList.add('hidden'); 

function startGame() {      // Funktion för att visa sid 2
  console.log('startGame');  
  player = document.querySelector('#playerInput').value; // Sparar spelarens namn
  document.querySelector('#player').classList.add('hidden');  // Namnet döljs
 
  nextQuestion();
  document.querySelector('#showTime').classList.remove('hidden');
  document.querySelector('#timer').classList.remove('hidden');
  document.querySelector('#questionsContainer').classList.remove('hidden');
  document.querySelector('#nextQuestBtn').classList.remove('hidden');
}

const questionsChoice1 = [      // Skapar array för frågor och svarsalternativ
  // Frågor för kategori 1 (film)
  {
    questionText: 'Vem hissades upp i flaggstången i Lönneberga?',
    answerOptions: ['Karl-Alfred', 'Emils mamma', 'Ida'],
    correctAnswer: 'Ida',
  },
  {
    questionText: 'Vad heter Ronja Rövardotters vän?',
    answerOptions: ['Birk', 'Bark', 'Burk'],
    correctAnswer: 'Birk',
  },
  {
    questionText: 'Vad heter årets julkalender?',
    answerOptions: ['Prinskorven som försvann', 'Kronprinsen som försvann', 'Kronan som försvann'],
    correctAnswer: 'Kronprinsen som försvann',
  },
  {
    questionText: 'Vad bor Svampbob Fyrkant i?',
    answerOptions: ['En ubåt', 'En ananas', 'En snäcka'],
    correctAnswer: 'En ananas',
  },
  {
    questionText: 'Vad förvandlas Chihiros föräldrar till i början av Spirited away?',
    answerOptions: ['Grisar', 'Kor', 'Getter'],
    correctAnswer: 'Grisar',
  },
  {
    questionText: 'Vilken färg har huvudpersonen i Megamind?',
    answerOptions: ['Röd', 'Grön', 'Blå'],
    correctAnswer: 'Blå',
  },
  {
    questionText: 'Vilket djur är bussen i Totoro?',
    answerOptions: ['Kanin', 'Hund', 'Katt'],
    correctAnswer: 'Katt',
  },
  {
    questionText: 'Vilket spöke är hungrigast i Spookys?',
    answerOptions: ['Gulp', 'Freezy', 'Splash'],
    correctAnswer: 'Gulp',
  },
  {
    questionText: 'Vad har Harry Potter för husdjur?',
    answerOptions: ['En orange katt', 'En grön orm', 'En vit uggla'],
    correctAnswer: 'En vit uggla',
  },
  {
    questionText: 'Vad heter det gröna trollet?',
    answerOptions: ['Booba', 'Shrek', 'Trolle'],
    correctAnswer: 'Shrek',
  },
];

const questionsChoice2 = [
  // Frågor för kategori 2 (musik)
  {
    questionText: 'Vem sjunger "Dans och håll igång"',
    answerOptions: ['Hasse Andersson', 'Lasse Alfredsson', 'Hasse Albertsson'],
    correctAnswer: 'Hasse Andersson',
  },
  {
    questionText: 'Vad heter låten som Tusse sjöng i Melodifestivalen?',
    answerOptions: ['Friends', 'Voices', 'Blue'],
    correctAnswer: 'Voices',
  },
  {
    questionText: 'Vilket band sjunger om Maja Piraya?',
    answerOptions: ['Mora Träsk', 'Electric Banana Band', 'Sean Banan'],
    correctAnswer: 'Electric Banana Band',
  },
  {
    questionText: 'Galen groda som sjunger',
    answerOptions: ['Grodan Boll', 'Crazy Frog', 'Kermit'],
    correctAnswer: 'Crazy Frog',
  },
  {
    questionText: 'Vad heter bandet som Emelie har på LP?',
    answerOptions: ['Green Day', 'Weezer', 'The Smashing Pumpkins'],
    correctAnswer: 'Weezer',
  },
  /* {
    questionText: '',
    answerOptions: ['', '', ''],
    correctAnswer: '',
  },
  {
    questionText: '',
    answerOptions: ['', '', ''],
    correctAnswer: '',
  },
  {
    questionText: '',
    answerOptions: ['', '', ''],
    correctAnswer: '',
  },
  {
    questionText: '',
    answerOptions: ['', '', ''],
    correctAnswer: '',
  },
  {
    questionText: '',
    answerOptions: ['', '', ''],
    correctAnswer: '',
  }, */
];

const questionsChoice3 = [
  // Frågor för kategori 3 (familj)
  {
    questionText: 'Vem är bäst på tennis?',
    answerOptions: ['Liam', 'Elin', 'Camilla'],
    correctAnswer: 'Liam',
  },
  {
    questionText: 'Vem har sämst morgonhumör?',
    answerOptions: ['Emelie', 'Elin', 'Camilla'],
    correctAnswer: 'Elin',
  },
  {
    questionText: 'Hur många gummiankor har Elin?',
    answerOptions: ['15', '12', '7'],
    correctAnswer: '15',
  },
  {
    questionText: 'Vad innebär det att ”göra en Elin”?',
    answerOptions: ['Komma hem med trasiga skor', 'Trampa i hundbajs', 'Tappa nudlarna i vasken'],
    correctAnswer: 'Tappa nudlarna i vasken',
  },
  {
    questionText: 'Vem har varit med i en talangjakt (sång)?',
    answerOptions: ['Camilla', 'Emelie', 'Elin'],
    correctAnswer: 'Camilla',
  },
  {
    questionText: 'Vilken maträtt skulle Liam välja?',
    answerOptions: ['Nudlar', 'Makaroner och köttbullar', 'Sushi'],
    correctAnswer: 'Sushi',
  },
  {
    questionText: 'Vilka är de största godisråttorna?',
    answerOptions: ['Emelie och Elin', 'Camilla och William', 'Liam och Emelie'],
    correctAnswer: 'Camilla och William',
  },
  {
    questionText: 'Vem sover längst?',
    answerOptions: ['Mio', 'William', 'Elin'],
    correctAnswer: 'Elin',
  },
  {
    questionText: 'Vad heter Liams favoritpokemón?',
    answerOptions: ['Pikachu', 'Mewtwo', 'Meowth'],
    correctAnswer: 'Mewtwo',
  },
  {
    questionText: 'Vem började spela gitarr som sexåring?',
    answerOptions: ['Emelie', 'William', 'Camilla'],
    correctAnswer: 'Emelie',
  },
];

function shuffleArray(arrayToShuffle) {     // Funktion för att slumpa frågorna
  for (let i = arrayToShuffle.length - 1; i > 0; i--) {
    let randomPosition = Math.floor(Math.random() * (i + 1));
    let temp = arrayToShuffle[i];

    arrayToShuffle[i] = arrayToShuffle[randomPosition];
    arrayToShuffle[randomPosition] = temp;
  }
  return arrayToShuffle;
}

console.log(shuffleArray(chosenCat));

const questionDiv = document.querySelector('#questionText');
const answer1Btn = document.querySelector('#answer1');
const answer2Btn = document.querySelector('#answer2');
const answer3Btn = document.querySelector('#answer3');

answer1Btn.addEventListener('click', checkAnswer);
answer2Btn.addEventListener('click', checkAnswer);
answer3Btn.addEventListener('click', checkAnswer);

let points = 0;

function checkAnswer(e) {     // Funktion för att kontrollera svar och ge/dra av poäng
  if (haveAnswered === false) {
    // Om frågan inte har besvarats, ska koden nedanför köras.
    const userAnswer = e.currentTarget.innerHTML; // Vilket svarsalternativ spelaren väljer

    const correctAnswer = chosenCat[currentQuestion - 1].correctAnswer; // -1 för att få rätt svar innan nästa fråga
    if (userAnswer === correctAnswer) {
      // Jämför spelarens svar med det rätta svaret
      points++, // Ger 1 poäng vid rätt svar
        console.log('Rätt svar!');
      e.currentTarget.style.color = 'lightgreen';
    } else {
      points--, // Ger -1 poäng vid fel svar
        console.log('Fel svar!'),
        (e.currentTarget.style.color = 'red');
    }
    haveAnswered = true; // Sätts till sant för att inte kunna svara på frågan igen
  }
}

document.querySelector('#nextQuestBtn').addEventListener('click', nextQuestion);
document.querySelector('#showTime').classList.add('hidden'); 
document.querySelector('#timer').classList.add('hidden'); 

function nextQuestion() {       // Funktion för nästa fråga
  haveAnswered = false;
  if (currentQuestion >= chosenCat.length) {
    // När frågorna är slut
    console.log("hej");
    document.querySelector('#nextQuestBtn').classList.add('hidden'); 
    document.querySelector('#resultBtn').classList.add('visible'); 
   // gameOver();
    return;
  }

  document.getElementById('answer1').style.color = 'white';     // Stylar om svaren till vit text (för att få bort tidigare röd/grönmarkering)
  document.getElementById('answer2').style.color = 'white';
  document.getElementById('answer3').style.color = 'white';

  questionText.innerHTML = chosenCat[currentQuestion].questionText;
  answer1Btn.innerHTML = chosenCat[currentQuestion].answerOptions[0];
  answer2Btn.innerHTML = chosenCat[currentQuestion].answerOptions[1];
  answer3Btn.innerHTML = chosenCat[currentQuestion].answerOptions[2];

  currentQuestion++; // detsamma som currentQuestion + 1 (går vidare till nästa fråga)
}
document.querySelector('#resultBtn').addEventListener('click', gameOver);
document.querySelector('#restartGameBtn').addEventListener('click', restartGame);

function restartGame() {      // Funktion för att spela igen
  document.querySelector('#gameOver').classList.add('hidden'); 
  document.querySelector('#questionsContainer').classList.remove('hidden');
  document.querySelector('#nextQuestBtn').classList.add('hidden'); 
  currentQuestion = 0;
  points = 0;
  document.querySelector('#showTime').classList.remove('hidden');
  document.querySelector('#timer').classList.remove('hidden');
  document.querySelector('#resultBtn').classList.add('hidden'); 
  chooseCategory();
}

function gameOver() {     // Funktion för att visa sista sidan; gameover-sidan.
  document.querySelector('#gameOver').classList.remove('hidden');
  if (currentQuestion >= chosenCat.length) {
    
    document.querySelector('#resultBtn').classList.remove('visible');
    document.querySelector('#questionsContainer').classList.add('hidden');
    return;    
  }
}

//document.querySelector('#questionsContainer').classList.add('hidden'); 
document.querySelector('#questionsContainer').classList.remove('hidden');
const resultBtn = document.querySelector('#resultBtn');
resultBtn.addEventListener('click', showResult);

function showResult() {     // Funktion för att visa resultat på sista sidan
  document.querySelector('#questionsContainer').classList.add('hidden');
  document.querySelector('#nextQuestBtn').classList.add('hidden'); 
  document.querySelector('#pointsContainer').innerHTML = `Du fick ${points} poäng av 10!`;
  document.querySelector('#showTime').classList.add('hidden'); 
  document.querySelector('#timer').classList.add('hidden'); 
  document.querySelector('#resultBtn').classList.add('hidden'); 

  gsap.to('#pointsContainer', { opacity: 0.5, delay: 1, repeat: -1, yoyo: true });

  if (points == 10) {     // Olika meddelanden beroende på antal poäng
    console.log('Alla rätt!');
    document.querySelector('.pointsMess1').innerHTML = `Grattis!! Det där gick ju strålande! 🎉`;
    }
    else if (points <= 9 && points >= 5) {
    console.log('Bra jobbat!');
    document.querySelector('.pointsMess2').innerHTML = `Nice! 😎`;
    }
    else {
    console.log('Bättre lycka nästa gång!');
    document.querySelector('.pointsMess3').innerHTML = `Bättre lycka nästa gång! 😐`;
    }
  }




