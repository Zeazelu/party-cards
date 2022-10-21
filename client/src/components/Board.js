import { useState } from "react";
import {
  Button,
} from "@material-ui/core";
import Card from "./Cards";

const CardsArray = [
  {
    type: "Pikachu",
    image: require(`../images/1.png`)
  },
  {
    type: "Bulba",
    image: require(`../images/2.png`)
  },
];

function shuffleCards(array) {
  return array;
}
export default function Board() {
  const [cards, setCards] = useState(() =>
    shuffleCards(CardsArray)
  );
  const [openCards, setOpenCards] = useState([]);
  const [ setShouldDisableAllCards] = useState(false);
  
  const handleCardClick = (index) => {
      setOpenCards((prev) => [...prev, index]);
  };
  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };
  const handleRestart = () => {
    setOpenCards([]);
    setShouldDisableAllCards(false);
    setCards(shuffleCards(CardsArray));
  };


  return (
    <div className="App">
      <header>
        <h3>PARTY CARDS</h3>
        <div>
        </div>
      </header>
      <div className="container">
        {cards.map((card, index) => {
          return (
            <Card
            value={card}
              key={index}
              card={card}
              index={index}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
      <footer>
        <div className="restart">
          <Button onClick={handleRestart} color="primary" variant="contained">
            Restart
          </Button>
        </div>
      </footer>
      <div>
    </div>
    </div>
  );
}