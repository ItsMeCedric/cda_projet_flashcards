"use strict";

import { Association, CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import Card from "./card";

class Deck extends Model<InferAttributes<Deck>, InferCreationAttributes<Deck>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare downloads: number;
  declare mark: number;
  declare userId: number;

  declare static associations: {
    cards: Association<Deck, Card>;
  };
}

export default Deck;
