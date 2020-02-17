const fs = require("fs")
const initialSchema = fs.readFileSync('./a-customers-seeds.sql', 'utf-8')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    try {
      await queryInterface.sequelize.query(initialSchema)
      return Promise.resolve()
    } catch (e) {
      let error = e.original.sqlMessage
      if (error.startsWith('Table') && error.endsWith('already exists')) {
        return Promise.resolve()
      }
      return Promise.reject(e)
    }
  },

  down: (queryInterface, Sequelize) => {
    return Promise.reject(e)
  }
}
