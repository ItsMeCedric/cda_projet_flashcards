import {
  Association,
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyCountAssociationsMixin,
} from "sequelize";
import Card from "./card";
import User from "./user";
import Theme from "./theme";

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
  declare getThemes: HasManyGetAssociationsMixin<Theme>;
  declare addTheme: HasManyAddAssociationMixin<Theme, number>;
  declare addThemes: HasManyAddAssociationsMixin<Theme, number>;
  declare setThemes: HasManySetAssociationsMixin<Theme, number>;
  declare removeTheme: HasManyRemoveAssociationMixin<Theme, number>;
  declare removeProjects: HasManyRemoveAssociationsMixin<Theme, number>;
  declare hasTheme: HasManyHasAssociationMixin<Theme, number>;
  declare hasThemes: HasManyHasAssociationsMixin<Theme, number>;
  declare countThemes: HasManyCountAssociationsMixin;
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
