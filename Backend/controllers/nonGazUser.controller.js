const nonGazUserModel = require("../models/nonGazUser.model");
const nonGazUserService = require("../services/nonGazUser.services");
const { validationResult } = require("express-validator");

module.exports.createReq = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {
    empName,
    desg,
    empNo,
    dob,
    dept,
    station,
    billUnit,
    address,
    rlyContact,
    mobile,
    reason,
    family,
    emergencyName,
    emergencyContact,
  } = req.body;

  const isAlreadyRequested = await nonGazUserModel.findOne({ empNo });
  if (isAlreadyRequested) {
    return res.status(400).json({ message: "Request already exists" });
  }

  const newReq = await nonGazUserService.createReq({
    empName,
    desg,
    empNo,
    dob,
    dept,
    station,
    billUnit,
    address,
    rlyContact,
    mobile,
    reason,
    family,
    emergencyName,
    emergencyContact,
    profilePic: {
      data: req.files?.profilePic?.[0]?.buffer,
      contentType: req.files?.profilePic?.[0]?.mimetype,
    },
    signPic: {
      data: req.files?.signPic?.[0]?.buffer,
      contentType: req.files?.signPic?.[0]?.mimetype,
    },
  });

  res.status(201).json({ newReq });
};


module.exports.appStatus = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {
    empNo,
    dob
  } = req.body;

  if (!empNo || !dob) {
    return res.status(400).json({ message: "All the fields are required" });
  }
  const application = await nonGazUserModel.findOne({
    empNo,
    dob: new Date(dob),
  });
  if (!application) {
    return res.status(404).json({"status": "Application not found"});
  }
  res.status(201).json({
  app: {
    ...application._doc,
    profilePic: application.profilePic?.data
      ? `data:${application.profilePic.contentType};base64,${application.profilePic.data.toString('base64')}`
      : null,
    signPic: application.signPic?.data
      ? `data:${application.signPic.contentType};base64,${application.signPic.data.toString('base64')}`
      : null,
  },
});

};

