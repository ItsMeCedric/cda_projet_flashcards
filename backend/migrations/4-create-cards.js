"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cards", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      question: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      answer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      questionImg: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      answerImg: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      playedDate: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Date.now(),
      },
      boxNumber: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      deckId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "Decks",
          key: "id",
        },
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Cards");
  },
};
