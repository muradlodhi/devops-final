const express = require('express');
const app = express();
const PORT = process.env.PORT || 5002;

// Mock database store inside memory
const mockProducts = [
    { id: 101, name: "Mechanical Keyboard (Linear Switches)", price: 89.99, status: "In Stock" },
    { id: 102, name: "Aesthetic Desk Mat (Dark Theme)", price: 29.99, status: "In Stock" },
    { id: 103, name: "Wireless Ergonomic Mouse", price: 59.99, status: "Out of Stock" }
];

app.get('/api/products', (req, res) => {
    res.json({
        service: "Product Service",
        status: "Healthy",
        timestamp: new Date(),
        data: mockProducts
    });
});

app.get('/api/products/:id', (req, res) => {
    const product = mockProducts.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
});

app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
});