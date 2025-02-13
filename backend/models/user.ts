"use strict";

import { Optional, Model, DataTypes } from "sequelize";
import db from ".";

interface UserAttributes {
  id: string;
  username: string;
  email: string;
  profilePicture: string;
  hash: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const User = db.define<UserInstance>("User", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  profilePicture: DataTypes.STRING,
  hash: DataTypes.STRING,
});

export default User;
