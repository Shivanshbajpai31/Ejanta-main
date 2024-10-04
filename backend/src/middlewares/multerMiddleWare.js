import multer from "multer";
// import fs from 'fs'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");

    // Check if the directory exists, create it if not
    //   if (!fs.existsSync(uploadDir)) {
    //     fs.mkdirSync(uploadDir);
    //   }

    //   cb(null, uploadDir);
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
    console.log(file.originalname);
  },
});

export const upload = multer({
  storage,
});

// module.exports= upload;
