
import {Router} from 'express'
import { create } from '../../controllers/users/user-controller'

const createUser = Router()

export default createUser.post('/', async (req, res)=>{
    try {
        const response = await create(req)
        return res.json(response)
    } catch (error) {
        
    }
})