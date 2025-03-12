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

class Store extends Model<InferAttributes<Store>, InferCreationAttributes<Store>> {
  declare id: CreationOptional<number>;
  declare deckId: ForeignKey<Deck["id"]>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  static initialize(sequelize: Sequelize) {
    Store.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
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
        modelName: "Store",
        indexes: [{ fields: ["deckId"] }],
      }
    );
  }
}

export default Store;

