module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    status: DataTypes.ENUM
  }, {})
  Order.associate = function(models) {
    const { Order } = models
    Order.belongsTo(models.Clients)
  }
  return Order
}