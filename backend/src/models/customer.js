'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  Customer.associate = function(models) {
    const { Customer, Order } = models

    Customer.hasMany(Order)
  };
  return Customer;
};