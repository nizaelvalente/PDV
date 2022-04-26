import {Router} from 'express'
import createUser from './create'
import listAllUsers from './list-all'
import searchUserById from './get-one'
import searchUserByName from './get-name'
import editUser from './edit'
import deleteMultipleUsers from './delete-multiple'
import deleteOneUser from './delete-one'
const routesUser = Router()



routesUser.use('/list', listAllUsers)

routesUser.use('/search_id', searchUserById)

routesUser.use('/search_name', searchUserByName)

routesUser.use('/create', createUser)

routesUser.use('/edit', editUser)

routesUser.use('/delete_multiple', deleteMultipleUsers)

routesUser.use('/delete_one', deleteOneUser)

export default routesUser