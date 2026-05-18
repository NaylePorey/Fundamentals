function onTimeForExam(examHour, examMin, arrivalHour, arrivalMin) {
   
    let examTimeInMinutes = examHour * 60 + examMin;
    let arrivalTimeInMinutes = arrivalHour * 60 + arrivalMin;

    let diff = Math.abs(examTimeInMinutes - arrivalTimeInMinutes);
    let h = Math.floor(diff / 60);
    let m = diff % 60;

    if (arrivalTimeInMinutes > examTimeInMinutes) {
        console.log("Late");
        if (diff < 60) {
            console.log(`${diff} minutes after the start`);
        } else {
            console.log(`${h}:${m < 10 ? '0' + m : m} hours after the start`);
        }
    } else if (arrivalTimeInMinutes === examTimeInMinutes || diff <= 30) {
        console.log("On time");
        if (diff > 0) {
            console.log(`${diff} minutes before the start`);
        }
    } else {
        console.log("Early");
        if (diff < 60) {
            console.log(`${diff} minutes before the start`);
        } else {
            console.log(`${h}:${m < 10 ? '0' + m : m} hours before the start`);
        }
    }
}