const express = require("express")
const router = express.Router()
const { Clients } = require("../models")

router.get("/", async (req, res, next) => {
    try {
        const clients = await Clients.findAll()

        res.send({ clients })
    } catch (error) {
        res.status(500).send(error.message)
        Promise.reject().catch(next)
    }
})

router.get("/:client_id", async (req, res, next) => {
    try {
        const client_id = req.params.client_id
        const client = await Clients.findAll({
            where: {
                client_id
            }
        })
        if (!client.length) {
            return res.status(404).send({ client, message: "Usuário não encontrado!" })    
        }

        return res.status(200).send({ client })
    } catch (error) {
        res.status(500).send(error.message)
        Promise.reject().catch(next)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const { body: clientRequest } = req
        const client = await Clients.create(clientRequest)

        return res.status(200).send({ client })
    } catch (error) {
        if (error.name == "SequelizeUniqueConstraintError") {
            return res.status(422).send({ error: error.fields, message: error.parent.sqlMessage })
        }
        res.status(500).send(error.message)
        Promise.reject().catch(next)
    }
})

router.put("/:client_id", async (req, res, next) => {
    try {
        const { body: clientRequest } = req
        const client_id = req.params.client_id
        const predicate = {
            where: {
                client_id
            }
        }
        
        const [result] = await Clients.update(clientRequest, predicate)
        
        if (!result) {
            return res.status(404).send({ client: [], message: "Usuário não encontrado!" })
        }

        let updatedClient = await Clients.findAll(predicate)

        return res.status(200).send({ client: updatedClient })
    } catch (error) {
        console.error(error)
        Promise.reject().catch(next)
    }

})

router.delete("/:client_id", async (req, res, next) => {
    try {
        const client_id = req.params.client_id
        const result = await Clients.destroy({
            where: {
                client_id
            }
        })

        if (!result) {
            return res.status(404).send({ client: [], message: "Usuário não encontrado!" })
        }

        return res.status(200).send({ client: client_id, message: "Usuário excluído com sucesso!" })
    } catch (error) {
        res.status(500).send(error.message)
        Promise.reject().catch(next)
    }
})

module.exports = router