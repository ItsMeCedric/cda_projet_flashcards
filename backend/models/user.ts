"use strict";

import {
  Model,
  InferCreationAttributes,
  CreationOptional,
  InferAttributes,
  Association,
  Sequelize,
  DataTypes,
} from "sequelize";
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

  static initialize(sequelize: Sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        profilePicture: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        hash: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "User",
      }
    );
  }
}

export default User;
