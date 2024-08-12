import { User } from '../../models/user'

class UsersModel {
    public constructor () {}

    public async list(): Promise<object> {
        const request = await User.findAll()
        return request
    }

    public async store(data: any): Promise<object> {
        const request = await User.create(data)
        return request
    }

    public async update(data: any): Promise<object> {
        const { ['id'] : userId, ...rest } = data
        const request = await User.update(
            { ...rest },
            {
                where: {
                    id: userId
                }
            }
        )
        return {
            affectedCount: request
        }
    }

    public async destroy(data: any): Promise<object> {
        const { ['id']: userId } = data
        const deleted = await User.destroy({ where: { id: userId }})
        return {
            deleted
        }
    }
}

export default new UsersModel()