const express = require('express')
const router = express.Router()
const contactsController = require('../../../controllers/controllers-contacts')
const guard = require('../../../helpers/guard')
const validate=require('./validation')


router
  .get('/', guard,  contactsController.getAllContats)
  .post('/', guard,validate.createContact, contactsController.createContact)

router
  .get("/:contactId", guard, contactsController.getContactByID)
  .delete('/:contactId', guard, contactsController.removeContact)
  .patch('/:contactId',validate.updateContact, guard,contactsController.updateContact)

module.exports = router