const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

// We create an object that stores the current game.
const game = {
    playerHand: "",
    aiHand: "",
}
const hands = [...document.querySelectorAll('.select img')]

function aiChoice() {

    return hands[Math.floor(Math.random() * 3)].dataset.option;

    // const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
    // return aiHand;
}

//First function
function handSelection() {

    game.playerHand = this.dataset.option;

    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0  4px red';
}

function chceckResult(player, ai) {

    if (player == ai) {
        return 'draw'
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        return 'win'
    } else {
        return 'loss'
    }

}

//function stering
function startGame() {
    if (!game.playerHand) {
        return alert("wybierze dłoń!!!!")
    }

    game.aiHand = aiChoice();
    const gameResult = chceckResult(game.playerHand, game.aiHand);

}

hands.forEach(hand => hand.addEventListener('click', handSelection));

document.querySelector('.start').addEventListener('click', startGame); 