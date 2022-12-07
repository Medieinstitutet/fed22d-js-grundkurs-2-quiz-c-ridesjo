import './style/style.scss';

const gameDescText = 'Välkommen till vårt familje-quiz!';
const descriptionText = document.querySelector('#descriptionText');

descriptionText.innerHTML = descText;

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
    
]