function cake(array){
    const width = Number(array[0]);
    const lenght = Number(array[1]);
    const totalPieces = width * lenght;

    let takenPieces = 0;
    let index = 2;

    while(array[index] !== 'STOP' && index < array.length){
        const currentPieces = Number(array[index++]);
        takenPieces += currentPieces;

        if (takenPieces >= totalPieces) break;

    }

  const diffrence = Math.abs(totalPieces - takenPieces);
  
if (totalPieces >= takenPieces ) {
    console.log(`${diffrence} pieces are left.`);

}else {
    console.group(`No more cake left! You need ${diffrence} pieces more.`);
}


}

cake(["10","10","20","20","20","20","21"]);