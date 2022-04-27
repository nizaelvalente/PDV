
import {Router} from 'express'
import { deleteMultiple } from '../../controllers/users/user-controller'

const deleteMultipleUsers = Router()

export default deleteMultipleUsers.delete('/', async (req, res)=>{
        if(!req.body.length) {
                return res.status(408).send({message: "Não ha usuário para excluir"})
        }
        const {status, data} = await deleteMultiple(req)
        return res.status(status).send(data)
})