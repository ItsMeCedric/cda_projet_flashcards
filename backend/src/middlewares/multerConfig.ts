import multer from "multer";
// const storage = multer.diskStorage({
//   destination: (req: Request, file, cb: CallableFunction) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     const filename = Date.now() + "-" + file.originalname;
//     cb(null, filename);
//   },
// });
const storage = multer.diskStorage({
  destination: (_: MulterRequest, __: Express.Multer.File, callback: CallableFunction) => {
    callback(null, "uploads");
  },
  filename: (_, file, callback) => {
    const extArray = file.mimetype.split("/");
    const extension = extArray[extArray.length - 1];
    callback(null, `${uuid()}.${extension}`);
  },
});

module.exports = multer({ storage });
