"use strict";

import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";

class Card extends Model<InferAttributes<Card>, InferCreationAttributes<Card>> {
  declare id: CreationOptional<number>;
  declare question: string;
  declare questionImg: CreationOptional<string>;
  declare answer: string;
  declare answerImg: CreationOptional<string>;
  declare playedDate: CreationOptional<Date>;
  declare boxNumber: CreationOptional<number>;
  declare deckId: number;
}

export default Card;
