import Account from '../models/accountModel.js';

// Get all accounts
// Route GET /api/accounts
const getAllAccounts = async (_, res, next) => {
  try {
    const accounts = await Account.find();
    res.status(200).json(accounts);
  } catch (error) {
    next(error);
  }
};

// Get an account
// Route GET /api/accounts/:id
const getAccount = async (req, res, next) => {
  try {
    const { id } = req.params;

    const account = await Account.findById(id);

    if (account) {
      res.status(200).json(account);
    } else {
      res.status(404).json({
        message: 'Account does not exist',
      });
    }
  } catch (error) {
    next(error);
  }
};

// Create an account
// Route POST /api/accounts
const createAccount = async (req, res, next) => {
  try {
    const { name, owner } = req.body;

    const account = await Account.create({
      name,
      owner,
    });

    if (account) {
      res.status(201).json(account);
    } else {
      res.status(400);
      throw new Error('Invalid account data');
    }
  } catch (error) {
    next(error);
  }
};

export { getAllAccounts, getAccount, createAccount };
