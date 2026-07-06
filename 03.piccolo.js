function piccolo(arr){
    let parkedCars = new Set();

    for (let carInfoStr of arr){
        let [direction, number] = carInfoStr.split(', ');

        if (direction === 'IN'){
            parkedCars.add(number);

        } else{
            parkedCars.delete(number);

        }
    }

    if (parkedCars.size === 0){
        console.log('Parking Lot is Empty');

    } else{
        let parkedCarsArr = Array.from(parkedCars).sort((a,b) => a.localeCompare(b));
        console.log(parkedCarsArr.join('\n'));
    }
}