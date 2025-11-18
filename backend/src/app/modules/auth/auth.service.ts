import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser } from "../users/user.interface.js";
import { User } from "../users/user.model.js";
import { ApiError } from "../../utils/ApiError.js";

const SALT_ROUNDS = process.env.SALT_ROUNDS ? parseInt(process.env.SALT_ROUNDS) : 10;

// Create a new user
const createUser = async (payload: Partial<IUser>) => {
  if (!payload.email || !payload.password) {
    throw new ApiError(400, "Email and password are required");
  }

  const exist = await User.findOne({ email: payload.email });
  if (exist) throw new ApiError(400, "Email already registered");

  const hashedPassword = await bcrypt.hash(String(payload.password), SALT_ROUNDS);
  const user = await User.create({ ...payload, password: hashedPassword });

  const userObject = user.toObject();
  const { password: _password, ...userWithoutPassword } = userObject;
  
  return userWithoutPassword;
};

// Validate user login
const validateUser = async (email: string, password: string) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user) throw new ApiError(401, "Invalid credentials");

  const isMatch = await bcrypt.compare(password, String(user.password));
  if (!isMatch) throw new ApiError(401, "Invalid credentials");

  const userObject = user.toObject();
  const { password: _password, ...userWithoutPassword } = userObject;

  return userWithoutPassword;
};

// Generate JWT token
const generateToken = (user: { id: string; email: string }) => {
  const secret = process.env.JWT_SECRET;
  const expiresIn = process.env.JWT_EXPIRES_IN || "7d";

  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    secret as string,
    { expiresIn: expiresIn as string }
  );

  return token;
};

export const AuthService = {
  createUser,
  validateUser,
  generateToken,
};