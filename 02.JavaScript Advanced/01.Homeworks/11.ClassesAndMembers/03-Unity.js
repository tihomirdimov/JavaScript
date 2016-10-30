class Rat {
    constructor (name) {
        this.name = name;
        this.rats = [];
    }
    unite (otherRat) {
        if (typeof otherRat === typeof this) {
            this.rats.push(otherRat);
        }
    }
    getRats () {
        return this.rats;
    }
    toString () {
        let resultString = `${this.name}\n`;
        for (let i = 0; i < this.rats.length; i++) {
            resultString += `###${this.rats[i].name}\n`;
        }

        return resultString;
    }
}

