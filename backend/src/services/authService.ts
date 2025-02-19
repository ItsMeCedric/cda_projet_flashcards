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
  // return newUser
  // return pas nécessaire ?
};

const login = async (data: LoginData) => {
  // log avec le username ou l'email
  const user = await userRepository.findByUsername(data.username);
  if (user) {
    const isPasswordValid = await argon2.verify(user.hash, data.password);
    if (!isPasswordValid) {
      throw new Error("Identifiant ou mot de passe invalide");
    }
  } else {
    throw new Error("Identifiant ou mot de passe invalide");
  }
  const token = jwt.sign({ id: user.id, username: user.username }, "le_secret", {
    expiresIn: "1h",
  });
  // return token;
  //TODO: do login logic
};

export default { register, login };
