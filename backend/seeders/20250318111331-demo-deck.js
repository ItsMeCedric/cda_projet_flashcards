"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Decks", [
      {
        name: "Javascript",
        subject: "Apprendre le JS basique",
        userId: 2,
      },
      {
        name: "Maths",
        subject: "Apprendre les maths basique",
        userId: 2,
      },
      {
        name: "Français",
        subject: "Apprendre le français basique",
        userId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
