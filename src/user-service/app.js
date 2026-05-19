const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.post('/api/user/login', (req, res) => {
    res.json({
        success: true,
        message: "Mock login successful",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mockTokenString"
    });
});

app.get('/api/user/profile', (req, res) => {
    res.json({
        id: "usr_99",
        name: "Murad Lodhi",
        email: "murad@example.com",
        campus: "CUI Lahore"
    });
});

app.listen(PORT, () => console.log(`User Service listening on port ${PORT}`));