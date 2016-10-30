
let result = (function() {

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

    class Form {
        constructor () {
            this._element = $('<div class="form"></div>');
            for (let index in arguments) {
                if (arguments[index].constructor.name !== 'Textbox') {
                    throw new Error('Error');
                }
            }

            this._textboxes = [];
            for (let index in arguments) {
                this._element.append($(arguments[index]._elements));
                this._textboxes.push(arguments[index]);
            }
        }

        submit () {
            let areAllValid = true;
            for (let index in this._textboxes) {
                if (this._textboxes[index].isValid()) {
                    $(this._textboxes[index].elements).css('border', '2px solid green');
                } else {
                    $(this._textboxes[index].elements).css('border', '2px solid red');
                    areAllValid = false;
                }
            }

            return areAllValid;
        }

        attach (selector) {
            $(selector).prepend(this._element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    };
}());

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");