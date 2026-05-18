function workingHors( hour,day){

if (hour >=10 && hour < 18 && day!== 'Sunday'){
    console.log('open');

}else  {
    console.log('closed');

}

}

workingHors(11,'Monday');