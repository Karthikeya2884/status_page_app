const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("New client connected");

    // Emit real-time status updates
    socket.on("statusChange", (data) => {
      io.emit("updateStatus", data);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};

module.exports = socketHandler;