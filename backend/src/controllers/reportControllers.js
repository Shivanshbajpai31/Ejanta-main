import Report from "../models/reportModel.js";

const createReport = async (req, res) => {
  try {
    // Extract form data from the request

    const { title, category, description, location, image, user } = req.body;

   
    

    // console.log(title, category,description,location, image,user);

    // if (!req.file) {
    //   // Handle the case where no file is uploaded
    //   return res.status(400).json({ error: 'No file uploaded' });
    // }

    // Create a new report with form data and image URL
    const newReport = new Report({
      title,
      category,
      description,
      reportBy: user,
      location,
      // like,
      image: `${req.files.image.path}`, // Assuming multer provides the file path
    });
    

    // Save the report to the database
    const savedReport = await newReport.save();

    res.status(201).json(savedReport);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

//  const createtheReport = async (req, res) => {
//   try {
//     const { title, description, location, user } = req.body;
//     const newReport = new Report({
//       title,
//       description,
//       location,
//     //   image,
//       user,
//     });

//     const savedReport = await newReport.save();
//     res.status(201).json(savedReport);
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ error: error.message });
//   }
// };

// Get all reports
const getAllReports = async (req, res) => {
  console.log("I am here");
  try {
    const reports = await Report.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getReportById = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await Report.findById(id);

    if (!report) {
      return res.status(404).json({ error: "Report not found" });
    }

    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a report by ID
const updateReportById = async (req, res) => {
  try {
    if (!req.files) {
      // Handle the case where no file is uploaded
      return res.status(400).json({ error: "No file uploaded" });
    }
    const image = req.files.image.path;
    const { id } = req.params;
    const { title, category, description, location, user } = req.body;

    const updatedReport = await Report.findByIdAndUpdate(
      id,
      { title, category, description, location, user, image },
      { new: true }
    );

    if (!updatedReport) {
      return res.status(404).json({ error: "Report not found" });
    }

    res.status(200).json(updatedReport);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a report by ID
const deleteReportById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReport = await Report.findByIdAndDelete(id);

    if (!deletedReport) {
      return res.status(404).json({ error: "Report not found" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const likeReport = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await Report.findById(id);
    const user = await Report.findById(id);

    if (!report) {
      return res.status(404).json({ error: "Report not found" });
    }
    if(user.like === 1){
      user.like = 0;
    }
    else
    {
      report.like = report.like+ 1;
    }
    
    

    await report.save();

    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export {
  deleteReportById,
  updateReportById,
  getReportById,
  getAllReports,
  createReport,
  likeReport,
};
