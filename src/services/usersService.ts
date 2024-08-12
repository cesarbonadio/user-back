import { messages, status } from '../utils/httpResponses'
import UsersModel from '../models/usersModel'

const { OK } = messages
const { FAILED, CREATED, DONE } = status

class UsersService {
    // how the data should be formated
    private objResponse (status: string, message: string, data: any): any {
        return { status, message, data }
    }
    public async list () : Promise<any> {
        try {
            const usersList = await UsersModel.list()
            return this.objResponse(DONE, OK, usersList)
        } catch (err) {
            console.log(err)
            return this.objResponse(FAILED, OK, err)
        }
    }
    public async store (payload: any): Promise<any> {
        try {
            const storeReq = await UsersModel.store(payload)
            return this.objResponse(CREATED, OK, storeReq)
        } catch (err) {
            return this.objResponse(FAILED, OK, err)
        }
    }
    public async update (payload: any): Promise<any> {
        try {
            const updateReq = await UsersModel.update(payload)
            return this.objResponse(DONE, OK, updateReq)
        } catch (err) {
            return this.objResponse(FAILED, OK, err)
        }
    }
    public async destroy (payload: any): Promise<any> {
        try {
            const destroyReq = await UsersModel.destroy(payload)
            return this.objResponse(DONE, OK, destroyReq)
        } catch(err) {
            return this.objResponse(FAILED, OK, err)
        }
    }
}

export default new UsersService()