const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")
const timeHtml = document.getElementById("time")
let minute = 0
let second = 0
let millisecond = 0
let intervalId = null

start.addEventListener("click",()=>{
    if (intervalId != null){
        clearInterval(intervalId)
    }
    intervalId = setInterval(function count(){
    millisecond++;
    if (millisecond===1000){
        millisecond = 0;
        second ++;
        if (second===60){
            second=0;
            minute++;
        }
    }
    timeHtml.innerHTML= `${minute<10? "0"+minute:minute}:
    ${second<10? "0"+second:second}:
    ${millisecond<10? "00"+millisecond:millisecond<100 && millisecond>10?"0"+millisecond:millisecond}`
 },0)
})
stop.addEventListener("click",()=>{
    clearInterval(intervalId)
})
reset.addEventListener("click",()=>{
    clearInterval(intervalId)
    minute = 0
    second = 0
    millisecond = 0
    timeHtml.innerHTML= `00:00:000`
})