"use strict";

import {
  Association,
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import Card from "./card";

class Deck extends Model<InferAttributes<Deck>, InferCreationAttributes<Deck>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare downloads: number;
  declare mark: CreationOptional<number>;
  declare userId: number;

  declare static associations: {
    cards: Association<Deck, Card>;
  };

  static initialize(sequelize: Sequelize) {
    Deck.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        downloads: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        mark: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Deck",
      }
    );
  }
}

export default Deck;
