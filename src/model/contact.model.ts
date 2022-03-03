import mongoose from "mongoose";

export interface ContactDocument extends mongoose.Document {
    name: string;
    email: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const ContactSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String },
    },
    { timestamps: true }
);

ContactSchema.pre("save", async function (next: mongoose.HookNextFunction) {
    return next();
});

const Contact = mongoose.model<ContactDocument>("Contacts", ContactSchema);

export default Contact;
