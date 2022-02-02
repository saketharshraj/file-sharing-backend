const res = require('express/lib/response');

const router = require('express').Router();
const multer = require('multer');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);

  }
})

let upload = multer({ storage: storage, limits: {
  fileSize: 1024 * 1024 * 5
} }).single('file');

router.post('/', () => {

  // Valiadte Dataset
  if(!req.file) {
    return res.json({error: 'No file uploaded'});
  }
})


module.exports = router;