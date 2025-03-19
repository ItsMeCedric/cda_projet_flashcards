import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

class Theme extends Model<InferAttributes<Theme>, InferCreationAttributes<Theme>> {
  declare id: CreationOptional<number>;
  declare label: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  static initialize(sequelize: Sequelize) {
    Theme.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        label: {
          type: DataTypes.STRING,
          unique: true,
        },

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: "Theme",
      }
    );
  }
}

export default Theme;
