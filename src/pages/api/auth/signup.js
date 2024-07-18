// pages/api/auth/signup.js
import dbConnect from "../../../lib/mongodb";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  await dbConnect();

  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(422).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  res.status(201).json({ message: "User created" });
}
