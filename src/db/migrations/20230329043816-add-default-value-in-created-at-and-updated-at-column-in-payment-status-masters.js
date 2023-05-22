'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // add default value in created_at and updated_at column in table
    await queryInterface.changeColumn('payment_status_masters', 'created_at', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    });
    await queryInterface.changeColumn('payment_status_masters', 'updated_at', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    });
  },

  async down (queryInterface, Sequelize) {
    // remove default value in created_at and updated_at column in table
    await queryInterface.changeColumn('payment_status_masters', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false
    });
    await queryInterface.changeColumn('payment_status_masters', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: false
    });
  }
};