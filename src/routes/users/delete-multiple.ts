
import {Router} from 'express'
import { deleteMultiple } from '../../controllers/users/user-controller'

const deleteMultipleUsers = Router()

export default deleteMultipleUsers.delete('/', async (req, res)=>{
        const response = await deleteMultiple(req)
        return res.json(response)
})