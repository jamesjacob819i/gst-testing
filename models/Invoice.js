const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  clientName: String,
  phone: String,
  address: String,
  products: [
    {
      name: String,
      quantity: Number,
      rate: Number,
      amount: Number
    }
  ],
  total: Number,
  cgst: Number,
  sgst: Number,
  igst: Number,
  freight: Number,
  grandTotal: Number,
  amountInWords: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Invoice', invoiceSchema);
