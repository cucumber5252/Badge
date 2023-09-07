import styles from "./Qr.module.css";
import socket from "./socket";
import Back from "../components/Back/Back";

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import yellowBack from "../assets/Backgrounds/yellow.png";
import redBack from "../assets/Backgrounds/red.png";
import greenBack from "../assets/Backgrounds/green.png";
import blueBack from "../assets/Backgrounds/blue.png";
import purpleBack from "../assets/Backgrounds/purple.png";

function Qr() {
  const [qrCode, setQrcode] = useState("");
  const location = useLocation();
  const { roomId, role, myData } = location.state || {};
  const userId = localStorage.getItem("userId");
  const [create, setCreate] = useState(false);
  const [join, setJoin] = useState(false);
  console.log(roomId, role, myData, userId);

  //배경랜덤지정코드
  const backgroundImages = [
    yellowBack,
    blueBack,
    purpleBack,
    redBack,
    greenBack,
  ];
  // 랜덤 이미지 선택
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  const selectedBackground = backgroundImages[randomIndex];

  useEffect(() => {
    document.body.style.backgroundImage = `url(${selectedBackground})`;
    document.body.style.backgroundSize = "cover";
  }, [selectedBackground]);

  //
  useEffect(() => {
    console.log("createGame");
    if (create) socket.emit("createGame", { userId });
  }, [create]);
  useEffect(() => {
    console.log("visitor");
    if (join) connectionForVisitor();
  }, [join]);

  const apiUrl = "https://port-0-badgeback-jvvy2blm6d8yj1.sel5.cloudtype.app/";
  const navigate = useNavigate();

  const connectionForVisitor = () => {
    socket.emit("joinGame", { roomId, userId });
    socket.once("joinGame", (data) => {
      if (data.status === "sucess") {
        //go to startGame
        navigate("/loading1", {
          state: { opData: data.opData, myData, roomId },
        });
      }
    });
  };
  useEffect(() => {
    if (role === "creator") {
      setCreate(true);
    }
  }, [role]);
  useEffect(() => {
    if (!role || role === "visitor") {
      if (userId) {
        setJoin(true);
      }
    }
  }, [role, userId]);

  if (role === "creator") {
    socket.once("createGame", (data) => {
      setQrcode(data.qrCode);
      console.log("gameRoom", data.roomId);
      socket.once("waiting", (data) => {
        if (data.status === "success") {
          //go to startGame
          navigate("/loading1", {
            state: {
              opData: data.opData,
              myData,
              roomId,
            },
          });
        } else if (data.status === "pending") {
          //wait for user sign up
          socket.once("waiting", (data) => {
            if (data.status === "success") {
              navigate("/loading1", {
                state: {
                  opData: data.opData,
                  myData,
                  roomId,
                },
              });
            }
          });
        }
      });
    });
  } else if (!role || role === "visitor") {
    if (userId) {
    } else {
      //go to signup with roomId
      navigate("/signup", { state: { myData, roomId } });
    }
  }

  return (
    <div className={styles.qrDiv}>
      <div className={styles.qrImgDiv}>
        <img src={qrCode} alt="qrExample" className={styles.qrImg} />
      </div>
      <div className={styles.qrText}>QR로 상대 매칭하기</div>
      <div className={styles.backButtonDiv}>
        <Back />
      </div>
    </div>
  );
}

export default Qr;
