function wallking(input){
const goal = 10000;
let totalSteps = 0;
let index = 0;

while(index < input.length){
    const currentCommand = input[index++];

    if(currentCommand === 'Going home'){
        totalSteps += Number(input[index++]);
        break;

    }

    totalSteps += Number(currentCommand);
    if(totalSteps >= goal) break;

}
const diffrence = Math.abs(totalSteps - goal);
if(totalSteps >= goal) {
    console.log('Goal reached! Good job!');
    console.log(`${diffrence} steps over the goal!`);

}else {
    console.log(`${diffrence} more steps to reach goal.`);
}


}


wallking(['1000', '1500', '2000', '6500']);