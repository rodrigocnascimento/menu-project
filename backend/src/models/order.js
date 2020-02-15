module.exports = (sequelize, DataTypes) => {
  
  const Order = sequelize.define('Order', {
    status: {
      type: DataTypes.ENUM,
      values: ["Ativo","Inativo","Deletado"]
    }
  }, {})

  Order.associate = function(models) {
    const { Order, Customer } = models

    Order.belongsTo(Customer)
  }
  return Order
}