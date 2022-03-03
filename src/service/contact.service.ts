import { DocumentDefinition } from "mongoose";
import Contact, { ContactDocument } from "../model/contact.model";

export async function createContactForm(input: DocumentDefinition<ContactDocument>) {
    try {
        console.log(input);
        return await Contact.create(input);
    } catch (error: any) {
        throw new Error(error);
    }
}