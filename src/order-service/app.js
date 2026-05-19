const express = require('express');
const app = express();
const PORT = process.env.PORT || 5003;

app.use(express.json());

app.post('/api/orders', (req, res) => {
    const { productId, quantity } = req.body;
    res.status(201).json({
        orderId: Math.floor(100000 + Math.random() * 900000),
        status: "Processing",
        productId: productId || 101,
        quantity: quantity || 1,
        message: "Order initialized successfully. Notification dispatched."
    });
});

app.listen(PORT, () => console.log(`Order Service listening on port ${PORT}`));