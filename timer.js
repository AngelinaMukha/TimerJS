class Timer{
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput=durationInput;
        this.startButton=startButton;
        this.pauseButton=pauseButton;
        if(callbacks){
            this.onStart=callbacks.onStart;
            this.onTick=callbacks.onTick;
            this.onComplite=callbacks.onComplite;
        }
        // this.timeLeft=30;
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        console.log(this.durationInput.value);
        this.timeLeft= this.durationInput.value;
        this.tick();
        this.interval = setInterval(this.tick, 20);
    }
    pause = () => {
        clearInterval(this.interval);
    }
    // onDurationChange(){

    // }
    tick=()=>{
        // if(this.timeLeft>0){
        //     this.timeLeft=this.timeLeft - 1;
        //     this.durationInput.value = this.timeLeft;
        // }
        if(this.timeRemaining<=0){
            this.pause();
            if(this.onComplite){
                this.onComplite();
            }
        }else{
            this.timeRemaining=this.timeRemaining-0.02;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
    }
    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time){
        this.durationInput.value=time.toFixed(2);
    }
}