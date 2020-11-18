const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/buy/:name', function (req, res) {
    let name = req.params.name
    for (let item of store) {
        if (item.name == name) {
            --item.inventory
            res.send(item)
        }
    }
})

app.get('/priceCheck/:name', function(req, res){
    let name = req.params.name
    let itemPrice = {price: null}
    for (let item of store) {
        if (item.name == name) {
            itemPrice = {price: item.price}
        }
    }
    res.send(itemPrice)
})

app.get('/', function (req, res){
    console.log('hi')
    res.send('Server is up and running smoothly')
})

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})