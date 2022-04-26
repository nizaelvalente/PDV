import {Router} from 'express'
import { getName } from '../../controllers/users/user-controller'

const searchUserByName = Router()

export default searchUserByName.get('/:name', async (req, res)=>{
    try {

        const response = await getName(req)
        return res.json(response)
        
    } catch (error) {
        
    }
})