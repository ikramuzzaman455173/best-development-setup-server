import { Request, Response } from 'express';
import { studentService } from './studentService';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentService.createStudentIntoDB(studentData);
    //send response
    res.status(200).json({
      success: true,
      message: 'Student Created Successfully!',
      data: result,
    });
  } catch (error) {
    // console.log(`Something went to wrong: ${error}`);
    res.status(404).json({
      success: false,
      message: 'Student Not Created !',
      error: 'Something went to wrong',
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentInfoDB();
    res.status(200).send(result);
  } catch (error) {
    // console.log(`Something went wrong: ${error}`);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await studentService.getSingleStudentFromDB(id);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
