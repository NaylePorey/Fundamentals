function checkSwimmingRecord(recordInSeconds, distanceInMeters, timePerMeter) {
   
    const baseTime = distanceInMeters * timePerMeter;
    
  
    const delaysCount = Math.floor(distanceInMeters / 15);
    const totalDelay = delaysCount * 12.5;

    const totalTime = baseTime + totalDelay;
    
   
    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        const difference = totalTime - recordInSeconds;
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }
}
checkSwimmingRecord(10464,1500,20);
checkSwimmingRecord(55555.67,3017,5.03);