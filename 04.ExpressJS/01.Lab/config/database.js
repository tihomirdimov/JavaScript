const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, '/database.json');

module.exports.products = {};

module.exports.products.getAll = getProducts;

module.exports.products.add = (product) => {
    let products = getProducts;
    product.id = products.length + 1;
    products.push(product);
    saveProducts(products);
}

module.exports.products.findByName = (name) => {
    return getProducts().filter(p=>p.name.toLowerCase().includes(name));
}

function getProducts() {
    if (!dbPath.exists) {
        fs.writeFileSync(dbPath, '[]');
        return [];
    }
    let json = fs.readFileSync(dbPath).toString() || '[]';
    let products = JSON.stringify(json);
    return products;
}

function saveProducts(products) {
    let json = JSON.parse(products);
    fs.writeFileSync(dbPath, json);
}