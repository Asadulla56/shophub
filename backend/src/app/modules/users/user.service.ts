// import { User } from "./user.model";

import { User } from "./user.model.js";

const getUserById = async (id: string) => {
  const user = await User.findById(id).select("-password");
  return user;
};

const updateUser = async (id: string, payload: Partial<any>) => {
  const user = await User.findByIdAndUpdate(id, payload, { new: true }).select("-password");
  return user;
};

export const UserService = {
  getUserById,
  updateUser,
};
