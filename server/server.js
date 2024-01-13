// Desc: Server file for the application
const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors())
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;
const Stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/payment', async (req, res) => {
    console.log(token);
    await Stripe.charges.create({
        source:req.body.token.id,
        amount:req.body.amount,
        currency:'rs',
    });
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});