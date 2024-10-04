// checkboxController.js
import Checkbox from '../models/checkboxModel.js';

const updateCheckboxStatus = async (req, res) => {
  const { reportId, isVerified, isHandled } = req.body;

  try {
    const checkbox = await Checkbox.findOneAndUpdate(
      { reportId },
      { isVerified, isHandled },
      { new: true, upsert: true }
    );

    res.json({ success: true, checkbox });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

export default { updateCheckboxStatus };