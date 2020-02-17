module.exports = (sequelize, DataTypes) => {
  
  const Order = sequelize.define("Order", {
    status: {
      type: DataTypes.ENUM,
      values: ["Ativo","Inativo","Deletado"]
    },
    value: {
      type: DataTypes.DOUBLE
    },
    category: {
      type: DataTypes.ENUM,
      values: ["Merceria", "Frios", "Bebidas", "Limpeza", "Higiene"],
    },
    location: {
      type: DataTypes.ENUM,
      values: ["RJ", "SP", "MG"],
    },
  }, {})

  Order.associate = function(models) {
    const { Order, Customer } = models

    Order.belongsTo(Customer)
  }
  return Order
}