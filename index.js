alert('Привет! Для удобства я вывел в консоль все значения: выбранный древний, сложность, колода по уровням, колода общая и карта выпавшая из колоды.')

const ancientsLink = {
  azathoth: './assets/Ancients/Azathoth.jpg',
  cthulhu: './assets/Ancients/Cthulthu.jpg',
  iogSothoth: './assets/Ancients/IogSothoth.jpg',
  shubNiggurath: './assets/Ancients/ShubNiggurath.jpg',
};

const blueLink = {
  blue1: './assets/MythicCards/blue/blue1.jpg',
  blue2: './assets/MythicCards/blue/blue2.jpg',
  blue3: './assets/MythicCards/blue/blue3.jpg',
  blue4: './assets/MythicCards/blue/blue4.jpg',
  blue5: './assets/MythicCards/blue/blue5.jpg',
  blue6: './assets/MythicCards/blue/blue6.jpg',
  blue7: './assets/MythicCards/blue/blue7.jpg',
  blue8: './assets/MythicCards/blue/blue8.jpg',
  blue9: './assets/MythicCards/blue/blue9.jpg',
  blue10: './assets/MythicCards/blue/blue10.jpg',
  blue11: './assets/MythicCards/blue/blue11.jpg',
  blue12: './assets/MythicCards/blue/blue12.jpg',
};

const brownLink = {
  brown1: './assets/MythicCards/brown/brown1.jpg',
  brown2: './assets/MythicCards/brown/brown2.jpg',
  brown3: './assets/MythicCards/brown/brown3.jpg',
  brown4: './assets/MythicCards/brown/brown4.jpg',
  brown5: './assets/MythicCards/brown/brown5.jpg',
  brown6: './assets/MythicCards/brown/brown6.jpg',
  brown7: './assets/MythicCards/brown/brown7.jpg',
  brown8: './assets/MythicCards/brown/brown8.jpg',
  brown9: './assets/MythicCards/brown/brown9.jpg',
  brown10: './assets/MythicCards/brown/brown10.jpg',
  brown11: './assets/MythicCards/brown/brown11.jpg',
  brown12: './assets/MythicCards/brown/brown12.jpg',
  brown13: './assets/MythicCards/brown/brown13.jpg',
  brown14: './assets/MythicCards/brown/brown14.jpg',
  brown15: './assets/MythicCards/brown/brown15.jpg',
  brown16: './assets/MythicCards/brown/brown16.jpg',
  brown17: './assets/MythicCards/brown/brown17.jpg',
  brown18: './assets/MythicCards/brown/brown18.jpg',
  brown19: './assets/MythicCards/brown/brown19.jpg',
  brown20: './assets/MythicCards/brown/brown20.jpg',
  brown21: './assets/MythicCards/brown/brown21.jpg',
};

const greenLink = {
  green1: './assets/MythicCards/green/green1.jpg',
  green2: './assets/MythicCards/green/green2.jpg',
  green3: './assets/MythicCards/green/green3.jpg',
  green4: './assets/MythicCards/green/green4.jpg',
  green5: './assets/MythicCards/green/green5.jpg',
  green6: './assets/MythicCards/green/green6.jpg',
  green7: './assets/MythicCards/green/green7.jpg',
  green8: './assets/MythicCards/green/green8.jpg',
  green9: './assets/MythicCards/green/green9.jpg',
  green10: './assets/MythicCards/green/green10.jpg',
  green11: './assets/MythicCards/green/green11.jpg',
  green12: './assets/MythicCards/green/green12.jpg',
  green13: './assets/MythicCards/green/green13.jpg',
  green14: './assets/MythicCards/green/green14.jpg',
  green15: './assets/MythicCards/green/green15.jpg',
  green16: './assets/MythicCards/green/green16.jpg',
  green17: './assets/MythicCards/green/green17.jpg',
  green18: './assets/MythicCards/green/green18.jpg',
};


const ancientsCards = [
  {
    id: 'azathoth',
    name: 'azathoth',
    cardFace: ancientsLink.azathoth,
    firstStage: {
      greenCards: 1,
      brownCards: 2,
      blueCards: 1,
    },
    secondStage: {
      greenCards: 2,
      brownCards: 3,
      blueCards: 1,
    },
    thirdStage: {
      greenCards: 2,
      brownCards: 4,
      blueCards: 0,
    },
  },
  {
    id: 'cthulhu',
    name: 'cthulhu',
    cardFace: ancientsLink.cthulhu,
    firstStage: {
      greenCards: 0,
      brownCards: 2,
      blueCards: 2,
    },
    secondStage: {
      greenCards: 1,
      brownCards: 3,
      blueCards: 0,
    },
    thirdStage: {
      greenCards: 3,
      brownCards: 4,
      blueCards: 0,
    },
  },
  {
    id: 'iogSothoth',
    name: 'iogSothoth',
    cardFace: ancientsLink.iogSothoth,
    firstStage: {
      greenCards: 0,
      brownCards: 2,
      blueCards: 1,
    },
    secondStage: {
      greenCards: 2,
      brownCards: 3,
      blueCards: 1,
    },
    thirdStage: {
      greenCards: 3,
      brownCards: 4,
      blueCards: 0,
    },
  },
  {
    id: 'shubNiggurath',
    name: 'shubNiggurath',
    cardFace: ancientsLink.shubNiggurath,
    firstStage: {
      greenCards: 1,
      brownCards: 2,
      blueCards: 1,
    },
    secondStage: {
      greenCards: 3,
      brownCards: 2,
      blueCards: 1,
    },
    thirdStage: {
      greenCards: 2,
      brownCards: 4,
      blueCards: 0,
    },
  },
];

const blueCards = [
  {
    id: 'blue1',
    cardFace: blueLink.blue1,
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue2',
    cardFace: blueLink.blue2,
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue3',
    cardFace: blueLink.blue3,
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue4',
    cardFace: blueLink.blue4,
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue5',
    cardFace: blueLink.blue5,
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue6',
    cardFace: blueLink.blue6,
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue7',
    cardFace: blueLink.blue7,
    difficulty: 'normal',
    color: 'blue'
  },
  {
    id: 'blue8',
    cardFace: blueLink.blue8,
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue9',
    cardFace: blueLink.blue9,
    difficulty: 'normal',
    color: 'blue'
  },
  {
    id: 'blue10',
    cardFace: blueLink.blue10,
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue11',
    cardFace: blueLink.blue11,
    difficulty: 'normal',
    color: 'blue'
  },
  {
    id: 'blue12',
    cardFace: blueLink.blue12,
    difficulty: 'normal',
    color: 'blue'
  },
];

const brownCards = [
  {
    id: 'brown1',
    cardFace: brownLink.brown1,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown2',
    cardFace: brownLink.brown2,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown3',
    cardFace: brownLink.brown3,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown4',
    cardFace: brownLink.brown4,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown5',
    cardFace: brownLink.brown5,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown6',
    cardFace: brownLink.brown6,
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown7',
    cardFace: brownLink.brown7,
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown8',
    cardFace: brownLink.brown8,
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown9',
    cardFace: brownLink.brown9,
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown10',
    cardFace: brownLink.brown10,
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown11',
    cardFace: brownLink.brown11,
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown12',
    cardFace: brownLink.brown12,
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown13',
    cardFace: brownLink.brown13,
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown14',
    cardFace: brownLink.brown14,
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown15',
    cardFace: brownLink.brown15,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown16',
    cardFace: brownLink.brown16,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown17',
    cardFace: brownLink.brown17,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown18',
    cardFace: brownLink.brown18,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown19',
    cardFace: brownLink.brown19,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown20',
    cardFace: brownLink.brown20,
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown21',
    cardFace: brownLink.brown21,
    difficulty: 'easy',
    color: 'brown'
  },
];

const greenCards = [
  {
    id: 'green1',
    cardFace: greenLink.green1,
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green2',
    cardFace: greenLink.green2,
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green3',
    cardFace: greenLink.green3,
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green4',
    cardFace: greenLink.green4,
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green5',
    cardFace: greenLink.green5,
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green6',
    cardFace: greenLink.green6,
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green7',
    cardFace: greenLink.green7,
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green8',
    cardFace: greenLink.green8,
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green9',
    cardFace: greenLink.green9,
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green10',
    cardFace: greenLink.green10,
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green11',
    cardFace: greenLink.green11,
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green12',
    cardFace: greenLink.green12,
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green13',
    cardFace: greenLink.green13,
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green14',
    cardFace: greenLink.green14,
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green15',
    cardFace: greenLink.green15,
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green16',
    cardFace: greenLink.green16,
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green17',
    cardFace: greenLink.green17,
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green18',
    cardFace: greenLink.green18,
    difficulty: 'easy',
    color: 'green'
  },
];

const allCards = {
  blueCards,
  brownCards,
  greenCards,
}

// DOM

const ancients = document.querySelectorAll('.ancient');
const levelButtons = document.querySelectorAll('.level');
const first = document.querySelectorAll('.first');
const second = document.querySelectorAll('.second');
const third = document.querySelectorAll('.third');
const card = document.querySelector('.card');
const deck = document.querySelector('.deck');
const count = document.querySelectorAll('.count');
const stages = document.querySelectorAll('.stage');
const levelContainer = document.querySelector('.levels-container');
const sectionContainer = document.querySelector('.section-container');
const message = document.querySelector('.message');

// Variable

let selectedAncient;
let selectedLevel;

let firstStage = [];
let secondStage = [];
let thirdStage = [];
let fullDeck = [];

let shuffleGreen = [];
let shuffleBrown = [];
let shuffleBlue = [];

let counter = {
  firstStage: {},
  secondStage: {},
  thirdStage: {},
};

let sumColor = {};

// Set card face

function setCardFace() {
  ancients.forEach((el, i) => {
    el.style.backgroundImage = `url('${ancientsCards[i].cardFace}')`;
    setAncientName(el, i);
  })
};

// Set attribute's name

function setAncientName(el, i) {
  el.setAttribute('name', ancientsCards[i].name);
}

setCardFace();

// Select ancient and level

globalThis.addEventListener('click', getAncient);
globalThis.addEventListener('click', getLevel);

function getAncient(event) {
  if (event.target.classList.contains('ancient')) {
    setDefault();

    ancientsCards.forEach(el => {
      if (el.name === event.target.getAttribute('name')) {
        selectedAncient = el;
        toggleActive(ancients, event.target);
      }
    })

    console.log('Boss:', selectedAncient);
  }
};

function getLevel(event) {
  if (event.target.classList.contains('level')) {
    setDefault();

    selectedLevel = event.target.getAttribute('value');
    toggleActive(levelButtons, event.target);

    console.log('Level:', selectedLevel);
  }
}

function toggleActive(elems, event) {
  elems.forEach(el => {
    el.classList.remove('active');
    event.classList.add('active');
  })
};

// Shuffle

function shuffle(array) {
  const length = array == null ? 0 : array.length;

  if (!length) {
    return [];
  }

  let index = -1
  const lastIndex = length - 1
  const result = Array.from(array);

  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }

  return result;
}

// Roll or Die

globalThis.addEventListener('click', getRoll);

function getRoll(event) {
  if (event.target.classList.contains('roll') && selectedAncient && selectedLevel) {
    setDefault();
    sumCounterColor()
    shuffleDeck();
    showDeck();

    let i = 0;
    for (let key in selectedAncient.firstStage) {
      counter.firstStage[key.replace('Cards', '')] = selectedAncient.firstStage[key];
      popCard(selectedAncient.firstStage[key], key, firstStage);
    }

    i = 0;
    for (let key in selectedAncient.secondStage) {
      counter.secondStage[key.replace('Cards', '')] = selectedAncient.secondStage[key]
      popCard(selectedAncient.secondStage[key], key, secondStage);
    }

    i = 0;
    for (let key in selectedAncient.thirdStage) {
      counter.thirdStage[key.replace('Cards', '')] = selectedAncient.thirdStage[key];
      popCard(selectedAncient.thirdStage[key], key, thirdStage);
    }

    shuffleStage();
    setCounter();

    fullDeck = [...thirdStage, ...secondStage, ...firstStage];

    console.log('Stage One', ...firstStage);
    console.log('Stage Two', ...secondStage);
    console.log('Stage Three', ...thirdStage);
    console.log('Full Deck', ...fullDeck);
  }
}

function setCounter(bool) {
  let i = 0;

  if (bool) {
    for (let j = 0; j < count.length; j++) {
      count[j].innerHTML = '';
    }
    return;
  }

  for (let key in counter) {
    for (let k in counter[key]) {
      count[i].innerHTML = counter[key][k];
      i++;
    }
  }
}

function shuffleColor() {
  shuffleGreen = shuffle(shuffleGreen);
  shuffleBrown = shuffle(shuffleBrown);
  shuffleBlue = shuffle(shuffleBlue);
}

function shuffleDeck() {
  shuffleGreen = shuffle(greenCards);
  shuffleBrown = shuffle(brownCards);
  shuffleBlue = shuffle(blueCards);

  if (selectedLevel === 'easy') {
    shuffleGreen = shuffleGreen.filter(filterNotHard);
    shuffleBrown = shuffleBrown.filter(filterNotHard);
    shuffleBlue = shuffleBlue.filter(filterNotHard);
  }

  if (selectedLevel === 'hard') {
    shuffleGreen = shuffleGreen.filter(filterNotEasy);
    shuffleBrown = shuffleBrown.filter(filterNotEasy);
    shuffleBlue = shuffleBlue.filter(filterNotEasy);
  }

  if (selectedLevel === 'extreme') {
    shuffleGreen = shuffleGreen.filter(filterHard);
    getExtraCards(shuffleGreen, greenCards, 'green')

    shuffleBrown = shuffleBrown.filter(filterHard);
    getExtraCards(shuffleBrown, brownCards, 'brown')

    shuffleBlue = shuffleBlue.filter(filterHard);
    getExtraCards(shuffleBlue, blueCards, 'blue')

    shuffleColor();
  }

  if (selectedLevel === 'casual') {
    shuffleGreen = shuffleGreen.filter(filterEasy);
    getExtraCards(shuffleGreen, greenCards, 'green')

    shuffleBrown = shuffleBrown.filter(filterEasy);
    getExtraCards(shuffleBrown, brownCards, 'brown')

    shuffleBlue = shuffleBlue.filter(filterEasy);
    getExtraCards(shuffleBlue, blueCards, 'blue')

    shuffleColor();
  }
}

function getExtraCards(shuffles, cards, color) {
  if (shuffles.length < sumColor[color]) {
    let temp = shuffle(cards.filter(filterNormal));
    while (sumColor[color] > shuffles.length) {
      shuffles.push(temp.pop());
    }
  }
}

function filterEasy(el) {
  return el.difficulty === 'easy';
}

function filterNormal(el) {
  return el.difficulty === 'normal';
}

function filterHard(el) {
  return el.difficulty === 'hard';
}

function filterNotHard(el) {
  return el.difficulty !== 'hard';
}

function filterNotEasy(el) {
  return el.difficulty !== 'easy';
}

function shuffleStage() {
  firstStage = shuffle(firstStage);
  secondStage = shuffle(secondStage);
  thirdStage = shuffle(thirdStage);
}

function popCard(num, key, arr) {
  let i = num;

  while (i > 0) {
    if (key === 'greenCards') {
      arr.push(shuffleGreen.pop());
    }
    if (key === 'brownCards') {
      arr.push(shuffleBrown.pop());
    }
    if (key === 'blueCards') {
      arr.push(shuffleBlue.pop());
    }
    i--;
  }
}

globalThis.addEventListener('click', getDeck);

function getDeck(event) {
  if (event.target.classList.contains('deck') && selectedAncient && selectedLevel) {
    popDeck();
  }
}

function popDeck() {
  if (!(selectedAncient && selectedLevel && fullDeck.length)) {
    return;
  }

  const pop = fullDeck.pop();
  const color = pop.color;
  // const img = pop.cardFace;

  if (firstStage.length) {
    counter.firstStage[color]--;
    firstStage.pop();
  } else if (secondStage.length) {
    counter.secondStage[color]--;
    secondStage.pop();
  } else if (thirdStage.length) {
    counter.thirdStage[color]--;
    thirdStage.pop();
  }

  if (!firstStage.length) {
    stages[0].style.opacity = '0.4';
  }

  if (!secondStage.length) {
    stages[1].style.opacity = '0.4';
  }

  if (!thirdStage.length) {
    stages[2].style.opacity = '0.4';
  }

  setCounter();

  if (fullDeck.length === 0) {
    deck.style.visibility = 'hidden';
  }

  card.style.visibility = 'visible';

  // test onload
  const img = new Image;
  img.src = pop.cardFace;
  img.onload = () => {
    card.style.backgroundImage = `url('${img.src}')`;
  };
  // test onload

  // card.style.backgroundImage = `url('${img}')`;

  console.log('Card on the table:', pop);
}

function setStageGone() {
  stages.forEach(el => {
    el.style.opacity = '';
  })
}

function sumCounterColor() {
  for (let key in selectedAncient) {
    if (key.includes('Stage')) {
      for (let k in selectedAncient[key]) {
        sumColor[k.replace('Cards', '')] = sumColor[k.replace('Cards', '')] + selectedAncient[key][k] || selectedAncient[key][k];
      }
    }
  }
}

function showDeck() {
  sectionContainer.style.visibility = 'visible'
}

function setDefault() {
  deck.style.visibility = '';
  card.style.visibility = 'hidden';
  sectionContainer.style.visibility = 'hidden'

  firstStage = [];
  secondStage = [];
  thirdStage = [];
  fullDeck = [];
  sumColor = {};

  setCounter(true);
  setStageGone();
}

function showMessage() {
  if (selectedAncient && selectedLevel) {
    message.style.visibility = 'hidden';
    window.scrollTo({
      top: sectionContainer.offsetTop - (sectionContainer.offsetHeight / 2),
      behavior: 'smooth',
    })
    return;
  } else {
    if (!selectedAncient) {
      message.innerHTML = 'Choose Ancient'
      return;
    }
    if (!selectedLevel) {
      message.innerHTML = 'Choose difficulty'
      return;
    }
  }
}

document.querySelector('.roll').addEventListener('click', showMessage)
