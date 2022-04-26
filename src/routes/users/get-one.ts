
import {Router} from 'express'
import { getOne } from '../../controllers/users/user-controller'

const searchUserById = Router()

export default searchUserById.get('/:id', async (req, res)=>{
    try {
        const response = await getOne(req)
        return res.json(response)
    } catch (error) {
        
    }
})