const socket=io("http://localhost:8000");
console.log("this is chat site")

const form = document.getElementById("s");
const btn1 = document.getElementById("btn1");
let textarea=document.getElementsByClassName("text");
// let cont=document.getElementsByClassName("container");
let cont=document.querySelector(".container");
let info=document.querySelector(".info");
// let info=document.getElementsByClassName("info");

function append2(message,postion){
    console.log("inside");
    let ele=document.createElement("div");
    ele.innerText=message;
    ele.classList.add="c";
    // ele.classList.add=postion
    // ele.className="c";
    ele.className=postion;
    info.append(ele);
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const message=textarea[0].value;
    console.log(message);
    append2(`you: ${message}`,"right")
    socket.emit("send",message);
    textarea[0].value="";
})

const name2=prompt("enter your name to join");
console.log(name2);

// append2(`${name2} joined the chat`,"right");
 
socket.emit("new-user",name2); 
// console.log("11111111");
socket.on("user-joined",data=>{
    // console.log("insode1")
   append2(`${data} joined the chat`,"right");
})

socket.on("receive",data=>{
    append2(`${data.name}:${data.message}`,"left");
})
socket.on("left",name=>{
    append2(`${data.name} left the chat`,"left");
})

// 



// const socket=io("http://localhost:8000");
// console.log("this is chat site")

// const form = document.getElementById("s");
// const btn1 = document.getElementById("btn1");
// let textarea=document.getElementsByClassName("text");
// // let cont=document.getElementsByClassName("container");
// let cont=document.querySelector(".container");
// let info=document.querySelector(".info");
// // let info=document.getElementsByClassName("info");

// function append2(message,postion){
//     console.log("inside");
//     let ele=document.createElement("div");
//     ele.innerText=message;
//     // ele.classList.add="c";
//     // ele.classList.add=postion
//     ele.className="c";
//     ele.className=postion;
//     info.append(ele);
// }

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const message=textarea[0].value;
//     console.log(message);
//     append2(`you: ${message}`,"right")
//     socket.emit("send",message);
//     textarea[0].value="";
// })

// const name2=prompt("enter your name to join");
// console.log(name2);

// // append2(`${name2} joined the chat`,"right");
 
// socket.emit("new-user",name2); 
// // console.log("11111111");
// socket.on("user-joined",data=>{
//     // console.log("insode1")
//    append2(`${data} joined the chat`,"right");
// })

// socket.on("receive",data=>{
//     append2(`${data.name}:${data.message}`,"left");
// })
// socket.on("left",name=>{
//     append2(`${data.name} left the chat`,"left");
// })