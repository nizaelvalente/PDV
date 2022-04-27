
import {Router} from 'express'
import { update } from '../../controllers/users/user-controller'

const editUser = Router()

export default editUser.put('/:id', async (req, res)=>{
    const{status, data}= await update(req)
    return res.status(status).send(data)
})