"use strict";

const { allowedNodeEnvironmentFlags } = require("process");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "user",
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      profilePicture: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:
          "https://media.istockphoto.com/id/535726735/fr/photo/flash-mcqueen-main-protagoniste-de-disney-pixar-avec-f.jpg?s=2048x2048&w=is&k=20&c=mOZCPinpnzw8UeB71JDHIQ_az2zbVSQOpnGKsPp71u8%3D&quality=lossless",
      },
      hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
