import { Request, Response } from 'express'
import { httpStatus } from '../utils/httpStatus'
import UsersService from '../services/usersService'

class UsersController {
    // list all users
    public async list(req: Request, res: Response):  Promise<Response> {
        const service = await UsersService.list()
        return res.status(httpStatus['DONE']).json(service)
    }
    // store a new user
    public async store(req: Request, res: Response):  Promise<Response> {
        const { body } = req
        const service = await UsersService.store(body)
        return res.status(httpStatus['DONE']).json(service)
    }
    // update a existing user
    public async update(req: Request, res: Response):  Promise<Response> {
        const { body } = req
        const id = Number(req?.params?.id)
        const service = await UsersService.update({...body, id})
        return res.status(httpStatus['DONE']).json(service)
    }
    // destroy a existing user
    public async destroy(req: Request, res: Response):  Promise<Response> {
        const id = Number(req?.params?.id)
        const service = await UsersService.destroy({ id })
        return res.status(httpStatus['DONE']).json(service)
    }
}

export default new UsersController()