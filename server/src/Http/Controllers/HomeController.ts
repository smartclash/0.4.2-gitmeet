import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => {
    return res.json({ message: 'OwO. Stay within your limit homie' });
}
