import userRepository from "../repositories/userRepository";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

interface LoginData {
  username: string;
  password: string;
}

const register = async (data: RegisterData) => {
  const existingEmail = await userRepository.findByEmail(data.email);
  const existingUsername = await userRepository.findByUsername(data.username);
  if (existingEmail || existingUsername) {
    throw new Error("Vous avez déjà un compte");
  }

  const hash = await argon2.hash(data.password, {
    type: argon2.argon2id,
  });
  const newData = {
    username: data.username,
    email: data.email,
    hash: hash,
  };
  const newUser = await userRepository.addUser(newData);
  // return userRepository.findAll();
  //TODO: do register logic
  // hash password using argon2
  // create new user with `data`
};

const login = (data: LoginData) => {
  //TODO: do login logic
};

export default { register, login };
