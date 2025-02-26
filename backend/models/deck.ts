"use strict";

import { CreationOptional, InferAttributes, InferCreationAttributes, Model, NonAttribute } from "sequelize";

class Deck extends Model<InferAttributes<Deck>, InferCreationAttributes<Deck>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare downloads: number;
  declare mark: number;
  declare userId: number;
}

export default Deck;
