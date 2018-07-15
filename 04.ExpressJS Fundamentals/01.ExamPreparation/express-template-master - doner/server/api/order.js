const productApi = require('../api/product');
const Order = require('mongoose').model('Order');

async function create(data) {
    const creator = data.creator;
    const product = data.product_id;
    const toppings = [];
    for (let key in data) {
        if (!data.hasOwnProperty(val)) continue;
        if (key !== 'creator' && key !== 'product_id') {
            toppings.push(key);
        }
    }
    return await Order.create({
        creator,
        product,
        toppings
    });
}

async function getByUserId(userId) {
    const orders = await Order.find({ creator: userId }).populate('product');
    orders.map(o => {
        o.dateCreated = o.dateCreated.toISOString();
        o.productName = productApi.getName(o.product.category, o.product.size)
    });
    return orders;
}

async function getById(id) {
    const order = await Order.findById(id).populate('order');
    order.productName = productApi.getName(order.product.category, order.product.size)
    switch (order.status) {
        case 'Pending':
            order.pending = true;
            break;
        case 'In progress':
            order.progress = true;
            break;
        case 'In Transit':
            order.transit = true;
            break;
        case 'Delivered':
            order.delivered = true;
            break;
    }
    return order
}


module.exports = {
    create,
    getByUserId,
    getById
};