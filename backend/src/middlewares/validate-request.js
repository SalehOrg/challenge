const { z } = require('zod');
const { ApiError } = require('../utils');

/**
 * Middleware to validate request data against a Zod schema
 * @param {z.ZodSchema} schema - Zod schema to validate against
 * @param {('body'|'query'|'params')} source - Source of data to validate
 */
const validateRequest = (schema, source = 'body') => {
    return async (req, res, next) => {
        try {
            const dataToValidate = req[source];
            const validated = await schema.parseAsync(dataToValidate);
            req[source] = validated;
            next();
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errorMessages = error.errors.map((err) => ({
                    field: err.path.join('.'),
                    message: err.message
                }));
                
                return res.status(400).json({
                    success: false,
                    error: 'Validation failed',
                    details: errorMessages
                });
            }
            
            next(new ApiError(400, 'Invalid request data'));
        }
    };
};

// Common validation schemas
const schemas = {
    // Student validation schemas
    createStudent: z.object({
        name: z.string().min(1, 'Name is required').max(100),
        email: z.string().email('Invalid email address'),
        phone: z.string().optional(),
        gender: z.enum(['male', 'female', 'other']).optional(),
        dob: z.string().optional(),
        class_name: z.string().optional(),
        section_name: z.string().optional(),
        roll: z.number().int().positive().optional(),
        father_name: z.string().optional(),
        father_phone: z.string().optional(),
        mother_name: z.string().optional(),
        mother_phone: z.string().optional(),
        guardian_name: z.string().optional(),
        guardian_phone: z.string().optional(),
        current_address: z.string().optional(),
        permanent_address: z.string().optional()
    }),
    
    updateStudent: z.object({
        name: z.string().min(1).max(100).optional(),
        email: z.string().email().optional(),
        phone: z.string().optional(),
        gender: z.enum(['male', 'female', 'other']).optional(),
        dob: z.string().optional(),
        class_name: z.string().optional(),
        section_name: z.string().optional(),
        roll: z.number().int().positive().optional(),
        father_name: z.string().optional(),
        father_phone: z.string().optional(),
        mother_name: z.string().optional(),
        mother_phone: z.string().optional(),
        guardian_name: z.string().optional(),
        guardian_phone: z.string().optional(),
        current_address: z.string().optional(),
        permanent_address: z.string().optional()
    }),
    
    // Notice validation schemas
    createNotice: z.object({
        title: z.string().min(1, 'Title is required').max(200),
        description: z.string().min(1, 'Description is required'),
        status: z.number().int(),
        recipientType: z.enum(['EV', 'SP']),
        recipientRole: z.number().optional(),
        firstField: z.union([z.number(), z.string()]).optional()
    }),
    
    // Common ID validation
    idParam: z.object({
        id: z.string().regex(/^\d+$/, 'Invalid ID format').transform(Number)
    }),
    
    // Pagination validation
    pagination: z.object({
        page: z.string().regex(/^\d+$/).transform(Number).optional(),
        limit: z.string().regex(/^\d+$/).transform(Number).optional(),
        search: z.string().optional(),
        sortBy: z.string().optional(),
        order: z.enum(['asc', 'desc']).optional()
    })
};

module.exports = {
    validateRequest,
    schemas
};