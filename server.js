const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Configure Gmail
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Test route
app.get("/", (req, res) => {
    res.send("Nai's Transit Backend is Running 🚍");
});

// Send OTP
app.post("/send-otp", async (req, res) => {

    const { email } = req.body;

    const otp = Math.floor(100000 + Math.random() * 900000);

    try {

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Nai's Transit Password Reset",
            html: `
                <h2>Nai's Transit</h2>
                <p>Your password reset code is:</p>
                <h1>${otp}</h1>
                <p>This code expires in 10 minutes.</p>
            `
        });

        res.json({
            success: true,
            otp: otp
        });

    } catch (error) {

        console.log(error.message);
        console.log(error.response);
        console.log(error.responseCode);    

        res.status(500).json({
            success: false,
            message: "Email failed to send"
        });

    }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});