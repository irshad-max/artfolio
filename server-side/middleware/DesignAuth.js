
import multer from "multer";

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "upload/");
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: Storage });

export default upload;
