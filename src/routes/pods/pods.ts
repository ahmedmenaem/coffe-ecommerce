import { Router } from 'express';
import { getPods, getPodsById } from '../../controllers/pods';
import { paging } from '../../middlewares';

const router = Router();

router
    .get('/', [paging], getPods)
    .get('/:id', getPodsById);

export default router;
