import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";

import yellowBack from "./assets/Backgrounds/yellow.png";
import redBack from "./assets/Backgrounds/red.png";
import greenBack from "./assets/Backgrounds/green.png";
import blueBack from "./assets/Backgrounds/blue.png";
import purpleBack from "./assets/Backgrounds/purple.png";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

// import Qr from "./pages/Qr";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";
// import Loading1 from "./pages/Loading1";
// import Back from "./pages/Back";

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:3000/data/NavBar/NavBarData.json`;
    const token = localStorage.getItem("token");

    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        alert("이미 사용중인 아이디입니다.");
      });
  }, []);

  // const backgroundImages = [
  //   yellowBack,
  //   blueBack,
  //   purpleBack,
  //   redBack,
  //   greenBack,
  // ];

  // // 랜덤 이미지 선택
  // const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  // const selectedBackground = backgroundImages[randomIndex];

  // useEffect(() => {
  //   document.body.style.backgroundImage = `url(${selectedBackground})`;
  //   document.body.style.backgroundSize = "cover";
  // }, [selectedBackground]);

  return (
    <>
      <Game2 />
      {/* <NavBar userData={userData} /> */}
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Routes>
          <NavBar userData={userData} />
          <Route path="/present" element={<Present />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rule" element={<Rule />} />
          <Route path="/ranker" element={<Ranker />} />
          <Route path="/kingGame" element={<KingGame />} />
          <Route path="/kingGameLoading" element={<KingGameLoading />} />
        </Routes>
      </Routes> */}
    </>
  );
};

export default App;
