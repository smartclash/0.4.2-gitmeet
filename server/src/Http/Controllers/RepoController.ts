import * as _ from 'lodash';
import * as Github from 'github-api';
import { Request, Response } from 'express';

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
