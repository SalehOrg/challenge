const axios = require('axios');
const asyncHandler = require("express-async-handler");
const asyncErrorHandler = require("../utils/asyncErrorHandler");
const { checkPermission } = require("../modules/roles-and-permissions/rp-repository");
const { ApiError } = require("../utils");

const checkApiAccess = asyncHandler(async (req, res, next) => {
    // Check if user exists
    if (!req.user || !req.user.roleId) {
        throw new ApiError(401, 'User not authenticated');
    }

    const { baseUrl, route, method, path: reqPath } = req;
    const { roleId } = req.user;
    
    // Get the path from route or use the request path
    const originalUrl = route && route.path 
        ? `${baseUrl}${route.path}`
        : reqPath || req.originalUrl;

    // Admin (roleId = 1) has access to everything
    if (roleId !== 1) {
        const affectedRow = await checkPermission(roleId, originalUrl, method);
        if (affectedRow <= 0) {
            throw new ApiError(403, `You do not have permission to access to this resource - ${originalUrl}`);
        }
    }
    next();
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
module.exports = { checkApiAccess };
