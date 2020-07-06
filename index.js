
// =====================================================================================
// GEOLOCATION



// let x = document.querySelector('#x')
// let y = document.querySelector('#y')
// let name = document.querySelector('#name')

// navigator.geolocation.getCurrentPosition(pos =>{
//     x.textContent += pos.coords.latitude
//     y.textContent += pos.coords.longitude
//     fetch(`http://geocode.xyz/${pos.coords.latitude},${pos.coords.longitude}?json=1`)
//     .then(res=>res.json())
//     .then(data=>{
//         name.textContent += data.city 
//         name.textContent += ", " 
//         name.textContent += data.country
//     })
// })

// =====================================================================================
// DRAG N DAROP

// let blah = document.querySelector("#blah")
// let divs = document.querySelectorAll(".div")

// // handle drag events
// let id

// blah.addEventListener("dragstart", (e)=>{
//     console.log("you dragged me 😡");
//     id = e.target.id
// })

// for(let div of divs){
//     div.addEventListener("dragover",(e)=>{
//         e.preventDefault()
//         console.log("you dragged over me 😡", e.target.id);
//     })

//     div.addEventListener("drop",(e)=>{
//         e.preventDefault()
//     console.log("you dropped over me 😡",  e.target.id);
//     e.target.append(document.getElementById(id))
//     })
// }

// =====================================================================================
// WEB WORKERS

// if (Worker) {
//     let myWorker = new Worker('worker.js')
//     console.log(myWorker);

//     for (let i = 0; i < 10; i++) {
//         myWorker.postMessage(i)
//     }

//     myWorker.onmessage = e => console.log(e.data)
// } else {
//     console.log("use chrome!!");
// }


// =====================================================================================
// MEDIA

// let myVideo = document.querySelector('video')
// let btn = document.querySelector("#tg")
// btn.addEventListener('click', () => {
//     if (myVideo.paused) {
//         myVideo.play()
//         btn.textContent = "pause"
//     } else {
//         myVideo.pause()
//         btn.textContent = "play"
//     }
// })
// document.querySelector("#loop").addEventListener('click', () => {
//    myVideo.loop = !myVideo.loop
// })

// setTimeout(() => {
//     myVideo.controls = true
// }, 3000);

// // myVideo.volume = 5
// console.log(myVideo.volume);


// document.querySelector("input").addEventListener("change", (e)=>{
//     console.log(e.target.value);
//     myVideo.currentTime = e.target.value
// })