const Sequelize = require("sequelize")
/**
 * Clients Model
 * 
 * @param {*} sequelize 
 * @param {*} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define("Orders", {
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
      }, {
        freezeTableName: true,
        underscored: true
    })

    Orders.associate = function(models) {
        Orders.belongsTo(models.Clients, {
            foreignKey: 'client_id',
            targetKey: 'client_id'
        })
    }

    return Orders
}