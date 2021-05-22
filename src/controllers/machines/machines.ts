import { Request, Response, NextFunction } from 'express';
import { Machine } from '../../models';
import { filterMachinesBySchema } from '../../schemes';

export const getMachines = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { value, error } = filterMachinesBySchema.validate(req.query);
    if (!error) {
      const machines = await Machine.find({ ...value })
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
};

export const getMachineById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const machine = await Machine.findById(req.params['id']);
    res.status(200).send({
      data: machine,
      message: '',
      success: true,
    });
  } catch (ex) {
    next(ex);
  }
};
