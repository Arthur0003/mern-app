import { Router } from 'express';

import {
  getAllAccounts,
  getAccount,
  createAccount,
} from '../controllers/accountsController.js';

const router = Router();

router.route('/').get(getAllAccounts).post(createAccount);
router.get('/:id', getAccount);

export default router;
