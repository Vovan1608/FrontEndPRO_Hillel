var IMAGES = [
  "https://i.ibb.co/ws3yZgK/Obiwankenobi.jpg",
  "https://i.ibb.co/6bgQFk1/5de6d4fc79d75719215a36c3.jpg",
  "https://i.ibb.co/h8jXyx1/Darth-Vader.jpg"
];

// HELPERS
const forChildrenOfEachElement = function (target, callback) {
  if (target) {
    for (let index = 0; index < target.length; index++) {
      const element = target[index];

      callback(element.children, index);
    }
  }
};

// COUNTERS
const getCounter = function (counter) {
  if (counter) {
    return Number(counter.innerHTML);
  }
};
const increaseCounter = function (counter) {
  if (counter) {
    counter.innerHTML = getCounter(counter) + 1;
  }
};

const createImage = function (url) {
  return '<img src="' + url + '" />';
};

const createPlayer = function (image, className = "") {
  return `
    <div class='opponent'>
      <div class='image ${className}'>${image}</div>
      <span class='counter'>0</span>
    </div>
  `;
};

const getPlayers = function (container) {
  if (container) {
    const firstImage = createImage(IMAGES[0]);
    const secondImage = createImage(IMAGES[1]);
    const thirdImage = createImage(IMAGES[2]);

    const firstPlayer = createPlayer(firstImage, "light");
    const secondPlayer = createPlayer(secondImage);
    const thirdPlayer = createPlayer(thirdImage, "dark");

    const players = [firstPlayer, secondPlayer, thirdPlayer];

    container.innerHTML = players.join("");

    return players;
  }
};

const setOpponentsHandlers = function (opponents) {
  forChildrenOfEachElement(opponents, function (children) {
    const target = children[0];
    const counter = children[1];

    target.onclick = function () {
      increaseCounter(counter);
    };
  });
};


// мое продолжение 
const getButtons = function(actions) {
  if(actions) {
    const buttons = actions.children;
    return buttons;
  }
}

const getResetButton = function() {
  return getButtons(actions)[1];
}

const getFinishButton = function() {
  return getButtons(actions)[0];
}

const counterInner = function(opponents) {
  for (let index = 0; index < opponents.length; index++) {
    const opponent = opponents[index];
    const children = opponent.children;

    const counter = children[1];

    counter.innerHTML = 0;
  }
}

const onclickResetButton = function (opponents) {
  return function() {
    counterInner(opponents);
  }
}

const getWinner = function(opponents) {
  let maxScore = 0;
  let winners = [];
  for (let index = 0; index < opponents.length; index++) {
    const opponent = opponents[index];
    const children = opponent.children;

    const counter = children[1];
    
    const target = children[0];

    const score = Number(counter.innerHTML);

    if (score > maxScore) {
      maxScore = score;
      winners = [target];
    } else if (score === maxScore) {
      winners.push(target);
    }
  }
  return winners;
}

const getWinnerOnclick = function(resultModal) {
  return function() {
    counterInner(opponents);

    resultModal.classList.toggle("show");
    resultModal.innerHTML = "";

    return resultModal;
  }
}

const getRestartOnclick = function(resultModal) {
  return function() {
    counterInner(opponents);

    resultModal.classList.toggle("show");
    resultModal.innerHTML = "";
  }
}

const createResulModal = function(resultModal) {
  return resultModal.innerHTML = `
  <p>draw</p>
  <button id="restart-button">Restart</button>
`;
}

const getResultModal = function(resultModal) {
  const winners = getWinner(opponents);
    
  if (winners.length === 1) {
    const winner = winners.shift().cloneNode(true);

    winner.onclick = getWinnerOnclick(resultModal);

    resultModal.append(winner);
  } else {
    createResulModal(resultModal);

    const restart = document.getElementById("restart-button");

    restart.onclick = getRestartOnclick(resultModal);
  }
}

const onclickFinishButton = function(opponents) {
  return function () {
    const resultModal = document.getElementById("results");
    
    getResultModal(resultModal);
    
    resultModal.classList.toggle("show");
  };
}

const createApp = function () {
  const container = document.getElementById("opponents");
  getPlayers(container);

  const opponents = container.getElementsByClassName("opponent");
  setOpponentsHandlers(opponents);

  const actions = document.getElementById("actions");
  const buttons = getButtons(actions);

  const finishButton = getFinishButton();
  const resetButton = getResetButton();

  resetButton.onclick = onclickResetButton(opponents);
  finishButton.onclick = onclickFinishButton(opponents);
};

createApp();