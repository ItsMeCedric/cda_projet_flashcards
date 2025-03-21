import { Sequelize } from "sequelize";

import Deck from "./deck";
import User from "./user";
import Card from "./card";
import Store from "./store";
import Theme from "./theme";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const db = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable] as string, config)
  : new Sequelize(config.database, config.username, config.password, config);

User.initialize(db);
Deck.initialize(db);
Card.initialize(db);
Store.initialize(db);
Theme.initialize(db);

Deck.belongsToMany(Theme, {
  through: "DeckThemes",
  foreignKey: "deckId",
  onDelete: "CASCADE",
});

Theme.belongsToMany(Deck, {
  through: "DeckThemes",
  foreignKey: "themeId",
  onDelete: "CASCADE",
});

User.hasMany(Deck, {
  foreignKey: "userId",
  as: "decks",
  onDelete: "CASCADE",
});

Deck.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

Deck.hasMany(Card, {
  foreignKey: "deckId",
  as: "cards",
  onDelete: "CASCADE",
});

Card.belongsTo(Deck, {
  foreignKey: "deckId",
  as: "deck",
});

Deck.hasOne(Store, {
  foreignKey: "deckId",
  onDelete: "CASCADE",
});

Store.belongsTo(Deck, {
  foreignKey: "deckId",
});

export default db;
