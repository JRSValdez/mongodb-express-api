import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }

    res.json(contact);
  });
};

export const getAllContacts = (req, res) => {
  Contact.find({}, (err, contacts) => {
    if (err) {
      res.send(err);
    }

    res.json(contacts);
  });
};

export const getContactById = (req, res) => {
  const { contactId } = req.params;
  Contact.findById(contactId, (err, contact) => {
    if (err) {
      res.send(err);
    }

    res.json(contact);
  });
};

export const updateContact = (req, res) => {
  const { contactId } = req.params;
  Contact.findOneAndUpdate(
    { _id: contactId },
    req.body,
    { new: true, useFindAndModify: false },
    (err, contact) => {
      if (err) {
        res.send(err);
      }

      res.json(contact);
    }
  );
};
