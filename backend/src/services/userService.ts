import { InferAttributes, InferCreationAttributes } from "sequelize";
import userRepository from "../repositories/userRepository";
import user from "../../models/user";
import argon2 from "argon2";

const getAllUsers = () => {
  return userRepository.findAll();
};

const findById = (id: number) => {
  return userRepository.findById(id);
};

const create = (data: InferCreationAttributes<user>) => {
  return userRepository.create(data);
};

const update = async (data: InferAttributes<user>, file: Express.Multer.File | undefined) => {
  if (data.password) {
    data.hash = await argon2.hash(data.password, {
      type: argon2.argon2id,
      secret: Buffer.from(process.env.ARGON2SECRET as string),
    });
  }
  if (file) {
    data.profilePicture = `/uploads/${file.filename}`;
  }

  return userRepository.update(data);
};

const destroy = (id: number) => {
  return userRepository.destroy(id);
};

export default { getAllUsers, findById, create, update, destroy };
