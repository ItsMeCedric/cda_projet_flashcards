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
  //TODO: do register logic
  // hash password using argon2
  // create new user with `data`
};

const login = (data: LoginData) => {
  //TODO: do login logic
};

export default { register, login };
