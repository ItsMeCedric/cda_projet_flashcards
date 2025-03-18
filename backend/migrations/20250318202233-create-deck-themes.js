"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DeckThemes", {
      deckId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Decks", // Assure-toi que le nom du modèle est correct
          key: "id",
        },
        onDelete: "CASCADE", // Suppression en cascade lorsque le deck est supprimé
      },
      themeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Themes", // Assure-toi que le nom du modèle est correct
          key: "id",
        },
        onDelete: "CASCADE", // Suppression en cascade lorsque le thème est supprimé
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("DeckThemes");
  },
};
