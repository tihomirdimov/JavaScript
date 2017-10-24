function blackJack() {
    //Creates new deck instance
    let currentDeck = new Deck();
    currentDeck.getDeck();
    currentDeck.getDealerCards();
    currentDeck.getPlayerCards();

    //Get new player cards on the table on clicking "Hit"
    $(function(){
        $("#hitButton").on("click", function() {
            currentDeck.getPlayerCards();
        });
    });

    //Removes player card from the table on clicking it
    $(function(){
        $(document).on("click",".playerCard", function() {
            currentDeck.removeFromTable($(this));
        });
    });
}

//Holds array of Cards adn the main business logic
class Deck {
    constructor() {
        //Allowed suits and ranks. Suits will be added as unicode chars
        this.suits = ["\u2663", "\u2666", "\u2665", "\u2660"];
        this.ranks = ["A", "K", "Q", "J", 10, 9, 8, 7, 6, 5, 4, 3, 2];
        //Empty arrays that will be used to create a shuffled deck
        this.orderedDeck = [];
        this.shuffledDeck = [];

        //Loops through the suits and ranks and creates ordered deck of cards
        for (let suit of this.suits) {
            for (let rank of this.ranks) {
                let cardToAdd = new Card(suit, rank);
                this.orderedDeck.push(cardToAdd);
            }
        }
        //Shuffles the ordered deck
        while (this.orderedDeck.length) {
            let index = Math.floor(Math.random() * this.orderedDeck.length);
            this.shuffledDeck.push(this.orderedDeck[index]);
            this.orderedDeck.splice(index, 1);
        }
    }

    //Creates deck of cards by creating N divs (for each card) and respective z-index.
    getDeck() {
        //remove current deck of cards
        $(".deckCard").remove();
        for (let i = this.shuffledDeck.length - 1; i >= 0; i--) {
            $("#deckPlace")
                .append($(`<div class="deckCard" id="deckCard` + (i + 1) + `" style="z-index:` + (i + 1) + `;">`).show('slow')
                    .append($(`<div class="closedCard" id="deckCardBack` + (i + 1) + `;">`))
                    .append($(`<div class="openCard" id="deckCardFront` + (i + 1) + `;">`)
                        .text(this.shuffledDeck[i]["suit"] + this.shuffledDeck[i]["rank"]).hide())
                );
        }

        //Creates 3D effect by decreasing the values of the box-shadow effect as the number of cards decreases (the deck shrinks)
        let cardsLeft = this.shuffledDeck.length;
        if (cardsLeft <= 52 && cardsLeft >= 42) {
            $("#deckPlace").css("box-shadow", "5px 5px 5px black");
        }
        if (cardsLeft < 42 && cardsLeft >= 32) {
            $("#deckPlace").css("box-shadow", "4px 4px 4px black");
        }
        if (cardsLeft < 32 && cardsLeft >= 22) {
            $("#deckPlace").css("box-shadow", "3px 3px 3px black");
        }
        if (cardsLeft < 22 && cardsLeft >= 12) {
            $("#deckPlace").css("box-shadow", "2px 2px 2px black");
        }
        if (cardsLeft < 12 && cardsLeft >= 2) {
            $("#deckPlace").css("box-shadow", "1px 1px 1px black");
        }
    }

    //Takes the first 3 cards from the shuffled deck from the class instance and puts them i the 3 dealers cards places
    getDealerCards() {
        for (let i = 1; i <= 3; i++) {
            $(`#dealerCardPlace` + i)
                .append($(`<div class="dealerCard" id="dealerCard` + i + `">`)
                    .append($(`<div class="closedCard" id="dealerCard` + i + `Back">`))
                    .append($(`<div class="openCard" id="dealerCard` + i + `Front">`)
                        .text(this.shuffledDeck[i]["suit"] + this.shuffledDeck[i]["rank"]).hide())
                );
            this.removeCardFromDeck();
        }
        this.getDeck();
    }

    //gets player card. 1. Check if there are enough cards in the deck; 2. Removes current player cards;
    // 3. Get 2 cards from the top of the deck
    getPlayerCards() {
        if (this.shuffledDeck.length < 2) {
            this.removeFromTable("#deckPlace");
            alert("Not enough cards in the deck. Please click OK and reload the page");
        }
        else {
            if($("#playerCardA").length != 0){
                this.removeFromTable("#playerCardA");
            }
            if($("#playerCardB").length != 0){
                this.removeFromTable("#playerCardB");
            }
            this.showPlayerCard("A");
            this.showPlayerCard("B");
        }
        this.getDeck();
    }

    //put the first card from the deck to particular player card place
    showPlayerCard(position) {
        $(`#playerCardPlace` + position)
            .append($(`<div class="playerCard" id="playerCard` + position + `">`)
                .append($(`<div class="closedCard" id="playerCard` + position + `Back">`).hide())
                .append($(`<div class="openCard" id="playerCard` + position + `Front">`)
                    .text(this.shuffledDeck[0]["suit"] + this.shuffledDeck[0]["rank"]))
            );
        this.removeCardFromDeck();
    }

    //removes a players card from the table by its id
    removeFromTable(id) {
        $(id).remove();
    }

    //removes the first card from the deck
    removeCardFromDeck() {
        this.shuffledDeck.splice(0, 1);
    }
}

class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}