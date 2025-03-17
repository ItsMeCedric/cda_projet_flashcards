"use strict";

require("dotenv").config();
const argon2 = require("argon2");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "admin",
          hash: await argon2.hash(process.env.ADMIN_PASSWORD, {
            type: argon2.argon2id,
            secret: Buffer.from(process.env.ARGON2SECRET),
          }),
          email: "admin@admin.com",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
