
const clock = document.getElementById('display');

function getClockTime(){
   
    let time = new Date();
    let day = 'AM';
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();

    if(hr > 12)
    {
        hr=hr-12;
        day= 'PM';
    }
    if(hr ==0){
        hr = 12;
    }
    if(hr < 10){
        hr ='0'+ hr;
    }
    if(min < 10){
        min ='0'+min;
    }
    if(sec < 10){
        sec='0'+ sec;
    }
    
    clock.innerText= `${hr} : ${min} : ${sec} ${day}`;
}

setInterval(() => {
    getClockTime();
}, 1000);
