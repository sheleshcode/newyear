///Selectors 
let currentSelector=document.querySelector(".Time");


let time=new Date();
const newYearTime = new Date("31 Dec,2020 24:00:00").getTime();


setInterval(function(){
    time=new Date();
    const currentTime=time.getTime();
    
    
    let countDownTime=newYearTime-currentTime;

    let day=Math.floor(countDownTime/(24*60*60*1000));
    let hours=Math.floor((countDownTime %(24*60*60*1000))/(60*60*1000));
    let minutes=Math.floor((countDownTime %(60*60*1000))/(1000*60));
    let seconds=Math.floor((countDownTime %(60*1000))/(1000));

    let countDown=day+'Days:'+hours+'Hours:'+minutes+'Minutes:'+seconds+'Seconds';
    currentSelector.textContent=countDown;
    if(countDownTime<0){
        currentSelector.textContent="Happy New Year";
    }

},1000);
