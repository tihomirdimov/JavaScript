let products = [
    {
        "id": 1,
        "name": "Dell Latitude E7275",
        "description": "12.5\" 2-in-1 for getting down to business with laptop power, tablet flexibility and premium materials with accessories for mobile professionals.",
        "price": "2889",
        "image": "https://laptop.bg/system/images/133225/normal/dell_latitude_e7275_N002LE727512EMEA.jpg"
    },
    {
        "id": 2,
        "name": "Lenovo Ideacentre Stick 300",
        "description": "- Intel Atom Z3735F<br />- 32GB eMMC<br />- 2GB DDR3L<br />- Windows 8.1",
        "price": "258",
        "image": "https://desktop.bg/system/images/92642/large/lenovo_ideacentre_stick_300_90ER0005RN.jpg"
    },
    {
        "id": 3,
        "name": "Lenovo Simple Backpack",
        "description": "The Lenovo Simple Backpack is an inexpensive full size backpack with secure padded laptop compartment, and plenty of additional storage space.",
        "price": "26",
        "image": "https://laptop.bg/system/images/18430/normal/lenovo_simple_backpack.jpg"
    },
];
let counter = products.length;

module.exports.products = {};

module.exports.products.getAll = () => {
    return products;
};

module.exports.products.add = (product) => {
    product.id = counter++;
    products.push(product);
};

module.exports.products.findByName = (name) => {
    let product = null;
    for (let p of products) {
        if (p == name) {
            return p;
        }
    }
    return product;
}