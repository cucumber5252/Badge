import styles from "./Qr.module.css";

import Back from "../components/Back/Back";

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";

import yellowBack from "../assets/Backgrounds/yellow.png";
import redBack from "../assets/Backgrounds/red.png";
import greenBack from "../assets/Backgrounds/green.png";
import blueBack from "../assets/Backgrounds/blue.png";
import purpleBack from "../assets/Backgrounds/purple.png";

function Qr() {
  const [qrCode, setQrcode] = useState("");
  const location = useLocation();
  const { roomId, visitorSocket, role, myData } = location.state || {};
  const userId = localStorage.getItem("userId");
  const [state, setState] = useState(false);

  useEffect(() => {
    socket.emit("refresh", { roomId, role });
  }, []);

  console.log(roomId, visitorSocket, role, myData, userId);
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
    if (state) socket.emit("createGame", { roomId });
  }, [state]);

  const apiUrl = "https://port-0-badgeback-jvvy2blm6d8yj1.sel5.cloudtype.app/";
  const navigate = useNavigate();
  let socket;

  const connectionForVisitor = () => {
    socket.emit("joinGame", { roomId, userId });
    socket.once("joinGame", (data) => {
      if (data.status === "sucess") {
        //go to startGame
        navigate("/loading1", {
          state: { socket, opData: data.opData, myData, roomId, role },
        });
      }
    });
  };

  if (!visitorSocket) {
    socket = io(apiUrl, {
      cors: { origin: "*" },
    });
  } else {
    socket = visitorSocket;
    connectionForVisitor();
  }

  socket.on("connect", (data) => {
    console.log("connect to server", socket.id);

    if (role === "creator") {
      setState(true);

      socket.once("createGame", (data) => {
        setQrcode(data.qrCode);
        console.log("gameRoom", data.roomId);
        socket.once("waiting", (data) => {
          if (data.status === "success") {
            //go to startGame
            navigate("/loading1", {
              state: {
                socket,
                opData: data.opData,
                myData,
                roomId,
                role,
              },
            });
          } else if (data.status === "pending") {
            //wait for user sign up
            socket.once("waiting", (data) => {
              if (data.status === "success") {
                navigate("/loading1", {
                  state: {
                    socket,
                    opData: data.opData,
                    myData,
                    roomId,
                    role,
                  },
                });
              }
            });
          }
        });
      });
    } else if (!role || role === "visitor") {
      if (userId) {
        connectionForVisitor();
      } else {
        //go to signup with roomId
        navigate("/signup", { state: { myData, socket, roomId, role } });
      }
    }
  });

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
