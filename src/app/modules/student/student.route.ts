import express from 'express';
import { studentController } from './student.controller';
const router = express.Router();
// new student create route
router.post('/create-student', studentController.createStudent);
// all student get route
router.get('/', studentController.getAllStudents);
// signle students get routes
router.get('/:id', studentController.getSingleStudent);
export const StudentRoutes = router;