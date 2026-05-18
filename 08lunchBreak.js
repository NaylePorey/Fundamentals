function lunchBreak(seriesName, episodeDuration, breakDuration){
    const lunchTime = breakDuration / 8;
    const restTime = breakDuration / 4;


    const timeLeftForEpisode = breakDuration - (lunchTime + restTime);

    if( timeLeftForEpisode >= episodeDuration) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeftForEpisode - episodeDuration)} minutes free time.`);

    }else{
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeDuration - timeLeftForEpisode)} more minutes.`);
    }
}

lunchBreak("Game of Thrones",60,96);