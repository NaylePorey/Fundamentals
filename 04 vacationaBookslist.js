function vacationsBooksList( pagesBook, pagesReadForHour, daysToBeDone){
    const timeForOneBook = pagesBook / pagesReadForHour;
    const hoursPerDayToRead = timeForOneBook / daysToBeDone;

    console.log(hoursPerDayToRead);
}

vacationsBooksList(212, 20, 2);
vacationsBooksList(432, 15, 4);
