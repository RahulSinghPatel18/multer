const multer = require("multer")
const {v4: uuidv4} = require("uuid");
const path= require("path")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/public/images/uploads')
    },

    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
     const filename=uuidv4()
      cb(null, filename+path.extname(file.originalname))
    }
  })

  // filefilter
  function Filter (req, file, cb) {
    const fext = path.extname(file.originalname).toLowerCase();
     if( fext === '.png' || fext === '.jpg' || fext ===  '.svg' 
     || fext ==='.webp' || fext ==='.jpeg' ){
    cb(null, true)
     }else{
      cb(new Error("Dhang ki file dede!"),false)
     }
  
  }


  const upload = multer({ storage: storage, fileFilter: Filter,
     limits:{fileSize: 2*1024*1024} })
  module.exports = upload;




