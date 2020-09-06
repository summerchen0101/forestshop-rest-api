import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    status: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const Member = mongoose.model('Member', memberSchema);

export default Member;
