
import {Router} from 'express'
import { deleteOne } from '../../controllers/users/user-controller'

const deleteOneUser = Router()

export default deleteOneUser.delete('/:id', async (req, res)=>{
        const {status, data} = await deleteOne(req)
        return res.status(status).send(data)
})