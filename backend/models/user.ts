import {
  Model,
  InferCreationAttributes,
  CreationOptional,
  InferAttributes,
  Association,
  Sequelize,
  DataTypes,
} from "sequelize";
import Deck from "./deck";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<string>;
  declare role: CreationOptional<string>;
  declare username: string;
  declare email: string;
  declare profilePicture: CreationOptional<string>;
  declare hash: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare static associations: {
    decks: Association<User, Deck>;
  };

  toJSON() {
    const values = super.toJSON() as Partial<InferAttributes<User>>;
    delete values.hash;
    return values;
  }

  static initialize(sequelize: Sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        role: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "user",
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        profilePicture: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue:
            "https://media.istockphoto.com/id/535726735/fr/photo/flash-mcqueen-main-protagoniste-de-disney-pixar-avec-f.jpg?s=2048x2048&w=is&k=20&c=mOZCPinpnzw8UeB71JDHIQ_az2zbVSQOpnGKsPp71u8%3D&quality=lossless",
        },
        hash: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: "User",
      }
    );
  }
}

export default User;
