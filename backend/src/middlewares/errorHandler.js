import { constants } from "../constants.js";

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode || 500; // Set default status code to 500

  switch (err?.code) {
    case constants.VALIDATION_ERROR:
      statusCode = 400; // Bad Request
      break;

    case constants.NOT_FOUND:
      statusCode = 404; // Not Found
      break;

    case constants.UNAUTHORIZED:
      statusCode = 401; // Unauthorized
      break;

    case constants.FORBIDDEN:
      statusCode = 403; // Forbidden
      break;

    case constants.SERVER_ERROR:
      statusCode = 500; // Internal Server Error
      break;

    default:
      statusCode = 500; // Default to Internal Server Error
      break;
  }

  res.status(statusCode).json({ title: "Error", message: err.message, stackTrace: err.stack });
};

export { errorHandler };
