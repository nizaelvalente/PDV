import {Router} from 'express'
import { listAll } from '../../controllers/users/user-controller'

const listAllUsers = Router()

export default listAllUsers.get('/', async (req, res)=>{
    try {
        const response = await listAll()
        return res.send(response)
    } catch (error) {
        
    }
})