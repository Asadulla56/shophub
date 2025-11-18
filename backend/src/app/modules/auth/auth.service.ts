import bcrypt from "bcrypt";
import jwt, { JwtPayload, Secret, SignOptions } from "jsonwebtoken";
import type { StringValue } from "ms";
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
  const secret = process.env.JWT_SECRET as Secret;
  const expiresIn = (process.env.JWT_EXPIRES_IN || "7d") as StringValue;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }

  const payload: JwtPayload = {
    id: user.id,
    email: user.email,
  };

  const options: SignOptions = {
    expiresIn,
  };

  return jwt.sign(payload, secret, options);
};

export const AuthService = {
  createUser,
  validateUser,
  generateToken,
};