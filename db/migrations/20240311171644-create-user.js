'use strict';

const { userSchema, USER_TABLE } = require('./../models/user.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, userSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE)
  }
};
