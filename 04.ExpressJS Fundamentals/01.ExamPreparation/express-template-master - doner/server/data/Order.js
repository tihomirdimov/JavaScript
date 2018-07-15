const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    creator: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: 'User' },
    product: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: 'Product' },
    toppings: { type: [String] },
    status: {type: String, enum: ['Pending', 'In Progress', 'In Transit', 'Delviered'], default: 'Pending'},
    dateCreated: { type: Date, default: Date.now },

});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;