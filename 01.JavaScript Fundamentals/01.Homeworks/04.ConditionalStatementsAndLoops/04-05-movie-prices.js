function moviePrices(input) {
    if (input[0].toLowerCase() == "the godfather") {
        switch (input[1].toLowerCase()) {
            case "monday":
                return 12;
            case "tuesday":
                return 10;
            case "wednesday":
                return 15;
            case "thursday":
                return 12.50;
            case "friday":
                return 15;
            case "saturday":
                return 25;
            case "sunday":
                return 30;
            default:
                return "error";
        }
    }
    else if (input[0].toLowerCase() == "schindler's list") {
        switch (input[1].toLowerCase()) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                return 8.50;
            case "saturday":
            case "sunday":
                return 15;
            default:
                return "error";
        }
    }
    else if (input[0].toLowerCase() == "casablanca") {
        switch (input[1].toLowerCase()) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                return 8;
            case "saturday":
            case "sunday":
                return 10;
            default:
                return "error";
        }
    }
    else if (input[0].toLowerCase() == "the wizard of oz") {
        switch (input[1].toLowerCase()) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                return 10;
            case "saturday":
            case "sunday":
                return 15;
            default:
                return "error";
        }
    }
    else {
        return "error";
    }
}