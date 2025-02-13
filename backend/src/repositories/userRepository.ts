import User from "../../models/user";

const findAll = async () => {
  return await User.findAll();
};

export default { findAll };
