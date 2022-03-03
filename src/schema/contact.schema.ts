import { object, string, ref } from "yup";

export const createContactSchema = object({
    body: object({
        name: string().required("Name is required"),
        email: string()
            .email("Must be a valid email")
            .required("Email is required"),
        description: string()
    }),
});
