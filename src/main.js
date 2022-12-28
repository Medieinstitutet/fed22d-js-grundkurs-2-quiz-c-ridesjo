import './style/style.scss';
import { gsap } from 'gsap';

function chooseCategory() {
  //document.querySelector('frontPage').style.display = 'block';   ??
  //document.querySelector('categoryText').style.display = 'block';
  //document.querySelector('choice1', 'choice2', 'choice3').style.display = 'block';
} /* Anropa denna funktion i stället för nextQuestion i funktionen RestartGame??  */

const category = [
  {
    categoryText: 'Välj kategori:',
    categoryOptions: ['choice1', 'choice2', 'choice3'],
    userCategory: ' ',
  },
];

document.querySelector('#showTime').style.display = 'none';
document.querySelector('#timer').style.display = 'none';

const categoryDiv = document.querySelector('categoryContainer'); // Skapar hållare för kategorier
const choice1Btn = document.querySelector('#choice1'); // Skapar knappar för kategorier
const choice2Btn = document.querySelector('#choice2');
const choice3Btn = document.querySelector('#choice3');
const questionText = document.querySelector('#questionText');
let haveAnswered = false;

choice1Btn.addEventListener('click', checkChoice); // Lägger till click-event till knapparna
choice2Btn.addEventListener('click', checkChoice);
choice3Btn.addEventListener('click', checkChoice);

let currentTarget = 0;
let currentQuestion = 0;

function checkChoice(e) {
  // Skapar funktion för val av kategori
  const userCategory = e.currentTarget.innerHTML;
  document.querySelector('.startGamePage').style.display = 'block';
  document.querySelector('.questionPage').style.display = 'block';

  const userChoice = category[currentTarget].userChoice;
  if (userCategory === 'Film') {
    document.querySelector('h1').style.display = 'none';
    console.log('Film'); // Skriv ut vilken kategori som valts
    document.querySelector('#showChoice').innerHTML = `Film`; // Visar vilken kategori som valts
    gsap.to('#showChoice', { opacity: 0.5, delay: 1, repeat: -1, yoyo: true });
  }
  if (userCategory === 'Musik') {
    document.querySelector('h1').style.display = 'none';
    console.log('Musik');
    document.querySelector('#showChoice').innerHTML = `Musik`;
    gsap.to('#showChoice', { opacity: 0.5, delay: 1, repeat: -1, yoyo: true });
  }
  if (userCategory === 'Familj') {
    document.querySelector('h1').style.display = 'none';
    console.log('Familj');
    document.querySelector('#showChoice').innerHTML = `Familj`;
  }
  document.querySelector('#categoryContainer').style.display = 'none';
  gsap.to('#showChoice', { opacity: 0.5, delay: 1, repeat: -1, yoyo: true });
}

let player = 0;

document.querySelector('#startGameBtn').addEventListener('click', startGame);

document.querySelector('.startGamePage').style.display = 'none';
document.querySelector('.questionPage').style.display = 'none';

function startGame() {
  console.log('startGame');

  player = document.querySelector('#playerInput').value; // Sparar spelarens namn

  document.querySelector('#player').style.display = 'none'; // Namnet döljs

  nextQuestion();
  document.querySelector('#showTime').style.display = 'block';
  document.querySelector('#timer').style.display = 'block';
}

const questionsChoice1 = [
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
];

const questionsChoice3 = [
  // Frågor för kategori 3 (familj)
  {
    questionText: 'Vem är bäst på tennis?',
    answerOptions: ['Liam', 'Elin', 'Camilla'],
    correctAnswer: 'Liam',
  },
  {
    questionText: 'Vem har värst morgonhumör?',
    answerOptions: ['Emelie', 'Elin', 'Camilla'],
    correctAnswer: 'Elin',
  },
];

function shuffleArray(arrayToShuffle) {
  for (let i = arrayToShuffle.length - 1; i > 0; i--) {
    let randomPosition = Math.floor(Math.random() * (i + 1));
    let temp = arrayToShuffle[i];

    arrayToShuffle[i] = arrayToShuffle[randomPosition];
    arrayToShuffle[randomPosition] = temp;
  }
  return arrayToShuffle;
}

console.log(shuffleArray(questionsChoice1));

const questionDiv = document.querySelector('#questionText');
const answer1Btn = document.querySelector('#answer1');
const answer2Btn = document.querySelector('#answer2');
const answer3Btn = document.querySelector('#answer3');

answer1Btn.addEventListener('click', checkAnswer);
answer2Btn.addEventListener('click', checkAnswer);
answer3Btn.addEventListener('click', checkAnswer);

let points = 0;

function checkAnswer(e) {
  if (haveAnswered === false) {
    // Om frågan inte har besvarats, ska nedan kod köras.
    const userAnswer = e.currentTarget.innerHTML; // Vilket svarsalternativ spelaren väljer

    const correctAnswer = questionsChoice1[currentQuestion - 1].correctAnswer; // -1 för att få rätt svar innan nästa fråga
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

document.querySelector('#nextQuestBtn').addEventListener('click', startGame);
document.querySelector('#showTime').style.display = 'none';
document.querySelector('#timer').style.display = 'none';

function nextQuestion() {
  haveAnswered = false;
  if (currentQuestion >= questionsChoice1.length) {
    // När frågorna är slut
    gameOver();
    return;
  }

  document.getElementById('answer1').style.color = 'white';
  document.getElementById('answer2').style.color = 'white';
  document.getElementById('answer3').style.color = 'white';

  questionText.innerHTML = questionsChoice1[currentQuestion].questionText;
  answer1Btn.innerHTML = questionsChoice1[currentQuestion].answerOptions[0];
  answer2Btn.innerHTML = questionsChoice1[currentQuestion].answerOptions[1];
  answer3Btn.innerHTML = questionsChoice1[currentQuestion].answerOptions[2];

  currentQuestion++; // currentQuestion + 1 (går vidare till nästa fråga)
}
document.querySelector('#resultBtn').addEventListener('click', gameOver);

document.querySelector('#restartGameBtn').addEventListener('click', restartGame);

function restartGame() {
  document.querySelector('#gameOver').style.display = 'none';
  document.querySelector('#questionsContainer').classList.remove('hidden');
  document.querySelector('#nextQuestBtn').style.display = 'block';
  currentQuestion = 0;
  points = 0;
  document.querySelector('#showTime').style.display = 'block';
  document.querySelector('#timer').style.display = 'block';
  // shuffleArray(questionsChoice1);     Denna rad behövs inte om jag startar från kategorisidan
  nextQuestion(); // Här vill jag komma till kategorisidan i stället för frågesidan
}

function gameOver() {
  document.querySelector('#gameOver').style.display = 'block';
  if (currentQuestion === questionsChoice1.length) {
    document.querySelector('#resultBtn').style.display = 'block';
    document.querySelector('#nextQuestBtn').style.display = 'none';
    return;
  }
}

const resultBtn = document.querySelector('#resultBtn');
resultBtn.addEventListener('click', showResult);

function showResult() {
  document.querySelector('#questionsContainer').classList.add('hidden');
  document.querySelector('#nextQuestBtn').style.display = 'none';
  document.querySelector('#pointsContainer').innerHTML = `Du fick ${points} poäng!`;
  document.querySelector('#showTime').style.display = 'none';
  document.querySelector('#timer').style.display = 'none';
  document.querySelector('#resultBtn').style.display = 'none';

  gsap.to('#pointsContainer', { opacity: 0.5, delay: 1, repeat: -1, yoyo: true });
}
