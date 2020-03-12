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

//Publication of results
function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;

    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    gameSummary.numbers++;
    console.log(gameSummary.numbers);

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    if (result === "win") {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "Ty wygrałeś!!!!"
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    } else if (result === "losse") {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Komputer wygrał :("
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Remis :\\"
        document.querySelector('[data-summary="who-win"]').style.color = "gray";
    }
}

//function stering
function startGame() {
    if (!game.playerHand) {
        return alert("wybierze dłoń!!!!")
    }

    game.aiHand = aiChoice();
    const gameResult = chceckResult(game.playerHand, game.aiHand);

    console.log(gameResult);

    publishResult(game.playerHand, game.aiHand, gameResult);

}

hands.forEach(hand => hand.addEventListener('click', handSelection));

document.querySelector('.start').addEventListener('click', startGame); 