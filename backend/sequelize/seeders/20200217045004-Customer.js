module.exports = {
  up: async (queryInterface, Sequelize) => {

    try {
      return queryInterface.bulkInsert('Customers', require("./resources/customers.json"));
    } catch (e) {
      return Promise.reject(e)
    }
  },

  down: (queryInterface, Sequelize) => {
    return Promise.reject(e)
  }
}
