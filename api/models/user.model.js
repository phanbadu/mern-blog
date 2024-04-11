import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profilePicture: {
            type: String,
            default: "https://www.pixel4k.com/wp-content/uploads/2023/09/satoru-gojo-jujutsu-kaisen-4k_1695936977.jpg",
        },
        isAdmin: {
            type: Boolean,
            default: true,
        }
    }, { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;