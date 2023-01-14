module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
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
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      icon: {
        type: Sequelize.STRING,
        default: 'default.jpg',
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
          fields: ['name'],
        },
      ],
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
  },
};
