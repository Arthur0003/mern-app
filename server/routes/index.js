import { Router } from 'express';

import accountsRouter from './accountsRoutes.js';

const router = Router();

router.use('/accounts', accountsRouter);

export default router;
