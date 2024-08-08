import "./App.css";
import React, { useState, useEffect } from "react";
import StudentList from "./components/studentlist";
import axios from "axios";
function App() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    axios
      .get("http://3.223.98.72:1337/api/students")
      .then((response) => {
        const students = response.data.data.map((student) => ({
          id: student.id,
          firstName: student.attributes.firstName,
          lastName: student.attributes.lastName,
          email: student.attributes.parentEmailId,
          phone: student.attributes.parentContactNo,
          City: student.attributes.city,
          photo: student.attributes.photo,
        }));
        setStudentList(students);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <StudentList students={studentList} />
    </div>
  );
}
export default App;
