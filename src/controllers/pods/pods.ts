import { Request, Response, NextFunction } from 'express';
import { Pod } from '../../models';
import { filterPodsBySchema } from '../../schemes';

export const getPods = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { value, error } = filterPodsBySchema.validate(req.query);
        if (!error) {
          const machines = await Pod.find({ ...value })
            .limit(req['paging']['limit'])
            .skip(req['paging']['offset']);
          res.status(200).send({
            data: machines,
            success: true,
            message: '',
          });
        } else {
          res.status(412).send({
            data: [],
            success: false,
            message: error.message,
          });
        }
      } catch (ex) {
        next(ex);
      }
}

export const getPodsById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const machine = await Pod.findById(req.params['id']);
        res.status(200).send({
          data: machine,
          message: '',
          success: true,
        });
    } catch (ex) {
        next(ex);
    }
}

