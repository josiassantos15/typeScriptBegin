import { Request, Response } from 'express';

const users = [
    { name: 'Josias', email: 'josiassantos@gmail.com' },
];

export default {
    async index (req: Request, res: Response) {
        return res.json(users);
    }
};