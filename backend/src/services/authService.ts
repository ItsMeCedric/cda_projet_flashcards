import userRepository from "../repositories/userRepository";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

const register = async (data: RegisterData) => {
  let existingEmail = await userRepository.findByEmail(data.email);
  let existingUsername = await userRepository.findByUsername(data.username);
  if (existingEmail || existingUsername) {
    throw "Vous avez déjà un compte";
  }

  const hash = await argon2.hash(data.password, {
    type: argon2.argon2id,
    secret: Buffer.from(process.env.ARGON2SECRET as string),
  });
  const newData = {
    id: undefined,
    username: data.username,
    email: data.email,
    hash: hash,
    role: "user",
    profilePicture: undefined,
    createdAt: undefined,
    updatedAt: undefined,
  };
  await userRepository.create(newData);
};

const login = async (data: LoginData) => {
  const user = await userRepository.findByEmail(data.email);
  if (user) {
    const isPasswordValid = await argon2.verify(user.hash, data.password, {
      secret: Buffer.from(process.env.ARGON2SECRET as string),
    });
    if (!isPasswordValid) {
      throw "Identifiant ou mot de passe invalide";
    }
  } else {
    throw "Identifiant ou mot de passe invalide";
  }
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWTSECRET as string, {
    expiresIn: "2h",
  });

  const { hash, updatedAt, createdAt, ...sendUser } = user.toJSON();
  return { token, user: sendUser };
};

export default { register, login };
