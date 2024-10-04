import mongoose,{Schema} from "mongoose";
const alertSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        category: {
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
       
    },
    {
        timestamps: true,
    }
);

export const Alert = mongoose.model("Alert", alertSchema);