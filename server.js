const restify = require('restify');
const bodyParser = require('restify-plugins').bodyParser;

const server = restify.createServer();
server.use(bodyParser());

server.get('/orders/:orderId', (req, res, next) => {
    res.json(200, {
        orderId: req.params.orderId,
        productId: 1234,
        address: {
            city: "chennai"
        }
    })
    return next();
});

server.get('/products/:productId', (req, res, next) => {
    console.log(req.params)
    res.json(200, {
        productId: req.params.productId,
        name: "Mobile phone",
        seller: {
            city: "mumbai"
        }
    });
    return next();
})

server.post('/shipments/_ship', (req, res, next) => {
    console.log(req.body.toCity);
    console.log(req.body.fromCity);
    
    res.json(200, {
        shipmentId: 123456, 
        toCity: req.body.toCity,
        fromCity: req.body.fromCity
    });
    return next();
})


server.listen(8082, ()=> (console.log('Server started at 8082')));