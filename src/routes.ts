import { Express, Request, Response } from "express";

import { validateRequest } from "./middleware";

//CONTACT
import { createContact } from "./controller/contact.controller"

import {
    createContactSchema,
} from "./schema/contact.schema";


export default function (app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

    app.post(
        "/api/contact",
        validateRequest(createContactSchema),
        createContact
    )

}

