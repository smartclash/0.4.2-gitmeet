import * as _ from 'lodash';
import * as Github from 'github-api';
import { Request, Response } from 'express';
import Repo from '../../Database/Models/Repo';
import Matched from '../../Database/Models/Matched';
import mongoose from '../../Database/Mongoose';

export const showRepos = async (req: Request, res: Response) => {
    let repos = [];
    const gh = new Github();
    //@ts-ignore
    const user = gh.getUser(req.user.username);
    const { data } = await user.listRepos();

    _.each(data, repo => repos.push({
        id: repo.id,
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
        language: repo.language,
        license: repo.license?.spdx_id
    }));

    return res.json(repos);
}

export const accepted = async (req: Request, res: Response) => {
    const object = mongoose.Types.ObjectId;
    const repo = await Repo.findOne({ github: req.params['id'] }).populate('owner').lean();
    if (!repo) return res.status(404).json({
        message: 'We could not find the repository you accepted to get matched'
    });

    await new Matched({
        repo: new object(repo._id), status: true,
        //@ts-ignore
        matched: new object(req.user._id), owner: new object(repo.owner._id)
    }).save();

    return res.json({
        message: 'Matched you successfully'
    });
}

export const rejected = async (req: Request, res: Response) => {
    const object = mongoose.Types.ObjectId;
    const repo = await Repo.findOne({ github: req.params['id'] }).populate('owner').lean();
    if (!repo) return res.status(404).json({
        message: 'We could not find the repository you accepted to get matched'
    });

    await new Matched({
        repo: new object(repo._id), status: false,
        //@ts-ignore
        matched: new object(req.user._id), owner: new object(repo.owner._id)
    }).save();

    return res.json({
        message: 'Rejected the repo successfully'
    });
}

export const helpWanted = async (req: Request, res: Response) => {
    const repo = await Repo.findOne({ github: req.body.id }).lean();
    if (repo) return res.status(401).json({
        message: 'You have already requested help for this repository'
    });

    await new Repo({
        github: req.body?.id, name: req.body?.name, description: req.body?.description,
        language: req.body?.language, url: req.body?.url, license: req.body?.license,
        //@ts-ignore
        owner: new mongoose.Types.ObjectId(req.user._id),
    }).save();

    return res.json({
        message: 'Successfully requested help for this repo'
    });
}
