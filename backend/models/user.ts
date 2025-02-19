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

export interface UserCreationAttributes extends Optional<UserAttributes, "id" | "profilePicture"> {}

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
  username: { allowNull: false, unique: true, type: DataTypes.STRING },
  email: { allowNull: false, unique: true, type: DataTypes.STRING },
  profilePicture: DataTypes.STRING,
  hash: DataTypes.STRING,
});

export default User;
