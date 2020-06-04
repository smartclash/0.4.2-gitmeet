import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import * as ipInfoWrapper from 'node-ipinfo';
import User from '../../Database/Models/User';

export const github = async (req: Request, res: Response) => {
    // const ipInfo = new ipInfoWrapper(process.env.IPINFO_KEY);
    // const realIPInfo = await ipInfo.lookupIp(req.ip);

    const jwtToken = await jwt.sign({
        //@ts-ignore
        id: req.user._id, username: req.user.username, email: req.user.email, city: 'fakeCityBoi',
    }, process.env.APP_KEY, { expiresIn: '2d' });

    //@ts-ignore
    await User.findOneAndUpdate({ email: req.user.email }, { city: 'fakeCityBoi' });

    if (process.env.NODE_ENV !== 'production') {
        return res.json({
            token: jwtToken,
            user: req.user,
            city: 'fakeCityBoi'
        });
    }

    return res.redirect(process.env.REDIRECT_URL + `?jwt=${jwtToken}`);
}

export const error = (req: Request, res: Response) => {
    res.status(401).json({
        message: 'Could not log you in'
    });
}

export const jwtInfo = (req: Request, res: Response) => {
    return res.json({ user: req.user });
}
