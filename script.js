function showtime(){
    const date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let session="AM";
    let greetings;
    if (hours >= 12 && hours < 17) {
        greetings = "Good Afternoon All";
    } 
    else if (hours >= 17 && hours < 20) {
        greetings = "Good Evening All";
    } 
    else if (hours >= 5 && hours < 12) {
        greetings = "Good Morning All";
    }
    else {
        greetings = "Good Night All";
    } 
    
    if(hours>12){
        hours=hours-12;
        if(hours>=12)
            session="PM";
    }
    hours=(hours<10)?"0"+hours:hours;
    minutes=(minutes<10)?"0"+minutes:minutes;
    seconds=(seconds<10)?"0"+seconds:seconds;
    let time=hours+":"+minutes+":"+seconds+" "+session;
    document.querySelector("#time").innerText=time;
    document.querySelector("#greeting").innerText=greetings;

}
setInterval(showtime, 1000);