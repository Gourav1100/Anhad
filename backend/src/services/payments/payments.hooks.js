
const multer=require('multer');
const {cloudinary,storage}=require('../../cloudinary/index.js');
const upload= multer({storage});

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [upload.single('student_id')],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
