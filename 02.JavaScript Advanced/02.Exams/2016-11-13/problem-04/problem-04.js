function cardDeckBuilder(selector) {
    function addCard(face, suit) {
        let text = face;
        text += ` `;
        let currentSuit = "";
        switch (suit) {
            case "C":
                currentSuit = \u2663;
                break;
            case "D":
                currentSuit = \u2666;
                break;
            case "H":
                currentSuit = \u2665;
                break;
            case "S":
                currentSuit = \u2660;
                break;
        }
        text += currentSuit;
        $(selector).append($(`<div>`).addClass('card').text(text));
    }
    return { addCard };
}
