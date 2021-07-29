const input = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');
const perimetr = circle.getAttribute('r')*2*Math.PI;

circle.setAttribute('stroke-dasharray', perimetr);

let duration;
let currentOffset=0;
const t1 =new Timer(input, startButton, pauseButton,{
    onStart(totalDuration){
        duration=totalDuration;
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset', perimetr*timeRemaining/duration - perimetr);
    },
    onComplite(){
        console.log('timer completed');
    }
});
// t1.start();
