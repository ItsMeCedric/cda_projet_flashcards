import db from "../../models/index";

const findAll = async () => {
  return await db.User.findAll();
};

export default { findAll };
