import { Application } from 'express';
import podsRoutes from './pods';
import machinesRoutes from './machines';
import adminRoutes from './admin';

export const setupRoutes = (app: Application) => {
    app.use('/machines', machinesRoutes);
    app.use('/pods', podsRoutes);
    app.use('/admin', adminRoutes);
};
