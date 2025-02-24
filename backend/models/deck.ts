"use strict";

import { DataTypes } from "sequelize";
import db from ".";
import { DeckInstance } from "../src/@types/deck";

const Deck = db.define<DeckInstance>("Deck", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  name: DataTypes.STRING,
  downloads: DataTypes.NUMBER,
  mark: DataTypes.NUMBER,
});

export default Deck;

