import path from 'path'
import { Router, Request, Response } from 'express'
import multer from 'multer'

const router = Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(path.resolve(), '/uploads/images'))
  },
  filename(req, file, cb) {
    cb(null, file.originalname)
  },
})

function fileFilter(req: Request, file: Express.Multer.File, cb: Function) {
  const filetypes = /jpg|jpeg|png|webp/
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = mimetypes.test(file.mimetype)

  if (extname && mimetype) {
    cb(null, true)
  } else {
    cb(new Error('Images only!'), false)
  }
}

const upload = multer({ storage, fileFilter })
const uploadSingleImage = upload.single('image')

router.post('/', (req: Request, res: Response) => {
  uploadSingleImage(req, res, (err) => {
    if (err) {
      return res.status(400).send({ message: err.message })
    }
    return res.status(200).send({
      message: 'Image upload successfully',
      image: req.file,
    })
  })
})

export default router
