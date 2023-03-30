const io = require('socket.io')(8000, {
    cors: {
        origin: "*"
    }
});

const user = {};
console.log("hii");

io.on("connection", (socket) => {

    // console.log("this")


    socket.on('new-user', name => {
        console.log("new user", name);
        user[socket.id] = name;
        // console.log("after before-define ");
        socket.broadcast.emit("user-joined", name);
        // console.log("after user-define ");
    });


    socket.on("send", message => {
        socket.broadcast.emit("receive", { message: message, name: user[socket.id] });
    })
    socket.on("dissconect", message => {
        socket.broadcast.emit("left", user[socket.id]);
        delete user[socket.id]
        
    })
});
