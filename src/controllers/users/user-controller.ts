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
    const response = await userModel.getName(req)
    return response
}
export const update = async (req:Request)=>{
    const response = await userModel.update(req)
    return response
}
export const deleteOne = async (req:Request)=>{
    const response = await userModel.deleteOne(req)
    return response
}

export const deleteMultiple = async (req:Request)=>{
    const response = userModel.deleteMultiple(req)
    return response
}