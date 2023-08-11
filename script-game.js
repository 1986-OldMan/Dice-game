let dice1 , dice2 , dice3 , dice4;
let valueDicePlayerOne = 0;
let valueDicePlayerTwo = 0;

document.getElementById('ButtonRoll').onclick = function(){
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice1').innerHTML = dice1;
    document.getElementById('dice2').innerHTML = dice2;

    valueDicePlayerOne = dice1 + dice2;
    document.getElementById('value1').innerHTML = 'Player 1 : ' + valueDicePlayerOne;
    console.log(valueDicePlayerOne);
};

document.getElementById('ButtonRollTwo').onclick = function(){
    dice3 = Math.floor(Math.random() * 6) + 1;
    dice4 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice3').innerHTML = dice3;
    document.getElementById('dice4').innerHTML = dice4;

    valueDicePlayerTwo = dice3 + dice4;
    document.getElementById('value2').innerHTML = 'Player 2 : ' + valueDicePlayerTwo;
    console.log(valueDicePlayerTwo);

    declareWinner();
};

const declareWinner = function() {
    let winnerMessage = '';

    if (valueDicePlayerOne > valueDicePlayerTwo) {

        winnerMessage = 'Player 1 wins';

    } else if (valueDicePlayerTwo > valueDicePlayerOne) {

        winnerMessage = 'Player 2 wins';

    } else {

        winnerMessage = 'It\'s a draw!';
    }

    document.getElementById('winner-player').innerHTML = winnerMessage;
    console.log(winnerMessage);
};




