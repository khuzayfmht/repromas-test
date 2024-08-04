import { useState } from 'react';
import { Outlet } from 'react-router-dom';

interface StudentType {
  name: string;
  regNo: string;
  age: number;
  level: number | string;
}

const Students = () => {
  const [studetList, setStudentLis] = useState<StudentType[]>([]);

  const addStudentToList = () => {
    const student: StudentType = {
      name: 'Isa Muhammed',
      regNo: '0001',
      age: 18,
      level: 2,
    };

    setStudentLis((prev) => [...prev, student]);
  };
  
  console.log({ studetList });

  return (
    <div>
      <button onClick={addStudentToList}>Add Student</button>
      <Outlet />
      {studetList.length < 1 ? (
        <h1>No recorde</h1>
      ) : (
        <table width="50%" border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Reg No</th>
              <th>Age</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {studetList.map((student) => (
              <tr>
                <td>{student.name}</td>
                <td>{student.regNo}</td>
                <td>{student.age}</td>
                <td>{student.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

     
    </div>
  );
};

export default Students;
