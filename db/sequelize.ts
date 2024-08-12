import { Sequelize, Options } from 'sequelize'
import * as dotenv from 'dotenv'

dotenv.config()

const ENV = process.env

let config: Options

config  = {
    "username": ENV.DB_USERNAME,
    "password": ENV.DB_PASSWORD,
    "database": ENV.DB_NAME,
    "host": ENV.DB_HOST,
    "dialect": "postgres"
}

export default new Sequelize(config)