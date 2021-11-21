const {Profiles } = require("../models");
const sharp = require("sharp")

// upload profile
exports.uploadProfile = async (req, res) => {
   let photo;
   let uploadPath;
   let compressedFilePath;
   const {make, model, manufacturer, description} = req.body;
   try {
       console.log(req.body);
       if(!req.files || Object.keys(req.files).length === 0){
           res.json({message: "No file selected"});
       }
       photo = req.files.photo;
       console.log(photo);
       uploadPath = __dirname + "../../uploads/" + photo.name; 
       compressedFilePath = __dirname + "../../images/" + photo.name;
    //    use mv() function to move the file to the database
      photo.mv(uploadPath, async () => {
        sharp(uploadPath).resize(600, 600, {
            quality: 80,
            position: "center",
            fit: "cover",
            fasShrinkOnLoad: true,
        }).toFile(compressedFilePath, (err, info) => {
            if(err){
                console.log(err)
            }
            console.log(info)
        });
        try {
             const profile = await  Profiles.create({make, model, manufacturer, description, photo: photo.name})
             res.json(profile);
         } catch (error) {
             console.log(error);
         }
      });

   } catch (error) {
       console.log(error);
   }
}

// get profiles
exports.getProfiles = async (req, res) => {
    try {
        const profiles = await Profiles.findAll({order: [["createdAt", "DESC"]]});
        res.json(profiles);
    } catch (error) {
        console.log(error);
    }
}

// delete profile
exports.deleteProfile = async (req, res) => {
    const {id} = req.params;
    console.log({Id: id});
    try {
        const profile = await Profiles.findOne({where: {id}})
        await Profiles.destroy({where: {id: profile.id}});
        const profiles = await Profiles.findAll()
        res.json(profiles)
    } catch (error) {
        console.log(error);
    }
}