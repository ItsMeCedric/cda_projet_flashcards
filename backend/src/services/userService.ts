import { InferAttributes, InferCreationAttributes } from "sequelize";
import userRepository from "../repositories/userRepository";
import User from "../../models/user";
import argon2 from "argon2";

const getAllUsers = () => {
  return userRepository.findAll();
};

const findById = (id: number) => {
  return userRepository.findById(id);
};

const create = (data: InferCreationAttributes<User>) => {
  return userRepository.create(data);
};

const update = async (
  data: {
    username: string | undefined;
    email: string | undefined;
    password: string | undefined;
    hash: string | undefined;
    profilePicture: string | undefined;
  },
  file: Express.Multer.File | undefined
) => {
  let user = undefined;
  let userEmail = undefined;
  if (data.username) user = await userRepository.findByUsername(data.username);
  if (data.email) userEmail = await userRepository.findByEmail(data.email);
  if (user || userEmail) {
    throw new Error();
  }
  if (data.password) {
    data.hash = await argon2.hash(data.password, {
      type: argon2.argon2id,
      secret: Buffer.from(process.env.ARGON2SECRET as string),
    });
  }
  if (file) {
    data.profilePicture = `/uploads/${file.filename}`;
  }

  return userRepository.update(data as unknown as InferAttributes<User>);
};

const destroy = (id: number) => {
  return userRepository.destroy(id);
};

export default { getAllUsers, findById, create, update, destroy };
