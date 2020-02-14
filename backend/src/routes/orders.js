const express = require("express")
const router = express.Router()
const { Orders, Clients } = require("../models")

router.get("/", async (req, res, next) => {
    try {
        const predicate = {
            include: [{
                model: Clients
            }]
        }
        const orders = await Orders.findAll(predicate)

        res.send({ orders })
    } catch (error) {
        res.status(500).send(error.message)
        Promise.reject().catch(next)
    }
})

router.get("/:client_id", async (req, res, next) => {
    try {
        const client_id = req.params.client_id
        const predicate = {
            where: {
                client_id
            },
            include: [{
                model: Clients
            }]
        }

        const client = await Orders.findAll(predicate)

        if (!client.length) {
            return res.status(404).send({ client, message: "Pedido de usuário não encontrado!" })    
        }

        return res.status(200).send({ client })
    } catch (error) {
        res.status(500).send(error.message)
        Promise.reject().catch(next)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const { body: orderRequest } = req
        const order = await Orders.create(orderRequest)

        return res.status(200).send({ order })
    } catch (error) {
        if (error.name == "SequelizeUniqueConstraintError") {
            return res.status(422).send({ error: error.fields, message: error.parent.sqlMessage })
        }
        res.status(500).send(error.message)
        Promise.reject().catch(next)
    }
})

router.put("/:order_id", async (req, res, next) => {
    try {
        const { body: clientRequest } = req
        const order_id = req.params.order_id
        const predicate = {
            where: {
                order_id
            }
        }
        
        const [result] = await Orders.update(clientRequest, predicate)
        
        if (!result) {
            return res.status(404).send({ order: [], message: "Pedido não encontrado!" })
        }

        let updatedOrder = await Orders.findAll(predicate)

        return res.status(200).send({ client: updatedOrder })
    } catch (error) {
        console.error(error)
        Promise.reject().catch(next)
    }

})

router.delete("/:order_id", async (req, res, next) => {
    try {
        const order_id = req.params.order_id
        const result = await Orders.destroy({
            where: {
                order_id
            }
        })

        if (!result) {
            return res.status(404).send({ client: [], message: "Pedido não encontrado!" })
        }

        return res.status(200).send({ client: client_id, message: "Pedido excluído com sucesso!" })
    } catch (error) {
        res.status(500).send(error.message)
        Promise.reject().catch(next)
    }
})

module.exports = router