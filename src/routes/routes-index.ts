import { Router } from "express";
import routersUsers from "./users/index";

const routes = Router()

// routes.use('/', routersUsers)

routes.use('/user', routersUsers)


export default routes