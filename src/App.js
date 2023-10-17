import React, { useEffect, useState } from "react";
import "./styles.css";
import Card from "./Components/Card.js";
import Title from "./Components/Title.js";
import Timer from "./Components/Timer.js";
export default function App() {
  const cards = [
    {
      url:
        "https://wallpapers.com/images/hd/cinnamoroll-sanrio-wcecwmzphjxrwdye.jpg",
      isFlipped: false,
      name: "Cinnamoroll"
    },
    {
      url:
        "https://e0.pxfuel.com/wallpapers/444/711/desktop-wallpaper-keroppi-hello-kitty-sanrio-danshi-sanrio-kawaii-frog.jpg        ",
      isFlipped: false,
      name: "Keroppi"
    },
    {
      url:
        "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTc4MTE5MDU4NTMxNDUz/hello-kitty-ftr.jpg",
      isFlipped: false,
      name: "Hello Kitty"
    },
    {
      url:
        "https://i.pinimg.com/736x/c1/07/9f/c1079fe7c86c361b49b5f03a07965d25.jpg",
      isFlipped: false,
      name: "Kuromi"
    },
    {
      url: "https://pbs.twimg.com/media/Cg1C6wDUUAAPMCW.jpg",
      isFlipped: false,
      name: "PomPomPurin"
    },
    {
      url:
        "https://preview.redd.it/happy-birthday-my-melody-v0-obx140ph3uca1.jpg?width=640&crop=smart&auto=webp&s=18a0540a5bdbc339d9ad67b276b23c5fcebdbfda",
      isFlipped: false,
      name: "My Melody"
    },
    {
      url:
        "https://wallpapers.com/images/hd/cinnamoroll-sanrio-wcecwmzphjxrwdye.jpg",
      isFlipped: false,
      name: "Cinnamoroll"
    },
    {
      url:
        "https://e0.pxfuel.com/wallpapers/444/711/desktop-wallpaper-keroppi-hello-kitty-sanrio-danshi-sanrio-kawaii-frog.jpg        ",
      isFlipped: false,
      name: "Keroppi"
    },
    {
      url:
        "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTc4MTE5MDU4NTMxNDUz/hello-kitty-ftr.jpg",
      isFlipped: false,
      name: "Hello Kitty"
    },
    {
      url:
        "https://i.pinimg.com/736x/c1/07/9f/c1079fe7c86c361b49b5f03a07965d25.jpg",
      isFlipped: false,
      name: "Kuromi"
    },
    {
      url: "https://pbs.twimg.com/media/Cg1C6wDUUAAPMCW.jpg",
      isFlipped: false,
      name: "PomPomPurin"
    },
    {
      url:
        "https://preview.redd.it/happy-birthday-my-melody-v0-obx140ph3uca1.jpg?width=640&crop=smart&auto=webp&s=18a0540a5bdbc339d9ad67b276b23c5fcebdbfda",
      isFlipped: false,
      name: "My Melody"
    }
  ];

  function shuffle(array) {
    var currentIndex = array.length,
      tempURL,
      tempName,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tempURL = array[currentIndex].url;
      tempName = array[currentIndex].name;

      array[currentIndex].url = array[randomIndex].url;
      array[currentIndex].name = array[randomIndex].name;
      array[randomIndex].url = tempURL;
      array[randomIndex].name = tempName;
    }

    return array;
  }
  shuffle(cards);
  let [currentCards, setCurrentCards] = useState(cards);
  let [currentPair, setCurrentPair] = useState([]);
  let [numOfFlips, setNumOfFlips] = useState(0);

  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  React.useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  useEffect(() => {
    function flipCard(index) {
      var updatedCards = currentCards.slice();
      var cardFlipState = currentCards[index].isFlipped;
      // Toggles between flipped and unflipped; changes isFlipped state of card in updatedCards array
      if (cardFlipState === true) {
        updatedCards[index].isFlipped = false;
      } else {
        updatedCards[index].isFlipped = true;
      }
      setCurrentCards(updatedCards);
    }

    if (currentPair.length === 2) {
      setTimeout(() => {
        if (
          currentCards[currentPair[0]].name !==
          currentCards[currentPair[1]].name
        ) {
          flipCard(currentPair[0]);
          flipCard(currentPair[1]);
        }
        setCurrentPair([]);
      }, 1000);
    }
  }, [currentPair, currentCards]);

  function cardOnClickHandler(index) {
    //step 1: get first card from array
    //step 2: toggle isFlipped field for first card
    //step 3: replace first card in currentCardState with updated card
    //step 4: set updated array as currentCardState
    //step 5: check is all cardds facing up, if so stop timer
    setNumOfFlips(numOfFlips + 1);
    console.log("flips: " + numOfFlips);
    // Creates new array updatedCards, duplicate of currentCards array
    if (currentPair.length < 2) {
      var updatedCards = currentCards.slice();
      var cardFlipState = currentCards[index].isFlipped;
      // console.log(cardFlipState);
      // Toggles between flipped and unflipped; changes isFlipped state of card in updatedCards array
      if (cardFlipState === true) {
        updatedCards[index].isFlipped = false;
      } else {
        updatedCards[index].isFlipped = true;
      }
      // console.log(updatedCards[index].isFlipped);
      setCurrentCards(updatedCards);

      // 1.  check if the length of currentPair <2
      // 2. if so, we'll append the card user clicked to currentPair

      var updatedPair = currentPair.slice();
      updatedPair.push(index);
      setCurrentPair(updatedPair);
    }

    let allFlipped = true;
    currentCards.forEach((card) => {
      if (card.isFlipped === false) {
        allFlipped = false;
      }
    });
    if (allFlipped === true) {
      setIsActive(false);
      // setTime(0);
    }
  }
  // console.log("currentCards: ", currentCards);
  // console.log("currentPair: ", currentPair);

  function onClickStartButton() {
    setCurrentCards(
      currentCards.map((card) => {
        card.isFlipped = true;
        return card;
      })
    );

    setTimeout(() => {
      setCurrentCards(
        currentCards.map((card) => {
          card.isFlipped = false;
          return card;
        })
      );
      // start stopwatch timer      is
      setIsActive(true);
    }, 5000);
  }
  return (
    <div className="App">
      <div className="topBar">
        <button className="startButton" onClick={onClickStartButton}>
          Start
        </button>
        <Title />
        <div className="stats">
          <Timer time={time} />
          <p>Flips: {numOfFlips}</p>
        </div>
      </div>
      <div className="cards">
        {currentCards.map((card, index) => (
          <Card
            cardOnClickHandler={() => cardOnClickHandler(index)}
            isActive={isActive}
            url={card.url}
            isFlipped={card.isFlipped}
            name={card.name}
          />
        ))}
      </div>
    </div>
  );
}
