const Sequelize = require("sequelize")

const Orders = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Orders", {
      order_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Clients",
          key: "client_id"
        }
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ["Inativo","Ativo","Deletado"]
      },
      createdAt: {
        field: "created_at",
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        field: "updated_at",
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("Orders")
  }
}

module.exports = Orders