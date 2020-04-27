const inquirer = require('inquirer');
const questions = [
  {
    type: 'number',
    name: 'guessNumber',
    message: 'Enter a number between 1 and 10',
    filter: input => {
      return new Promise((resolve, reject) => {
        if (!isNaN(input)) resolve(input);
        else reject('Error! You need to enter a number!');
      });
    }
  }
];

let guesses = 4;
let won = false;

const askQuestion = async questions => {
  const randomNumber = Math.floor(Math.random() * 10); 
  do {
    response = await inquirer.prompt(questions);
    guessNumber = response.guessNumber;
    showStatus(guessNumber, randomNumber);
    console.log(`${guesses} guesses left!`);
    if (randomNumber === guessNumber) won = true;
    guesses--;
  } while (!won && guesses >= 0);
  showScore();
};

const showStatus = (guessNumber, randomNumber) => {
  if (guessNumber > randomNumber) console.log('Your number is bigger!');
  else if (guessNumber < randomNumber) console.log('Your number is smaller!');
};

const showScore = () => {
  if (won) console.log('You won!');
  else console.log('You Lost!');
};

askQuestion(questions);