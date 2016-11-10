class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        if(clientId.length != 6){
            throw new TypeError("Client ID must be a 6-digit number");
        }
        if(!email.match(/[A-Za-z0-9]*@[A-Z0-9a-z\.]+/g)){
            throw new TypeError("Invalid e-mail");
        }

        if(firstName.length < 3 || firstName.length > 20){
            throw new TypeError(`First name must be between 3 and 20 characters long`);
        }
        if(lastName.length < 3 || lastName.length > 20){
            throw new TypeError(`Last name must be between 3 and 20 characters long`);
        }

        if(!firstName.match(/^[A-Za-z]+$/g)){
            throw new TypeError(`First name must contain only Latin characters`);
        }
        if(!lastName.match(/^[A-Za-z]+$/g)){
            throw new TypeError(`Last name must contain only Latin characters`);
        }

        this.products = [];
    }
}
