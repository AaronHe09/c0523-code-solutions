console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  { name: 'Jason', hand: [] },
  { name: 'Ruth', hand: [] },
  { name: 'Rudy', hand: [] },
  { name: 'John', hand: [] },
];
const cardSuits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
const cardValues = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const deck = createDeck();
const shuffledDeck = _.shuffle(deck);

dealCards();
announceWinner();

function createDeck() {
  const deck = [];

  for (let i = 0; i < cardSuits.length; i++) {
    for (let o = 0; o < cardValues.length; o++) {
      const card = { suit: cardSuits[i], value: cardValues[o] };
      deck.push(card);
    }
  }
  return deck;
}

function dealCards() {
  const chunk = _.chunk(shuffledDeck, 2);

  for (let i = 0; i < players.length; i++) {
    players[i].hand = chunk[i];
  }

  console.log(players);
}

function announceWinner() {
  let winner = '';
  let array = [];

  for (let i = 0; i < players.length; i++) {
    let sum = 0;

    for (let x = 0; x < 2; x++) {
      const playersHand = players[i].hand[x].value;

      if (playersHand === 'A') {
        sum += 11;
      } else if (
        playersHand === 'J' ||
        playersHand === 'Q' ||
        playersHand === 'K'
      ) {
        sum += 10;
      } else {
        sum += playersHand;
      }
    }

    array.push({ player: players[i].name, value: sum });
  }

  array = _.sortBy(array, (p) => p.value);
  winner = array[3].player;
  console.log('The Winner is ' + winner);
  console.log(array);
}
