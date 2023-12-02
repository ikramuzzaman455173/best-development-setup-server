// import { Schema, model, connect } from 'mongoose';
//studentName Interface
export type studentName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

//Gurdian Interface
export type Gurdian = {
  fatherName: string;
  fatherContactNo: string;
  motherName: string;
  motherContactNo: string;
};

// LocalGurdian Interface
export type LocalGurdian = {
  name: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: studentName;
  gender: 'male' | 'female';
  dateofBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  gurdian: Gurdian;
  localGurdian: LocalGurdian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
