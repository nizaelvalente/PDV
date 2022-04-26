import {Request} from 'express'

export const create = async (req: Request)=>{
    return req.body
}

export const listAll = async ()=>{
    return ("list all users")
}

export const getOne = async (req:Request)=>{
    return {user: req.params.id}
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