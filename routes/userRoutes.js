import express from "express";
import { createUserControlller, deleteUserControlller, getAllUsersControlller, getSingleUserControlller, updateUserControlller } from "../controller/userController.js";



const router = express.Router()


// create User
router.post('/create-user', createUserControlller)

// get all users
router.get('/all-users', getAllUsersControlller)

//get single user
router.get('/single-user/:id', getSingleUserControlller)

// update single user
router.put('/update-user/:id', updateUserControlller)

// delete single user
router.delete('/delete-user/:id', deleteUserControlller)

export default router