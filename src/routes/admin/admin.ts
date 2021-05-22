import { Router } from 'express';
import { initData } from '../../controllers/admin';

const router = Router();

router
    .post('/init_data', initData);

export default router;
