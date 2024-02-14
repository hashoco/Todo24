const clock = document.querySelector("h2#clock")

function getClock(){
    const date = new Date();
    const hours =   String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//제거한 후 실행하면 최초 1초동안 00:00:00으로 표현됨
getClock();

setInterval(getClock,1000);

