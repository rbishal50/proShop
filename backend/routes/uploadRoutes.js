import path from "path";
import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/"); // first arg is error
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const fileTypes = /jpg|jpeg|png/;
  const extName = fileTypes.test(path.extName(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimeType);
  if (extName && mimeType) {
    return cb(null, true);
  } else {
    cb("Images only!"); // first arg is error
  }
}

const upload = multer({
  storage,
});

router.post("/", upload.single("image"), (req, res) => {
  res.send({
    message: "Image uploaded!",
    image: `/${req.file.path}`,
  });
});

export default router;
