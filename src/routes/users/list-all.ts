import {Router} from 'express'
import { listAll } from '../../controllers/users/user-controller'

const listAllUsers = Router()

export default listAllUsers.get('/', async (req, res)=>{
        const {status, data} = await listAll()
        return res.status(status).send(data)
})