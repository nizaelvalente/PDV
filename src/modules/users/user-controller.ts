const db = require ('../../../dev/db/users')
import {Request} from 'express'

export = {

    async listUser () {
        try {
            if(!db.length) return{status: 408, data:{message:"Nenhum usuário cadastrado."}}
            return {status: 200, data:db}
        } catch (error) {
            return {status: 400, data:{message:error}}
        }
    },
    async getOne (req:Request) {
        try {
            const response = await db.find((user:any )=> user.id === Number(req.params.id))
            if(!response) return {status: 408, data:{message:"Usuário não cadastrado."}}
            return {status: 200, data:response}
        } catch (error) {
            return {status: 400, data:{message:error}}
        }
    }

}