import express from 'express'
import cors from 'cors'
import routes from './routes'
import dotenv from 'dotenv'

dotenv.config()


class App {
    public express: express.Application

    // declare express instance and routes
    public constructor() {
        this.express = express()
        this.express.use(express.json())
        this.middlewares()
        this.routes()
    }

    // declare middlewares (express and cors)
    private middlewares() {
        this.express.use(express.json())
        this.express.use(cors())
    }

    // declare routes destiny
    private routes(): void {
        this.express.use(routes)
    }
}


export default new App().express