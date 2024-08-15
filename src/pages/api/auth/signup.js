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
  if (password.length < 6) {
    res
      .status(400)
      .json({ message: "Password should be minimum of 6 caharcters" });
  }

  const existingUser = await User.findOne({ email });
  if (password.length < 6) {
    res
      .status(400)
      .json({ message: "Password should be minimum of 6 caharcters" });
  }
  if (existingUser) {
    return res.status(422).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name: name,
    email: email,
    password: hashedPassword,
  });

  await newUser.save();

  res.status(201).json({ message: "User created" });
}
