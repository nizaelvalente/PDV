import { Router } from "express";
import routersUsers from "./users/index";

const routes = Router()

// routes.use('/', routersUsers)

routes.use('/user', routersUsers)
routes.use('/product', (req, res)=> {
    return res.status(200).send('products')
})


export default routes