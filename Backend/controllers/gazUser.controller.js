const gazUserModel = require("../models/gazUser.model");
const gazUserService = require("../services/gazUser.services");
const { validationResult } = require("express-validator");

module.exports.createReq = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {
    empName,
    desg,
    ruidNo,
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

  const isAlreadyRequested = await gazUserModel.findOne({ ruidNo });
  if (isAlreadyRequested) {
    return res.status(400).json({ message: "Request already exists" });
  }

  const newReq = await gazUserService.createReq({
    empName,
    desg,
    ruidNo,
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
    hindiNamePic: {
      data: req.files?.hindiNamePic?.[0]?.buffer,
      contentType: req.files?.hindiNamePic?.[0]?.mimetype,
    },
    hindiDesg: {
      data: req.files?.hindiDesg?.[0]?.buffer,
      contentType: req.files?.hindiDesg?.[0]?.mimetype,
    },
  });
  res.status(201).json({ newReq });
};

module.exports.appStatus = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { ruidNo, dob } = req.body;

  if (!ruidNo || !dob) {
    return res.status(400).json({ message: "All the fields are required" });
  }
  const application = await gazUserModel.findOne({
    ruidNo,
    dob: new Date(dob),
  });
  if (!application) {
    return res.status(400).json({ status: "Application not found" });
  }
  res.status(201).json({ app: {
      ...application._doc,
      profilePic: application.profilePic?.data
        ? `data:${application.profilePic.contentType};base64,${application.profilePic.data.toString('base64')}`
        : null,
      signPic: application.signPic?.data
        ? `data:${application.signPic.contentType};base64,${application.signPic.data.toString('base64')}`
        : null,
      hindiNamePic: application.hindiNamePic?.data
        ? `data:${application.hindiNamePic.contentType};base64,${application.hindiNamePic.data.toString('base64')}`
        : null,
      hindiDesg: application.hindiDesg?.data
        ? `data:${application.hindiDesg.contentType};base64,${application.hindiDesg.data.toString('base64')}`
        : null,
    }});
};
