const express = require("express");
const router = express.Router();
const studentController = require("./students-controller");
const { validateRequest, schemas } = require("../../middlewares/validate-request");

router.get("", validateRequest(schemas.pagination, 'query'), studentController.handleGetAllStudents);
router.post("", validateRequest(schemas.createStudent), studentController.handleAddStudent);
router.get("/:id", validateRequest(schemas.idParam, 'params'), studentController.handleGetStudentDetail);
router.post("/:id/status", validateRequest(schemas.idParam, 'params'), studentController.handleStudentStatus);
router.put("/:id", validateRequest(schemas.idParam, 'params'), studentController.handleUpdateStudent);
router.delete("/:id", validateRequest(schemas.idParam, 'params'), studentController.handleDeleteStudent);

module.exports = { studentsRoutes: router };
