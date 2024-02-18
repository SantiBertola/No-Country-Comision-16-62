import express, {Express } from 'express'
import { connectDB } from '../database/config';

export class Server {
    app: Express;
    port: string | number | undefined;

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.conectarDB();

    }
    async conectarDB(): Promise <void> {
        await connectDB();
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}


