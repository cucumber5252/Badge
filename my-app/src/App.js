import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";

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

  return (
    <>
      <NavBar userData={userData} />
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
