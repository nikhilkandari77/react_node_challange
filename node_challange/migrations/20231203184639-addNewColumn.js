'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('users', 'username', {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      }),
      queryInterface.addColumn('users', 'password', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
    ]);
  },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
