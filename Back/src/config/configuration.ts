import { Msg } from "src/app/entities/msg.entity";
import { Bot } from "src/bot/entities/bot.entity";

export const config = () => ({
    database:{
        type: process.env.DATABASE_TYPE,
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [Bot, Msg],
        synchronize: true,
        //ssl: { rejectUnauthorized: false }
    }
})