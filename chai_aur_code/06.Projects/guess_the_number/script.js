let randomNumber = Math.floor(Math.random() * 10) + 1;

const submit = document.querySelector('#subt')

const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');

const lastResult = document.querySelector('.lastResult')

const result = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultPass')

const p = document.createElement('p');

let prevGuess = []

let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();

        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number!')
    }else if(guess < 1){
        alert('Please enter a number more then 1!')
    }else if(guess > 100){
        alert('Please enter a number lesser then 100!')
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage('Game Over. Random number was', randomNumber);
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){

    if(randomNumber == guess){
        displayGuess('Congratulation you win!')
        endGame()
    }else if(randomNumber < guess){
       displayGuess('High: Better Luck next time !')
    }else if(randomNumber > guess){
        displayGuess('Low: Better Luck next time ')
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++
    lastResult.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    result.innerHTML = `<h2>${message}</h2>` 
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start a new game </h2>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}


function newGame(){
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function(e){
        randomNumber = Math.floor(Math.random() * 10) + 1;
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        lastResult.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}

