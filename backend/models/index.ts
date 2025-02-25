"use strict";

import { Sequelize } from "sequelize";
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable] as string, config)
  : new Sequelize(config.database, config.username, config.password, config);

import User from "./user";
import Deck from "./deck";

sequelize.sync({ alter: true });

export default sequelize;
