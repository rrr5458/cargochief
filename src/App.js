import React, { useState, useEffect } from 'react'
import StudentList from './pages/StudentList';
import './App.css';

function App() {
  const [studentInfo, setStudentInfo] = useState([])

  const addTag = (tag, index) => {
    const newTag = [...studentInfo];
    newTag[index].tags.push(tag);
    setStudentInfo(newTag)
  };

  useEffect(() => {
    fetch(`https://api.hatchways.io/assessment/students`)
      .then(res => res.json())
      .then(data => {
        let newData = []
        data.students.map(student => {
          let addTags = student
          addTags.tags = [];
          newData.push(addTags)
        })
        setStudentInfo(newData)
      })
  }, [])
  return (
    <div className="App">
      <StudentList studentInfo={studentInfo } addTag={addTag}/>
    </div>
  );
}

export default App;
