import {
  getAllUserService,
  getUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService
} from "../models/userModel.js";

const handleResponse = (res, statusCode, message, data) => {
  return res.status(statusCode).json({
    statusCode,
    data,
    message
  });
};

export const createUser = async (req, res, next) => {
  // Check if req.body exists and is an object
  if (!req.body || typeof req.body !== 'object') {
    return res.status(400).json({
      statusCode: 400,
      message: 'Invalid request body',
      data: null
    });
  }
  
  const { name, email, age } = req.body;
  
  // Validate required fields
  if (!name || !email) {
    return res.status(400).json({
      statusCode: 400,
      message: 'Name and email are required',
      data: null
    });
  }
  
  try {
    const user = await createUserService({ name, email, age });
    handleResponse(res, 201, "User created successfully", user);
  } catch (error) {
    next(error);
  }
};


export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUserService();
    handleResponse(res, 200, "Users retrieved successfully", users );
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await getUserByIdService(id);
    handleResponse(res, 200, "User retrieved successfully", user );
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  
  // Check if req.body exists and is an object
  if (!req.body || typeof req.body !== 'object') {
    return res.status(400).json({
      statusCode: 400,
      message: 'Invalid request body',
      data: null
    });
  }
  
  const { name, email, age } = req.body;
  
  try {
    const user = await updateUserService(id, { name, email, age });
    handleResponse(res, 200, "User updated successfully", user );
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await deleteUserService(id);
    handleResponse(res, 200, "User deleted successfully", user );
  } catch (error) {
    next(error);
  }
};
