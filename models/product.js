var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema ({
    name : String,
    id: String,
    photo: String,
    key: String,
    category: String
})

module.exports = mongoose.model('Product', ProductSchema)
