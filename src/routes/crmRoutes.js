import {
  addNewContact,
  getAllContacts,
  getContactById,
  updateContact,
} from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      //middleware
      console.log(`Request from ${req.originalUrl}`);
      console.log(`Request type ${req.method}`);
      next();
    }, getAllContacts)
    .post(addNewContact);

  app
    .route("/contact/:contactId")
    .get(getContactById)
    .put(updateContact)
    .delete((req, res) => {
      res.send("DELETE request successful [/contact]");
    });
};

export default routes;
