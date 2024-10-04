import mongoose from "mongoose";

const reportSchema = mongoose.Schema(
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
    image: {
      type: String,
      url: String,
    },

    reportBy: {
      type: String,
      required: false,

      status: {
        type: String,
        enum: ["pending", "resolved", "rejected"],
        default: "pending",
      },
      
      history: [
        {
          status: {
            type: String,
            enum: ["pending", "resolved", "rejected"],
            default: "pending",
          },
          date: {
            type: Date,
            default: Date.now,
          },
        },

      ],
      count: {
        type: Number,
        default: 0,
      },
      isVerified: {
        type: Boolean,
        default: false,
      },
      isHandled: {
        type: Boolean,
        default: false,
      },
    },
    like: {
      type: Number,
      default: 0,
  },
  },
 



  {
    timestamps: true,
  }
);

const Report = mongoose.model("Report", reportSchema);

export default Report;