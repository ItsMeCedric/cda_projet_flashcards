// todo : Ajouter le type de credentials
// todo : Appel à l'API + return des données

export const registerUser = async (credentials: undefined) => {
  console.log("authService/RegisterUser");
  console.log(credentials);
};

export const loginUser = async (credentials: undefined) => {
  console.log("authService/loginUser");
  console.log(credentials);
};

export const validateUserToken = async () => {
  console.log("authService/validateUserToken");
};

export const logoutUser = async () => {
  console.log("authService/logoutUser");
};
