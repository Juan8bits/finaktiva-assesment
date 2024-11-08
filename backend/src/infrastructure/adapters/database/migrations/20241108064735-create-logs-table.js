const { logType } = require('../../../../application/domain/utils/types');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('logs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      description: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      type: {
        type: Sequelize.ENUM(logType.INFO, logType.ERROR, logType.WARNING),
        allowNUll: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      from_app: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        field: 'created_at'
      },
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('logs')
  }
}
