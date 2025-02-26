"use strict";

import { Model, InferCreationAttributes, CreationOptional, InferAttributes, Association } from "sequelize";
import Deck from "./deck";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<string>;
  declare username: string;
  declare email: string;
  declare profilePicture: CreationOptional<string>;
  declare hash: string;

  declare static associations: {
    decks: Association<User, Deck>;
  };
}

export default User;
