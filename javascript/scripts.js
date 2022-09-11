//--- setting navbar ---
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

//--- setting up gallery ----
const panels = document.querySelectorAll('.panel')

//----- setting up clock-------//
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector(".date")
const toggle = document.querySelector('.toggle')

const days = ['Sunday', "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
"Aug", "Sep", "Oct", "Nov", "Dec"];

//---- dark mode----//
toggle.addEventListener('click', (e) =>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    }else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})
//---------------------------///

// const boxes = document.querySelector('.box')
// window.addEventListener('scroll', checkBoxes)

function fixNav(){
    if(window.scrollY > nav.offsetHeight +150){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
}
//---- Gallery ----
panels.forEach((panel) =>{
    panel.addEventListener('click', () =>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}
//---------------------------------------//

//----------------set time -----------------//
function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const date = time.getDate()
    const ampm = hours >= 12 ? 'PM': 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${
        scale(hoursForClock, 0, 11, 0, 360)
    }deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${
        scale(minutes, 0, 59, 0, 360)
    }deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${
        scale(seconds, 0, 59, 0, 360)
    }deg)`

    timeEl.innerHTML = `${hours}:${minutes < 10 ?
        `0${minutes}`: minutes} ${ampm}`

    dateEl.innerHTML = `${days[day]}, ${months[month]}
    <span class='circle'>
    ${date}
    </span>`
}

const scale = (num, in_min, in_max, out_min, out_max) =>{
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
setTime()

setInterval(setTime, 1000)
//------------------------------------------//
//---------SEND EMAIL-----------------//
function sendEmail(){
    Email.send({
        Host: 'smtp.gmail.com',
        Username: "some-email",
        Password: "some-password",
        To: "to-some-email",
        From : document.getElementById("email"),value,
        Subject : 'New Contact from enquiry',
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}
//------------------------------------//
// checkBoxes()

// function checkBoxes(){
//    const triggerBottom = window.innerHeight / 5 * 4

//     boxes.forEach(box =>{
//         const boxTop = box.getBoundingClientRect().top

//         if(boxTop < triggerBottom){
//             box.classList.add('show')
//         }else{
//             box.classList.remove('show')
//         }
//     })
// }