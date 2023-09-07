import { useParams } from "react-router-dom";

const JoinGame = () => {
  const { roomId } = useParams();
  console.log(roomId);
};

export default JoinGame;
