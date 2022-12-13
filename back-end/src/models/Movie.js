import {Schema, model} from "mongoose";

const movieSchema = new Schema({
    title:{ 
        type: String,
    required: true
}, 
    description: {
        type: String,
        required: true
},
    likes: {
        type: Int,
        required: true
},
    image: {
        type: String,
        required: true
},
    releaseDate: {
        type: Date,
        required: true
}

})

export default model("Movie", movieSchema)