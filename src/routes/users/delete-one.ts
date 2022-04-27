
import {Router} from 'express'
import { deleteOne } from '../../controllers/users/user-controller'

const deleteOneUser = Router()

export default deleteOneUser.delete('/:id', async (req, res)=>{
        const response = await deleteOne(req)
        return res.json(response)
})