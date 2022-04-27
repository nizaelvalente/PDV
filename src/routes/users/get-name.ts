import {Router} from 'express'
import { getName } from '../../controllers/users/user-controller'

const searchUserByName = Router()

export default searchUserByName.get('/', async (req, res)=>{
        const {status, data} = await getName(req)
        return res.status(status).send(data)
})