
import {Router} from 'express'
import { getOne } from '../../controllers/users/user-controller'

const searchUserById = Router()

export default searchUserById.get('/:id', async (req, res)=>{
        const {status, data} = await getOne(req)
        return res.status(status).send(data)
})