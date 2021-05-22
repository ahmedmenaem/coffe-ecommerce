import { Request, Response, NextFunction } from 'express';
import { initDB } from '../../scripts/init_db';
export const initData = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await initDB();
        res.status(200)
            .send({
                data: [],
                success: true,
                message: 'data has been initialized successfully!'
            })
    } catch (ex) {
        next(ex);
    }
}