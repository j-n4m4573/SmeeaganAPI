var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema ({
    name : String,
    id: String,
    photo: String
})

module.exports = mongoose.model('Product', ProductSchema)
