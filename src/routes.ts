import { Router } from 'express'
import UsersController from './controllers/usersController'

const routes = Router()

routes.get('/checkhealth', (_req, res) => {
    res.json({ message: 'online and working' })
})

// users
routes.get('/users', UsersController.list)
routes.post('/users', UsersController.store)
routes.put('/users/:id', UsersController.update)
routes.delete('/users/:id', UsersController.destroy)

export default routes