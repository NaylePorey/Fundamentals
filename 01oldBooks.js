function oldBooks(input) {
    const favoriteBook = input[0];
    let index = 1; 
    let checkedBooks = 0;

    let currentBook = input[index];

    while (currentBook !== 'No More Books') {
        if (currentBook === undefined) break;

        if (currentBook === favoriteBook) {
            console.log(`You checked ${checkedBooks} books and found it.`);
            return;
        }

        checkedBooks++;
        index++;
        currentBook = input[index];
    }

    console.log('The book you search is not here!');
    console.log(`You checked ${checkedBooks} books.`);
}