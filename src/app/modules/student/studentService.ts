import { Student } from "./student.interfase";
import {StudentModel} from "./student.model"

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(Student)
  return result
}

export const studentService={createStudentIntoDB}