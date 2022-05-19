import React, { useEffect } from "react";
import Card from "react-free-playing-cards";
import axios from "axios";
import "../styles/CardWrapper.css";
import { useNavigate } from "react-router-dom";

import { useUserStats } from "../contexts/UserStats";
import { PostTime } from "../misc/TimeFunctions";
import { useUser } from "../contexts/UserContext";

const CardWrapper = ({ card, time, setStopTime }) => {
  const { actions } = useUserStats();
  const navigate = useNavigate();
  let { RemoveLife } = actions;
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
      PostTime(user.email, time, navigate);
      navigate("/home");
    } else {
      RemoveLife(navigate);
    }
  };

  return (
    <div className="cd" onClick={onCardClicked}>
      <Card card={card.type} className="card" />
    </div>
  );
};

export default CardWrapper;
