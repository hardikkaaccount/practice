const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  // Check if it's a known error type
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({
      statusCode: 400,
      message: 'Invalid JSON in request body',
      data: null
    });
  }
  
  res.status(500).json({
    statusCode: 500,
    message: 'Internal server error',
    data: null
  });
};

export default errorHandler;