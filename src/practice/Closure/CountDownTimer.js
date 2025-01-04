console.log("Countdown Timer with Closure");

function countDown(start){
    return function(){
        if(start>0){
            console.log(`Count is ${start}`);
            start --;
        }else
        {
            console.log('CountDown Finished');
        }
    }
}
const countDownResult = countDown(3);

countDownResult();
countDownResult();
countDownResult();
countDownResult();