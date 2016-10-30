class Textbox {
    constructor (selector, regex) {
        this._elements = $(selector);
        this._selector = selector;
        this.value = $(this._elements[0]).val();

        $(this._selector).on('input', (event) => {
            let newValue = $(event.target).val();
            this.value = newValue;
            $(this._selector).each((index, element) => {
                $(element).val(newValue);
            });
        });

        this._invalidSymbols = regex;
    }

    get elements () {
        return this._elements;
    }

    isValid () {
        if (this._invalidSymbols.exec(this.value)) {
            return false;
        }

        return true;
    }

    set value (newValue) {
        $(this._selector).each((index, element) => {
            $(element).val(newValue);
        });
        this._value = newValue;
    }

    get value () {
        return this._value;
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});