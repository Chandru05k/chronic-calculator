function getdate(){
    const date=document.getElementById("dob").value;
    const dob=new Date(date);
    cur_date=new Date();
    const diff=cur_date-dob;
    console.log(diff);

    const years=Math.floor(diff/(1000*60*60*24*365));
    const months=Math.floor(diff/(1000*60*60*24*30.44));
    const days=Math.floor(diff/(1000*60*60*24));
    const hours=Math.floor(diff/(1000*60*60));
    const minutes=Math.floor(diff/(1000*60));

    const cur_date1=cur_date.getUTCDate()
    const cur_month=cur_date.getUTCMonth()+1;
    const cur_year=cur_date.getFullYear();
    

    const current_date=cur_date1+"/"+cur_month+"/"+cur_year;

    const div1="Current Date: "+current_date+"\nAge:\n"+years+" Years, "+months+" Months, "+days+" Days, "+hours+" Hours, "+minutes+" Minutes";

    document.querySelector("#div1").innerText=div1;

    setInterval(getdate,1000);
}