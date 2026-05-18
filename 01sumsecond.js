function sumSeconds(sec1, sec2, sec3){
    const totalSeconds = sec1+ sec2 +sec3;

    const minutes = Math.floor(totalSeconds/60);
    const seconds = totalSeconds % 60;

    if (seconds <10) console.log(`${minutes}:0${seconds}`);
    else console.log(`${minutes}:${seconds}`);
}

function workingHors( hour,day){

if (hour >=10 && hour < 18 && day!== 'Sunday'){
    console.log('open');

}else  {
    console.log('closed');

}

}