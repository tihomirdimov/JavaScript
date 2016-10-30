function sortTickets(input, argument) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let tickets = [];
    for (let i = 0; i < input.length; i++) {
        let currentTicketInput = input[i].split('|');
        let destination = currentTicketInput[0];
        let price = Number(currentTicketInput[1]);
        let status = currentTicketInput[2];
        let currentTicket = new Ticket(destination, price, status);
        tickets.push(currentTicket);
    }

    if (argument === 'destination') {
        tickets.sort((a, b) => {
            return a.destination > b.destination;
        });
    } else if (argument === 'price') {
        tickets.sort((a, b) => {
            return a.price - b.price;
        });
    } else if (argument === 'status') {
        tickets.sort((a, b) => {
            return a.status > b.status;
        });
    }
    return tickets;
}

sortTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed']
)