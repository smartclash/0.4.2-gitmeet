import { Request, Response } from 'express';

export const showSomething = (req: Request, res: Response) => {
    return res.json({ message: 'Still under development ma boi', user: req.user });
}
