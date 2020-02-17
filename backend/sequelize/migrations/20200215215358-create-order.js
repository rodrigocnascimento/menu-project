"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Customers",
          key: "id"
        }
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ["Novo","Entregue","Pendente"]
      },
      value: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      category: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ["Merceria", "Frios", "Bebidas", "Limpeza", "Higiene"],
      },
      location: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ["RJ", "SP", "MG"],
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Orders");
  }
};