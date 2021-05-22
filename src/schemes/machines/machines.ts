import * as Joi from 'joi';

export const filterMachinesBySchema = Joi.object({
    page: Joi.number(),
    machineType: Joi.string().valid('LARGE', 'SMALL', 'ESSPRESO'),
    waterLineCompitable: Joi.boolean()
});