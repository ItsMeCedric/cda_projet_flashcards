import {
  Association,
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import Card from "./card";
import User from "./user";

class Deck extends Model<InferAttributes<Deck>, InferCreationAttributes<Deck>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare subject: string;
  declare downloads: number;
  declare mark: CreationOptional<number>;
  declare playCount: CreationOptional<number>;
  declare userId: ForeignKey<User["id"]>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare static associations: {
    cards: Association<Deck, Card>;
  };

  static initialize(sequelize: Sequelize) {
    Deck.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        subject: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        downloads: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        mark: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        playCount: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: 0,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: "Deck",
        indexes: [{ fields: ["userId"] }],
      }
    );
  }
}

export default Deck;
