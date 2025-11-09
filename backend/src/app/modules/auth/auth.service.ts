import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser } from "../users/user.interface.js";
import { User } from "../users/user.model.js";
import { ApiError } from "../../utils/ApiError.js";

const SALT_ROUNDS = 10;

// Create a new user
const createUser = async (payload: Partial<IUser>) => {
  if (!payload.email || !payload.password) {
    throw new ApiError(400, "Email and password are required");
  }

  const exist = await User.findOne({ email: payload.email });
  if (exist) throw new ApiError(400, "Email already registered");

  const hashedPassword = await bcrypt.hash(payload.password, SALT_ROUNDS);
  const user = await User.create({ ...payload, password: hashedPassword });
  return user;
};

// Validate user login
const validateUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new ApiError(401, "Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new ApiError(401, "Invalid credentials");

  return user;
};

// Generate JWT token
const generateToken = (user: { id: string; email: string }) => {
  const secret: string = process.env.JWT_SECRET as string;
  const expiresIn: string = process.env.JWT_EXPIRES_IN || "7d";

  // TypeScript-safe jwt.sign
  const token = jwt.sign(
    { id: user.id, email: user.email },
    secret,
    { expiresIn } // must be inside options object
  );

  return token;
};

export const AuthService = {
  createUser,
  validateUser,
  generateToken,
};
