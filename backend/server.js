const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const mongoURI = process.env.MONGO_URI;;

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    imageUrl: String,
});

const Product = mongoose.model('Product', productSchema);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce API');
});

// Route to get all products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).send(err);
    }
});
app.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.json(product);
    } catch (err) {
        console.error('Error fetching product:', err);
        res.status(500).send(err);
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
