import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const JoinGame = ({ myData }) => {
  const { roomId } = useParams();
  console.log(roomId);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/qr", { state: { roomId, myData } });
  }, []);
};

export default JoinGame;
