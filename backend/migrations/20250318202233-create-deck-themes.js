"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DeckThemes", {
      deckId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Decks",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      themeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Themes",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("DeckThemes");
  },
};
