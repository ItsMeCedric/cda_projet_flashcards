"use strict";

import { Optional, Model, DataTypes } from "sequelize";
import db from ".";

interface DeckAttributes {
  id: string;
  name: string;
  userId: string;
}

interface DeckCreationAttributes extends Optional<DeckAttributes, "id"> {}

interface DeckInstance extends Model<DeckAttributes, DeckCreationAttributes>, DeckAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Deck = db.define<DeckInstance>("Deck", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "User",
      key: "id",
    },
  },
});

export default Deck;
