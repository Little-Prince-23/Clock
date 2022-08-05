let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    
    let period = "AM";
    if(hrs === 0) {
        hrs = 12;
    }
    else if(hrs > 12){
        hrs = hrs - 12;
        period = "PM";
    }
    
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    
    let point = ":";
    let time = `${hrs} ${point} ${mins} ${point} ${secs} ${period}`;
    const myTime = document.getElementById("clock");
    myTime.innerHTML = time;
    
    
    setTimeout(() => {
        clock();
    }, 1000);
}

clock();