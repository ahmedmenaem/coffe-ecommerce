import * as Joi from 'joi';

export const filterPodsBySchema = Joi.object({
    page: Joi.number(),
    podType: Joi.string().valid('LARGE', 'SMALL', 'ESSPRESO'),
    coffeFlavour: Joi.string().valid('VANILLA', 'CARAMEL', 'PSL', 'MOCHA', 'HAZELNUT'),
    packSize: Joi.number().min(1)
});