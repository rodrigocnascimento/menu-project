module.exports = (sequelize, DataTypes) => {
  
  const Order = sequelize.define('Order', {
    status: DataTypes.ENUM
  }, {})

  Order.associate = function(models) {
    const { Order, Customer } = models

    Order.belongsTo(Customer)
  }
  return Order
}