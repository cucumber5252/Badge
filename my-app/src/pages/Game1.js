import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Game1({ socket, userId, roomId }) {
  const [choice, setChoice] = useState("");
  const navigate = useNavigate();

  socket.emit("choice", { choice, userId, roomId });
  socket.once("choice", (data) => {
    if (data.choice !== choice) {
      //resend emit
    }
  });

  socket.once("gameResult", (data) => {
    //Game2.js
    navigate("/Game2", { data });
  });
}
