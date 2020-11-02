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
// функция для создания кнопок 
const createButtons = function(actions) {
  if(actions) {
    const buttons = actions.children;
    return buttons;
  }
}

const createResetButton = function() {
  return createButtons(actions)[1];
}

const createFinishButton = function() {
  return createButtons(actions)[0];
}

const createApp = function () {
  const container = document.getElementById("opponents");
  getPlayers(container);

  const opponents = container.getElementsByClassName("opponent");
  setOpponentsHandlers(opponents);

  const actions = document.getElementById("actions");
  const buttons = createButtons(actions);

  const finishButton = createFinishButton();
  const resetButton = createResetButton();







  
  resetButton.onclick = function () {
    for (let index = 0; index < opponents.length; index++) {
      const opponent = opponents[index];
      const children = opponent.children;

      const counter = children[1];

      counter.innerHTML = 0;
    }
  };

  finishButton.onclick = function () {
    const resultModal = document.getElementById("results");

    let maxScore = 0;
    let winners = [];
    for (let index = 0; index < opponents.length; index++) {
      const opponent = opponents[index];
      const children = opponent.children;

      const target = children[0];
      const counter = children[1];

      const score = Number(counter.innerHTML);

      if (score > maxScore) {
        maxScore = score;
        winners = [target];
      } else if (score === maxScore) {
        winners.push(target);
      }
    }

    if (winners.length === 1) {
      const winner = winners.shift().cloneNode(true);

      winner.onclick = function () {
        for (let index = 0; index < opponents.length; index++) {
          const opponent = opponents[index];
          const children = opponent.children;

          const counter = children[1];

          counter.innerHTML = 0;
        }

        resultModal.classList.toggle("show");
        resultModal.innerHTML = "";
      };

      resultModal.append(winner);
    } else {
      resultModal.innerHTML = `
        <p>draw</p>
        <button id="restart-button">Restart</button>
      `;

      const restart = document.getElementById("restart-button");

      restart.onclick = function () {
        for (let index = 0; index < opponents.length; index++) {
          const opponent = opponents[index];
          const children = opponent.children;

          const counter = children[1];

          counter.innerHTML = 0;
        }

        resultModal.classList.toggle("show");
        resultModal.innerHTML = "";
      };
    }

    resultModal.classList.toggle("show");
  };
};

createApp();