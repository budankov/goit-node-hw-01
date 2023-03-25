const contacts = require("./db/contacts.js");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
  }
};

invokeAction({ action: "list" });
