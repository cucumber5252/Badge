import io from "socket.io-client";

const socket = io(
  "https://port-0-badgeback-jvvy2blm6d8yj1.sel5.cloudtype.app/",
  {
    cors: { origin: "*" },
  }
);

export default socket;
