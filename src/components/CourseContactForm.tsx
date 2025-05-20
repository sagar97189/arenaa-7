import React from "react";
import EnquiryForm from "./EnquiryForm";

interface CourseContactFormProps {
  courseName: string;
}

const CourseContactForm = ({ courseName }: CourseContactFormProps) => {
  return <EnquiryForm courseName={courseName} buttonType="both" />;
};

export default CourseContactForm; 