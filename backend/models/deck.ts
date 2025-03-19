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
import Store from "./store";
import Theme from "./theme";

class Deck extends Model<InferAttributes<Deck>, InferCreationAttributes<Deck>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare subject: string;
  declare downloads: number;
  declare mark: CreationOptional<number>;
  declare playCount: CreationOptional<number>;
  declare userId: ForeignKey<User["id"]>;
  declare storeId: CreationOptional<ForeignKey<Store["id"]>>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare static associations: {
    cards: Association<Deck, Card>;
    store: Association<Deck, Store>;
    theme: Association<Deck, Theme>;
  };

  static initialize(sequelize: Sequelize) {
    Deck.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
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
        storeId: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: undefined,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: "Deck",
        indexes: [{ fields: ["userId", "storeId"] }],
      }
    );
  }
}

export default Deck;
