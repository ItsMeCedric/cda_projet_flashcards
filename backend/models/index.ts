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

Deck.hasMany(Theme, {
  foreignKey: "deckId",
  as: "themes",
});

Theme.belongsTo(Deck, {
  foreignKey: "deckId",
  as: "deck",
});

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

Store.hasOne(Deck, {
  foreignKey: "deckId",
  as: "deck",
});

Deck.belongsTo(Store, {
  foreignKey: "storeId",
  as: "store",
});

export default db;
