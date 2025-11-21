import express from 'express';
import { getAllUsers, createUser, getUserById, updateUser, deleteUser } from '../controllers/userController.js';
const router = express.Router();
import { validateUser } from '../middlewares/inputValidator.js';

router.get("/users", getAllUsers);
router.post("/users", validateUser, createUser);
router.get("/users/:id", getUserById);
router.put("/users/:id", validateUser, updateUser);
router.delete("/users/:id", deleteUser);

export default router;
