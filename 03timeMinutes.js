function timeMinutes(hours, minutes){
  minutes +=15;

  if (minutes >= 60){
    hours += 1;
    minutes -= 60;
  }
     if (hours >= 24){
    hours = 0;
  }
   
   let formattedMinutes = minutes <10 ? "0" + minutes : minutes;

   console.log(`${hours}:${minutes.toString().padStart(2, '0')}`);
}

timeMinutes(1, 46);
timeMinutes(0, 0,1);
timeMinutes(23, 59);
timeMinutes(12, 49);