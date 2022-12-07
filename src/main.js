import 'style.scss';

const gameDescText = 'Välkommen till vårt familje-quiz!';
const gameDescription = document.querySelector('#gameDescription');

gameDescription.innerHTML = gameDescText;

document.querySelector('#startGameBtn').addEventListener('click', startGame);

let player = '';

const questions = [
{
    questionText: 'Vem hissades upp i flaggstången i Lönneberga?',
    answerOptions: [
        'Karl-Alfred',
        'Emils mamma',
        'Ida'
    ],
    correctAnswer: 'Ida',
},
{
    questionText: 'Vad heter Ronja Rövardotters vän?'
    answerOptions: [
        'Birk',
        'Bark',
        'Burk'
    ],
    correctAnswer: 'Birk',
},
{
    questionText: 'Vad heter årets julkalender?'
    answerOptions: [
        'Prinskorven som försvann',
        'Kronprinsen som försvann',
        'Kronan som försvann'
    ],
    correctAnswer: 'Kronprinsen som försvann',
},
{
    questionText: 'Vad bor Svampbob Fyrkant i?'
    answerOptions: [
        'En ubåt',
        'En ananas',
        'En snäcka'
    ],
    correctAnswer: 'En ananas',
},
{
    questionText: 'Vad förvandlas Chihiros föräldrar till i början av Spirited away?'
    answerOptions: [
        'Grisar',
        'Kor',
        'Getter'
    ],
    correctAnswer: 'Grisar',
},
{
    questionText: 'Vilken färg har huvudpersonen i Megamind?'
    answerOptions: [
        'Röd',
        'Grön',
        'Blå'
    ],
    correctAnswer: 'Blå',
},
{
    questionText: 'Vilket djur är bussen i Totoro?'
    answerOptions: [
        'Kanin',
        'Hund',
        'Katt'
    ],
    correctAnswer: 'Katt',
},
{
    questionText: 'Vilket spöke är hungrigast i Spookys?'
    answerOptions: [
        'Gulp',
        'Freezy',
        'Splash'
    ],
    correctAnswer: 'Gulp',
},
{
    questionText: 'Vad har Harry Potter för husdjur?'
    answerOptions: [
        'En orange katt',
        'En grön orm',
        'En vit uggla'
    ],
    correctAnswer: 'En vit uggla',
},
{
    questionText: 'Vad heter det gröna trollet?'
    answerOptions: [
        'Booba',
        'Shrek',
        'Trolle'
    ],
    correctAnswer: 'Shrek',
},
    
];

function startGame() {
    console.log('startGame');

    player = document.querySelector('#playerInput').value;

    gameDescription.style.display = 'none';
    document.querySelector('#player').style.display = 'none';

    nextQuestion();
}