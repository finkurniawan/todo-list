module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        allowNull: false,
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      is_completed: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      deadline: {
        type: Sequelize.DATE,
      },
      category_id: {
        default: '1',
        type: Sequelize.INTEGER,
      },
      over_time: {
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      indexes: [
        {
          unique: false,
          fields: ['is_complated', 'title'],
        },
      ],
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('todos');
  },
};
