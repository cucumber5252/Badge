import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
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
import Qr from "./pages/Qr";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        console.log(error);
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
              <NavBar userData={userData} />
              <Present />
            </div>
          }
        />
        <Route
          path="/kingLoading"
          element={
            <div>
              <NavBar userData={userData} />
              <KingLoading />
            </div>
          }
        />
        <Route
          path="/qr"
          element={
            <div>
              <NavBar userData={userData} />
              <Qr />
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
