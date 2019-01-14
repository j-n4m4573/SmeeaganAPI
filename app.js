const express = require('express')
const app = express()
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Product = require('./models/product');



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var port = process.env.PORT || 3000;

// mongoose.connect('mongodb://localhost:27017/SmeeaganAPI');
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/SmeeaganAPI');

var router = express.Router();
// Routes fixed with api prefix
app.use('/api', router);

// Middleware
// middleware to use for all requests
router.use(function(req, res, next) {

    console.log("Hello, processing going down... aight.. hang tight")
    next()
})

// TEST ROUTE
router.get('/', (req, res) => {
    res.json({message: 'Welcome to our API!'})
})

router.route('/products')
    .post(function(req, res) {

        var product = new Product()
        product.name = req.body.name;
        product.id = req.body.id;
        product.photo = req.body.photo;

        product.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json(req.body)
            // res.json({message: "Product was successfully created"});
        });
    })

    .get(function(req, res) {
        Product.find(function(err, products) {
            if (err) {
                res.send(err);
            }
            res.json(products);
        });
    });

router.route('/product/:product_id')
    .get(function(req, res) {
        Product.findById(req.params.product_id, function(err, product) {
            if (err) {
                res.send(err);
            }
            res.json(product);
        });
    });

router.route('/product/:photo')
    .get(function(req, res) {
        Product.find({photo:req.params.photo}, function(err, product) {
            if (err) {
                res.send(err);
            }
            res.json(product);
        });
    });






app.listen(port);
console.log('Server listening on port ' + port);
