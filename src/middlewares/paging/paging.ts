import { Request, Response, NextFunction } from 'express';

export const paging = (req: Request, res: Response, next: NextFunction) => {
  try {
    const entitiesNumber = 10;
    const page = (req.query['page'] as string);
    if (page && !isNaN(parseInt(page)) && parseInt(page) > 0) {
      const limit = entitiesNumber;
      const offset = parseInt(page) * entitiesNumber - entitiesNumber;
      req['paging'] = {
        limit,
        offset,
        page: parseInt(page),
      };
    } else {
      req['paging'] = {
        limit: entitiesNumber,
        offset: 0,
        page: 1,
      };
    }
    delete req.query['page'];
    next();
  } catch (ex) {
    next(ex);
  }
};
