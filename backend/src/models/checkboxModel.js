// checkboxModel.js
import mongoose from 'mongoose';

const checkboxSchema = new mongoose.Schema({
  reportId: {
    type: Number,
    required: true,
    unique: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isHandled: {
    type: Boolean,
    default: false,
  },
});

const Checkbox = mongoose.model('Checkbox', checkboxSchema);

export default Checkbox;
