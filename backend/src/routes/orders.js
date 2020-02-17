const express = require("express")
const router = express.Router()
const { Order, Customer } = require("../models")

router.get("/", async (req, res, next) => {
    try {
        const predicate = {
            include: [{
                model: Customer
            }]
        }
        const orders = await Order.findAll(predicate)

        res.send({ orders })
    } catch (error) {
        res.status(500).send(error.message)
        Promise.reject().catch(next)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const predicate = {
            where: {
                id
            },
            include: [{
                model: Customer
            }]
        }

        const order = await Order.findAll(predicate)

        if (!order.length) {
            return res.status(404).send({ customerOrder: order, message: "Pedido de usuário não encontrado!" })    
        }

        return res.status(200).send({ order })
    } catch (error) {
        res.status(500).send(error.message)
        Promise.reject().catch(next)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const { body } = req
        const order = await Order.create(body)

        return res.status(200).send({ order })
    } catch (error) {
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
        
        const [result] = await Order.update(body, predicate)
        
        if (!result) {
            return res.status(404).send({ order: [], message: "Pedido não encontrado!" })
        }

        let update = await Order.findAll(predicate)

        return res.status(200).send({ order: update })
    } catch (error) {
        console.error(error)
        Promise.reject().catch(next)
    }

})

router.delete("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await Order.destroy({
            where: {
                id
            }
        })

        if (!result) {
            return res.status(404).send({ order: [], message: "Pedido não encontrado!" })
        }

        return res.status(200).send({ order: id, message: "Pedido excluído com sucesso!" })
    } catch (error) {
        res.status(500).send(error.message)
        Promise.reject().catch(next)
    }
})

module.exports = router