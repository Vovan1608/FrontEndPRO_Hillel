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
    return actions.children;
  }
}

const setCounterInnerZero = function(opponents) {
  forChildrenOfEachElement(opponents, function (children) {
    const target = children[0];
    const counter = children[1];

    counter.innerHTML = 0;
  });
}

const onclickResetButton = function (opponents) {
  return function() {
    setCounterInnerZero(opponents);
  }
}

const getWinner = function(opponents) {
  let maxScore = 0;
  let winners = [];

  forChildrenOfEachElement(opponents, function (children) {
    const target = children[0];
    const counter = children[1];

    const score = getCounter(counter);

    if (score > maxScore) {
      maxScore = score;
      winners = [target];
    } else if (score === maxScore) {
      winners.push(target);
    }
  });
  return winners;
}

const getWinnerOnclick = function(resultModal, opponents) {
  return function() {
    setCounterInnerZero(opponents);

    resultModal.classList.toggle("show");
    resultModal.innerHTML = "";
    
    return resultModal;
  }
}

const getRestartOnclick = function(resultModal) {
  return function() {
    setCounterInnerZero(opponents);

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

const onclickFinishButton = function(opponents) {
  return function () {
    const resultModal = document.getElementById("results");
    
    const winners = getWinner(opponents);
    
    if (winners.length === 1) {
      const winner = winners.shift().cloneNode(true);

      winner.onclick = getWinnerOnclick(resultModal, opponents);

      resultModal.append(winner);
    } else {
      createResulModal(resultModal);

      const restart = document.getElementById("restart-button");

      restart.onclick = getRestartOnclick(resultModal);
    }
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

  const finishButton = buttons[0];
  const resetButton = buttons[1];

  resetButton.onclick = onclickResetButton(opponents);
  finishButton.onclick = onclickFinishButton(opponents);
};

createApp();