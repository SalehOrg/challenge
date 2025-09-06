const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const { name, className, section, roll, page = 1, limit = 10 } = req.query;
    
    const students = await getAllStudents({ 
        name, 
        className, 
        section, 
        roll: roll ? parseInt(roll) : undefined,
        page: parseInt(page),
        limit: parseInt(limit)
    });
    
    res.status(200).json({
        success: true,
        data: students,
        pagination: {
            page: parseInt(page),
            limit: parseInt(limit),
            total: students.length
        }
    });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const studentData = req.body;
    
    // Validate required fields
    if (!studentData.name || !studentData.email) {
        return res.status(400).json({
            success: false,
            message: "Name and email are required"
        });
    }
    
    const result = await addNewStudent(studentData);
    
    res.status(201).json({
        success: true,
        message: result.message
    });
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Student ID is required"
        });
    }
    
    const result = await updateStudent({
        ...updateData,
        id: parseInt(id)
    });
    
    res.status(200).json({
        success: true,
        message: result.message
    });
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Student ID is required"
        });
    }
    
    const student = await getStudentDetail(parseInt(id));
    
    res.status(200).json({
        success: true,
        data: student
    });
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const reviewerId = req.user?.id || 1; // Get from authenticated user
    
    if (!id || status === undefined) {
        return res.status(400).json({
            success: false,
            message: "Student ID and status are required"
        });
    }
    
    const result = await setStudentStatus({
        userId: parseInt(id),
        reviewerId,
        status: Boolean(status)
    });
    
    res.status(200).json({
        success: true,
        message: result.message
    });
});

const handleDeleteStudent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Student ID is required"
        });
    }
    
    // Use setStudentStatus to soft delete (deactivate) the student
    const result = await setStudentStatus({
        userId: parseInt(id),
        reviewerId: req.user?.id || 1,
        status: false
    });
    
    res.status(200).json({
        success: true,
        message: "Student deleted successfully"
    });
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
    handleDeleteStudent,
};
