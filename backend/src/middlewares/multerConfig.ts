import multer from "multer";
const storage = multer.diskStorage({
  destination: (req: Request, file, cb: CallableFunction) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + "-" + file.originalname;
    cb(null, filename);
  },
});

module.exports = multer({ storage });
