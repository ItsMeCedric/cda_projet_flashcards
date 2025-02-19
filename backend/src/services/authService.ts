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
<<<<<<< HEAD
    secret: Buffer.from(process.env.ARGON2SECRET as string),
=======
>>>>>>> ac0228e (ajout logique du register et certaines fonctions dans le userRepository needed)
  });
  const newData = {
    username: data.username,
    email: data.email,
    hash: hash,
  };
<<<<<<< HEAD
  await userRepository.addUser(newData);
=======
  const newUser = await userRepository.addUser(newData);
  // return userRepository.findAll();
  //TODO: do register logic
  // hash password using argon2
  // create new user with `data`
>>>>>>> ac0228e (ajout logique du register et certaines fonctions dans le userRepository needed)
};

const login = async (data: LoginData) => {
  // log avec le username ou l'email
  const user = await userRepository.findByUsername(data.username);
  if (user) {
    const isPasswordValid = await argon2.verify(user.hash, data.password, {
      secret: Buffer.from(process.env.ARGON2SECRET as string),
    });
    if (!isPasswordValid) {
      throw new Error("Identifiant ou mot de passe invalide");
    }
  } else {
    throw new Error("Identifiant ou mot de passe invalide");
  }
  const token = jwt.sign({ id: user.id }, process.env.JWTSECRET as string, {
    expiresIn: "1d",
  });
  return token;
};

export default { register, login };
