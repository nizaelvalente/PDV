
import {Router} from 'express'

const editUser = Router()

export default editUser.put('/:id', (req, res)=>{
    return res.send('Edit user')
})