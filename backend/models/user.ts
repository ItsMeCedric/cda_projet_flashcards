"use strict";

import { Model, InferCreationAttributes, CreationOptional, InferAttributes } from "sequelize";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<string>;
  declare username: string;
  declare email: string;
  declare profilePicture: CreationOptional<string>;
  declare hash: string;
}

export default User;
