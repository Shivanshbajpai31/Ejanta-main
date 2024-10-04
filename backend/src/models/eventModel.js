import mongoose from "mongoose";
const eventSchema = mongoose.Schema(
    {
        title: {
        type: String,
        required: true,
        },
        
        description: {
        type: String,
        required: true,
        },
    
        location: {
        type: String,
        required: true,
        },
        image: {
        type: String,
        url: String,
        },
        date: {
        type: Date,
        required: true,
        },
    },    
    {
        timestamps: true,
    }
    );
    const Event = mongoose.model("Event", eventSchema);
    export default Event;