import User from "../../models/user";
import { UserCreationAttributes } from "../../models/user";

const addUser = async (data: UserCreationAttributes) => {
  return await User.create(data);
};
const findAll = async () => {
  return await User.findAll();
};
const findByEmail = async (data: string) => {
  return await User.findOne({ where: { email: data } });
};
const findByUsername = async (data: string) => {
  return await User.findOne({ where: { username: data } });
};
export default { findAll, findByEmail, findByUsername, addUser };
