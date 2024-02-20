const cloudinary=require('cloudinary').v2;
const {CloudinaryStorage}=require('multer-storage-cloudinary');


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET,
});

const storage=new CloudinaryStorage({
    cloudinary,
    params:{
    folder:'Student_ID',
    allowedFormats: ['png','jpg','jpeg','pdf']
    }
});


// app.use(upload.single('student_id'),(req,res,next)=>{
// });

module.exports={cloudinary,storage};