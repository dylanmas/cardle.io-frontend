import React, { useEffect } from "react";
import Card from "react-free-playing-cards";
import axios from "axios";
import "../styles/CardWrapper.css";
import { useUserStats } from "../contexts/UserStats";
import { convertToMs } from "../misc/TimeFunctions";
import { timeUrl } from "../backendUrls";
import { useUser } from "../contexts/UserContext";

const CardWrapper = ({ card, time, setStopTime }) => {
  const { actions } = useUserStats();
  let { RemoveLife, ResetLives } = actions;
  const { userstuff } = useUser();
  const [user, setUser] = userstuff;

  useEffect(() => {
    if (card.random) {
      console.log(card);
    }
  }, []);

  const onCardClicked = (e) => {
    if (card.random === true) {
      setStopTime(true);
      axios
        .post(timeUrl, {
          email: user.email,
          time: convertToMs(time),
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="cd" onClick={onCardClicked}>
      <Card card={card.type} className="card" />
    </div>
  );
};

export default CardWrapper;
