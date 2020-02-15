const express = require("express")
const router = express.Router()
const { Customers } = require("../models")

router.get("/", async (req, res, next) => {
    try {
        const customers = await Customers.findAll()

        res.send({ customers })
    } catch (error) {
        res.status(500).send(error.message)
        Promise.reject().catch(next)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const customer = await Customers.findAll({
            where: {
                id
            }
        })
        if (!customer.length) {
            return res.status(404).send({ customer, message: "Cliente não encontrado!" })    
        }

        return res.status(200).send({ customer })
    } catch (error) {
        res.status(500).send(error.message)
        Promise.reject().catch(next)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const { body } = req
        const customer = await Customers.create(body)

        return res.status(200).send({ customer })
    } catch (error) {
        if (error.name == "SequelizeUniqueConstraintError") {
            return res.status(422).send({ error: error.fields, message: error.parent.sqlMessage })
        }
        res.status(500).send(error.message)
        Promise.reject().catch(next)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const { body } = req
        const id = req.params.id
        const predicate = {
            where: {
                id
            }
        }
        
        const [result] = await Customers.update(body, predicate)
        
        if (!result) {
            return res.status(404).send({ customer: [], message: "Cliente não encontrado!" })
        }

        let update = await Customers.findAll(predicate)

        return res.status(200).send({ customer: update })
    } catch (error) {
        console.error(error)
        Promise.reject().catch(next)
    }

})

router.delete("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await Customers.destroy({
            where: {
                id
            }
        })

        if (!result) {
            return res.status(404).send({ customer: [], message: "Cliente não encontrado!" })
        }

        return res.status(200).send({ customer: id, message: "Cliente excluído com sucesso!" })
    } catch (error) {
        res.status(500).send(error.message)
        Promise.reject().catch(next)
    }
})

module.exports = router