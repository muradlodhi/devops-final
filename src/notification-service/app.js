const express = require('express');
const app = express();
const PORT = process.env.PORT || 5004;

app.use(express.json());

app.post('/api/notify', (req, res) => {
    const { email, message } = req.body;
    console.log(`[SMTP MOCK] Dispatching alert to ${email}: ${message}`);
    res.json({
        status: "Sent",
        recipient: email || "admin@example.com",
        timestamp: new Date()
    });
});

app.listen(PORT, () => console.log(`Notification Service listening on port ${PORT}`));