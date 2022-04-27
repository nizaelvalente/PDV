import {Request} from 'express'
import userModel from '../../modules/users/user-controller'
export const create = async (req: Request)=>{
    return req.body
}

export const listAll = async ()=>{
    const response = await userModel.listUser()
    return response
}

export const getOne = async (req:Request)=>{
    const response = await userModel.getOne(req)
    return response
}

export const getName = async (req:Request)=>{
    return {user: req.params.name}
}

export const deleteOne = async (req:Request)=>{
    return {user: req.params.id}
}

export const deleteMultiple = async (req:Request)=>{
    return ('delete multiple user')
}