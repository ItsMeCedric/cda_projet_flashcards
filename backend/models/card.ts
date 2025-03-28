import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import Deck from "./deck";

class Card extends Model<InferAttributes<Card>, InferCreationAttributes<Card>> {
  declare id: CreationOptional<number>;
  declare question: string;
  declare questionImg: CreationOptional<string>;
  declare answer: string;
  declare answerImg: CreationOptional<string>;
  declare playedDate: CreationOptional<Date>;
  declare boxNumber: CreationOptional<number>;
  declare deckId: ForeignKey<Deck["id"]>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  static initialize(sequelize: Sequelize) {
    Card.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        question: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        answer: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        questionImg: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        answerImg: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        playedDate: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: Date.now(),
        },
        boxNumber: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: 0,
        },
        deckId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: "Card",
        indexes: [{ fields: ["deckId"] }],
      }
    );
  }
}

export default Card;
