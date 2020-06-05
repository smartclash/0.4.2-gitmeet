import * as bcrypt from 'bcrypt';
import validator from 'validator';
import { Request, Response } from 'express';
import User from '../../Database/Models/User';

interface IExpense {
    _id: string,
    owner: IUser,
    name: string,
    description: string,
    price: number
}

interface IUser {
    _id: string,
    email: string,
    password: string,
    total: number,
    expenses?: IExpense;
};

export const showLogin = (req: Request, res: Response) => {

}

export const showRegister = (req: Request, res: Response) => {

}

export const processLogin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (validator.isEmpty(email) || validator.isEmpty(password)) {
            return res.status(401).json({
                message: 'Please fill all the fields properly',
                data: []
            });
        }

        const user: IUser = await User.findOne({ email }).lean();
        if (!user) {
            return res.status(401).json({
                message: 'An account with this username or email does not exist',
                data: []
            });
        }

        const passwordCorrect = await bcrypt.compare(password, user.password);
        if (!passwordCorrect) {
            return res.status(401).json({
                message: 'Please enter the correct password',
                data: []
            });
        }

        req.session.user = {
            loggedIn: true, email: user.email, total: user.total
        };
    } catch (e) {
        return res.status(500).json({
            message: 'An unknown server related error occured',
            data: []
        });
    }
}

export const processRegister = (req: Request, res: Response) => {
    
}
