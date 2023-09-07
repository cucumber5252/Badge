import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";

import yellowBack from "./assets/Backgrounds/yellow.png";
import redBack from "./assets/Backgrounds/red.png";
import greenBack from "./assets/Backgrounds/green.png";
import blueBack from "./assets/Backgrounds/blue.png";
import purpleBack from "./assets/Backgrounds/purple.png";

import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Signup from "./pages/Signup";
import Present from "./pages/Present";
import KingLoading from "./pages/KingLoading";
import KingGame from "./pages/KingGame";
import Qr from "./pages/Qr";
import Profile from "./pages/Profile";
import Home from "./pages/Main";
import Ranker from "./pages/Ranker";
import Rule from "./pages/Rule";
import JoinGame from "./pages/JoinGame";

import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);

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

  document.body.style.backgroundColor = "#FCFCF6";

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/logout"
          element={<Logout setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/present"
          element={
            <div>
              <NavBar userData={userData} setUserData={setUserData} />
              <Present />
            </div>
          }
        />
        <Route
          path="/kingLoading"
          element={
            <div>
              <NavBar userData={userData} setUserData={setUserData} />
              <KingLoading />
            </div>
          }
        />
        <Route
          path="/kingGame"
          element={
            <div>
              <NavBar userData={userData} setUserData={setUserData} />
              <KingGame />
            </div>
          }
        />
        <Route path="/join-game/:roomId" element={<JoinGame />} />

        <Route
          path="/qr"
          element={
            <div>
              <NavBar userData={userData} setUserData={setUserData} />
              <Qr userData={userData} />
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div>
              <NavBar userData={userData} setUserData={setUserData} />
              <Profile userData={userData} />
            </div>
          }
        />

        <Route
          path="/home"
          element={
            <div>
              <NavBar userData={userData} setUserData={setUserData} />
              <Home />
            </div>
          }
        />

        <Route
          path="/ranker"
          element={
            <div>
              <NavBar userData={userData} setUserData={setUserData} />
              <Ranker />
            </div>
          }
        />
        <Route
          path="/rule"
          element={
            <div>
              <NavBar userData={userData} setUserData={setUserData} />
              <Rule />
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
