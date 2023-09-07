import styles from "./Qr.module.css";
import qrExample from "../assets/Qr/qr_example.png";

import Back from "../components/Back/Back";

import { useState } from "react";
import { io } from "socket.io-client";
import { useNavigate, useParams } from "react-router-dom";

function Qr({ myData, visitorSocket, role, roomId }) {
  const [qrCode, setQrcode] = useState("");
  const userId = localStorage.getItem("useId");
  const apiUrl = "https://port-0-badgeback-jvvy2blm6d8yj1.sel5.cloudtype.app/";
  const navigate = useNavigate();
  let socket;

  const connectionForVisitor = () => {
    socket.emit("joinGame", { roomId, userId });
    socket.once("joinGame", (data) => {
      if (data.status === "sucess") {
        //go to startGame
        navigate("/loading1", { socket, opData: data.opData, myData, roomId });
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
    console.log("connect to server", data.socket.id);

    if (role === "creator") {
      socket.emit("createRoom", { userId });
      socket.once("createRoom", (data) => {
        setQrcode(data.qrCode);
        console.log("gameRoom", data.roomId);
        socket.once("waiting", (data) => {
          if (data.status === "success") {
            //go to startGame
            navigate("/loading1", {
              socket,
              opData: data.opData,
              myData,
              roomId,
            });
          } else if (data.status === "pending") {
            //wait for user sign up
            socket.once("wating", (data) => {
              if (data.status === "success") {
                navigate("/loading1", {
                  socket,
                  opData: data.opData,
                  myData,
                  roomId,
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
        navigate("/signup", { myData, socket, roomId });
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
