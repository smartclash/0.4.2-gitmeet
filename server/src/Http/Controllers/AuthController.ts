import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import * as ipInfoWrapper from 'node-ipinfo';
import User from '../../Database/Models/User';

export const github = async (req: Request, res: Response) => {
    const ipInfo = new ipInfoWrapper(process.env.IPINFO_KEY);
    const realIPInfo = await ipInfo.lookupIp(req.ip);

    const jwtToken = await jwt.sign({
        //@ts-ignore
        id: req.user._id, username: req.user.username, email: req.user.email
    }, process.env.APP_KEY, { expiresIn: '2d' });

    //@ts-ignore
    await User.findOneAndUpdate({ email: req.user.email }, { city: realIPInfo.city });

    return res.json({
        token: jwtToken,
        user: req.user,
        city: realIPInfo.city
    });
}

export const error = (req: Request, res: Response) => {
    res.status(401).json({
        message: 'Could not log you in'
    });
}
