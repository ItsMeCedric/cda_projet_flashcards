import userRepository from "../repositories/userRepository";
import deckRepository from "../repositories/deckRepository";

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

interface LoginData {
  username: string;
  password: string;
}

const register = (data: RegisterData) => {
  return userRepository.findAll();
  //TODO: do register logic
  // hash password using argon2
  // create new user with `data`
};

const login = (data: LoginData) => {
  //TODO: do login logic
};

const getDecksByUserId = async (userId: string) => {
  return await deckRepository.findByUserId(userId);
};

export default { register, login, getDecksByUserId };
