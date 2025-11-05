const connectDB = require("../models/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (email === "admin@gmail.com" && password === "admin") {
        const token = jwt.sign({ email, isAdmin: true }, JWT_SECRET);
        return res.json({ token });
    }

    try {
        const db = await connectDB();
        const user = await db.collection("users").findOne({ email });

        if (!user) return res.status(401).json({ error: "Invalid credentials" });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(401).json({ error: "Invalid credentials" });

        const token = jwt.sign(
            { id: user._id, email: user.email, isAdmin: user.isAdmin },
            JWT_SECRET
        );

        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.register = async (req, res) => {
    const { name, email, password, phone, dob } = req.body;

    try {
        const db = await connectDB();
        const existingUser = await db.collection("users").findOne({ email });

        if (existingUser) return res.status(400).json({ error: "Email already registered" });

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.collection("users").insertOne({
            name,
            email,
            password: hashedPassword,
            phone,
            dob,
            isAdmin: false
        });
        const token = jwt.sign({ email, isAdmin: false }, JWT_SECRET);
        res.status(201).json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUserDetails = async (req, res) => {
    try {
        const db = await connectDB();
        const user = await db
            .collection("users")
            .findOne({ _id: require("mongodb").ObjectId.createFromHexString(req.user.id) },
                { projection: { password: 0 } });

        if (!user) return res.status(404).json({ error: "User not found" });

        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};