function cinemaTicket(input) {
    let index = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;

    let command = input[index++];

    while (command !== 'Finish') {
        let movieName = command;
        let freeSpace = Number(input[index++]);
        let soldTicketsForMovie = 0;

        let ticketType = input[index++];
        
        while (ticketType !== 'End') {
            soldTicketsForMovie++;

            if (ticketType === 'student') studentTickets++;
            else if (ticketType === 'standard') standardTickets++;
            else if (ticketType === 'kid') kidsTickets++;

            if (soldTicketsForMovie >= freeSpace) {
                break;
            }
            ticketType = input[index++];
        }

        let percentFull = (soldTicketsForMovie / freeSpace * 100).toFixed(2);
        console.log(`${movieName} - ${percentFull}% full.`);

        command = input[index++];
    }

    let totalTickets = studentTickets + standardTickets + kidsTickets;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidsTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTicket((["Taxi","10","standard","kid","student","student","standard","standard","End","Scary Movie","6","student","student","student","student","student","student","Finish"]))