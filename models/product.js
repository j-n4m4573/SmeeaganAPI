var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema ({
    product_name : String,
    brand_id: String,
    photo: String,
    type: String,
    category: String
})

module.exports = mongoose.model('Product', ProductSchema)
