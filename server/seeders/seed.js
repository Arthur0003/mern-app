import mongoose from 'mongoose';
import Account from '../models/accountModel.js';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('db has connected');
});
const accounts = [
  {
    name: 'Account 1',
    owner: 'User 1',
  },
  {
    name: 'Account 2',
    owner: 'User 2',
  },
  {
    name: 'Account 3',
    owner: 'User 3',
  },
];

const seedDB = async () => {
  await Account.insertMany(accounts);
};

seedDB().then(() => {
  mongoose.connection.close();
});
