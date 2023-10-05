const express = require('express');
const applicantController = require('../Controllers/applicantController');

const router = express.Router();

router.route('/').get(applicantController.home);
router.route('/enroll').post(applicantController.emailTheOwnerAndApplicant);

module.exports = router;