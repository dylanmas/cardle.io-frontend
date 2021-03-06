import React, { useState, useEffect, createContext, useContext } from "react";

export const UserStatsContext = createContext();

export const UserStatsProvider = (props) => {
  const [lives, setLives] = useState(3);

  const RemoveLife = (navigate) => {
    if (lives > 0) {
      let val = lives - 1;
      setLives(val);
    } else {
      console.log("No lives left");
      navigate("/home");
    }
  };

  const ResetLives = () => {
    setLives(3);
  };

  return (
    <UserStatsContext.Provider
      value={{
        actions: { RemoveLife, ResetLives },
        life: [lives],
      }}
    >
      {props.children}
    </UserStatsContext.Provider>
  );
};

export const useUserStats = () => useContext(UserStatsContext);
