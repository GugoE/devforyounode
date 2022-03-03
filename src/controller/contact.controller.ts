import { Request, Response } from "express";
import { omit } from "lodash";
import { createContactForm } from "../service/contact.service";
import log from "../logger";

export async function createContact(req: Request, res: Response) {
    try {
        const contact = await createContactForm(req.body);
        return res.send(contact);
    } catch (e:any) {
        log.error(e);
        return res.status(409).send(e.message);
    }
}
