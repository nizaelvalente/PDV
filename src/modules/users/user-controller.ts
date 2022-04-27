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
    },
    async getName (req:Request) {
        try {
            const response = await db.find((user:any )=> user.name === req.body.name)
            if(!response) return {status: 408, data:{message:"Usuário não encontrado."}}
            return {status: 200, data:response}
        } catch (error) {
            return {status: 400, data:{message:error}}
        }
    },
    async update (req:Request) {
        try {
            const response = await db.find((user:any )=> user.id === Number(req.params.id))
            if(!response) return {status: 408, data:{message:"Usuário não cadastrado."}}
            return {status: 200, data:response}
        } catch (error) {
            return {status: 400, data:{message:error}}
        }
    },
    async deleteOne (req:Request) {
        try {
            const response = await db.find((user:any )=> user.id === Number(req.params.id))
            if(!response) return {status: 408, data:{message:"Usuário não cadastrado."}}
            return {status: 200, data:response}
        } catch (error) {
            return {status: 400, data:{message:error}}
        }
    },
    async deleteMultiple (req:Request) {
        try {
            const response  = await req.body.map((id:Number) => db.filter((e:any) => e.id === id))

            if(!response[0].length) return {status: 408, data:{message:"Não ha usuário para apagar."}}
            return {status: 200, data:response[0]}
        } catch (error) {
            return {status: 400, data:{message:error}}
        }
    }

}