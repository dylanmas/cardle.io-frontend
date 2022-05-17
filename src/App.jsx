import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import { Home, Login, Play, Signup } from "./Pages";
import { useUser } from "./contexts/UserContext";
import axios from "axios";
import { UserUrl } from "./backendUrls";

function App() {
  const { userstuff } = useUser();
  const [user, setUser] = userstuff;
  const navigate = useNavigate();

  useEffect(() => {
    console.log("e");
    let key = localStorage.getItem("email");
    if (key) {
      axios
        .get(UserUrl(key))
        .then((res) => {
          setUser(res.data);
          navigate("/play");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </div>
  );
}

export default App;
