"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Decks",
      [
        {
          id: 1,
          name: "Capitales Européennes",
          subject: "Géographie",
          downloads: 0,
          mark: 0,
          playCount: 0,
          userId: 1,
          storeId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Capitales des États des USA",
          subject: "Géographie",
          downloads: 0,
          mark: 0,
          playCount: 0,
          userId: 1,
          storeId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Bases en Anglais",
          subject: "Langues",
          downloads: 0,
          mark: 0,
          playCount: 0,
          userId: 1,
          storeId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Decks", null, {});
  },
};
