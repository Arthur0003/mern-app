import mongoose from 'mongoose';

const accountSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    owner: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Account = mongoose.model('Account', accountSchema);

export default Account;
