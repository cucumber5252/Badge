const Loading1 = ({ socket, opData, myData, roomId }) => {
  const userId = localStorage.getItem("useId");
  socket.on("activateGame", (data) => {
    if (data.state === "success") {
      //go to game1 ''choice''
    }
  });
  const onClick = (e) => {
    e.preventDefault();
    socket.emit("startGame", { roomId, userId });
  };
};
