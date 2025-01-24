function showcountdown(){
    const date=new Date();
    const year=date.getFullYear();
    const next_year=new Date(year+1,0,1);

    const cur_date=date.getUTCDate();
    const cur_month=date.getUTCMonth()+1;
    const cur_year=date.getFullYear();

    
    let cur_hour=date.getHours();
    let cur_minute=date.getMinutes();
    let cur_second=date.getSeconds();
    let session="AM";
    
    if(cur_hour>12){
        cur_hour=cur_hour-12;
        session="PM";
    }
    cur_hour=(cur_hour<10)?"0"+cur_hour:cur_hour;
    cur_minute=(cur_minute<10)?"0"+cur_minute:cur_minute;
    cur_second=(cur_second<10)?"0"+cur_second:cur_second;

    const time_diff=next_year-date;
    const days=Math.floor(time_diff/(1000*60*60*24));
    const hours=Math.floor((time_diff%(1000*60*60*24))/(1000*60*60));
    const minutes=Math.floor((time_diff%(1000*60*60))/(1000*60));
    const seconds=Math.floor((time_diff%(1000*60))/(1000));

    const current_date=cur_date+"/"+cur_month+"/"+cur_year;
    const current_time=cur_hour+":"+cur_minute+":"+cur_second+" "+session;

    let div1="Current Date and Time: "+current_date+", "+current_time;
    let countdown=" Days Left: "+days+"\nHours Left: "+hours+"\nMinutes Left: "+minutes+"\nSeconds left: "+seconds;

    document.querySelector("#date").innerText=div1;
    document.querySelector("#countdown").innerText=countdown;
}
setInterval(showcountdown,1000);