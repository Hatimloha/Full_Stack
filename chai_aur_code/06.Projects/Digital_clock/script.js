function currentTime(){
    const timeArea = document.querySelector('.timeArea');
    const date = new Date;
    timeArea.innerText = date.toLocaleTimeString();
    timeArea.style.backgroundColor = 'yellow'
    timeArea.style.color = 'black'
    timeArea.style.borderRadius = '10px'
}

setInterval(() => {
    currentTime()    
}, 1000);