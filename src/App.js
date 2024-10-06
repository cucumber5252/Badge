import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";

import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Signup from "./pages/Signup";
import Present from "./pages/Present";
import KingLoading from "./pages/KingLoading";
import KingGame from "./pages/KingGame";
import KingResult from "./pages/KingResult";
import Qr from "./pages/Qr";
import Profile from "./pages/Profile";
import Main from "./pages/Main";
import Ranker from "./pages/Ranker";
import Rule from "./pages/Rule";
import JoinGame from "./pages/JoinGame";

// import Loading1 from "./pages/Loading1";
// import Loading2 from "./pages/Loading2";
// import Game1 from "./pages/Game1";
// import Game2 from "./pages/Game2";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);

  document.body.style.backgroundColor = "#FCFCF6";

  useEffect(() => {
    console.log(localStorage.getItem("token"));
  }, [localStorage.getItem("token")]);
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
          path="/main"
          element={
            <div>
              <NavBar userData={userData} setUserData={setUserData} />
              <Main />
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
          path="/profile"
          element={
            <div>
              <NavBar userData={userData} setUserData={setUserData} />
              <Profile userData={userData} />
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

        <Route
          path="/kingResult"
          element={
            <div>
              <NavBar userData={userData} setUserData={setUserData} />
              <KingResult />
            </div>
          }
        />

        <Route
          path="/join-game/:roomId"
          element={<JoinGame myData={userData} />}
        />

        <Route
          path="/qr"
          element={
            <div>
              <NavBar userData={userData} setUserData={setUserData} />
              <Qr />
            </div>
          }
        />
        {/* 
        <Route
          path="/loading1"
          element={
            <div>
              <NavBar userData={userData} setUserData={setUserData} />
              <Loading1 />
            </div>
          }
        />

        <Route
          path="/loading2"
          element={
            <div>
              <NavBar userData={userData} setUserData={setUserData} />
              <Loading2 />
            </div>
          }
        />

        <Route
          path="/game1"
          element={
            <div>
              <NavBar userData={userData} setUserData={setUserData} />
              <Game1 />
            </div>
          }
        />

        <Route
          path="/game2"
          element={
            <div>
              <NavBar userData={userData} setUserData={setUserData} />
              <Game2 />
            </div>
          }
        /> */}
      </Routes>
    </>
  );
};

export default App;
