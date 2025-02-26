"use strict";

import { Sequelize } from "sequelize";

import Deck from "./deck";
import User from "./user";
import Card from "./card";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const db = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable] as string, config)
  : new Sequelize(config.database, config.username, config.password, config);

User.hasMany(Deck, {
  foreignKey: "userId",
  as: "decks",
});

Deck.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

Deck.hasMany(Card, {
  foreignKey: "deckId",
  as: "cards",
});

Card.belongsTo(Deck, {
  foreignKey: "deckId",
  as: "deck",
});

export default db;
