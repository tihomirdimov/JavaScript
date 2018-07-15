const fs = require('fs');

let storage = {};

module.exports = {
    put: (key, value) => {
        if (typeof (key) !== "string") {
            throw new Error("Key is not a string");
        }
        if (storage[key]) {
            throw new Error("Key exists");
        }
        storage[key] = value;
    },
    get: (key) => {
        if (typeof (key) !== "string") {
            throw new Error("Key is not a string");
        }
        if (!storage[key]) {
            throw new Error("Key doesn't exist");
        }
        return storage[key];
    },
    getAll: () => {
        return storage;
    },
    update: (key, value) => {
        if (typeof (key) !== "string") {
            throw new Error("Key is not a string");
        }
        if (storage[key]) {
            throw new Error("Key exists");
        }
        storage[key] = value;
    },
    delete: (key) => {
        delete storage[key];
    },
    clear: () => { 
        storage = [];
    },
    save: () => {
        fs.writeFileSync("./database/storage.json", JSON.stringify(storage));
        console.log("Saved successfully");
    },
    load: () => {
        storage = JSON.parse(fs.readFileSync("./database/storage.json"));
        console.log("Loaded successfully");
    },
    loadAsync: () => {
        return new Promise((resolve, reject) => {
            let data = fs.readFile("./database/storage.json", (err, data) => {
                if (err) {
                    console.log(err);
                }
                storage = JSON.parse(data);
                resolve();
            });
        });
    }

}