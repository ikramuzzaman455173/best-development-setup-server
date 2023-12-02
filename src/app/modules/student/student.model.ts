import { Schema, model } from 'mongoose';
import { Student, studentName, Gurdian, LocalGurdian, Student } from './student.interfase';

// studentNameSchema
const studentNameSchema = new Schema<studentName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

// gurdianSchema

const gurdianSchema = new Schema<Gurdian>({
  fatherName: { type: String },
  fatherContactNo: { type: String },
  motherName: { type: String },
  motherContactNo: { type: String },
});

// localGurdianSchema

const localGurdianSchema = new Schema<LocalGurdian>({
  name: { type: String },
  contactNo: { type: String },
  address: { type: String },
});

// create student schema
const studentSchema = new Schema<Student>({
  id: { type: String },
  name: studentNameSchema,
  gender: ['male', 'female'],
  dateofBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  gurdian: gurdianSchema,
  localGurdian: localGurdianSchema,
  profileImg: { type: String },
  isActive: ['active', 'blocked'],
});


// create student model

export const StudentModel=model<Student>("student",studentSchema)