    const mongoose = require('mongoose');
    // const { type } = require('requests');

    const { Schema } = mongoose;

    const profileSchema = new Schema({
        name : {
            type : String,
            minlength: 3,
            maxlength: 15
        },
        email : {type : String, 
                required : true,
                unique: true
                },
        bio: String,
    })

    const Profile = mongoose.model('Profile', profileSchema);

    module.exports = Profile;