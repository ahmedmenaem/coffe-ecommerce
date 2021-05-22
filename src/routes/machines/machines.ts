import { Router } from 'express';
import { getMachineById, getMachines } from '../../controllers/machines';
import { paging } from '../../middlewares';

const router = Router();

router
    .get('/', [paging], getMachines)
    .get('/:id', getMachineById);

export default router;
