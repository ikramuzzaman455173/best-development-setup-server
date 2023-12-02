import { Request, Response } from 'express';
import { studentService } from './studentService';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await studentService.createStudentIntoDB(student);
    //send response
    res.status(200).json({
      success: true,
      message: 'Student Created Successfully!',
      data: result,
    });
  } catch (error) {
    // console.log(`Something went to wrong: ${error}`);
    res.status(404).json({
      success: 'false',
      message: 'Student Not Created !',
      error: 'Something went to wrong',
    });
  }
};

export const studentController = { createStudent };
