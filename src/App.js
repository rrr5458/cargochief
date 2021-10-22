import React, { useState, useEffect } from 'react'
import StudentList from './pages/StudentList';
import './App.css';

//Cargo Chief Team. Hi. Before you take a look, this is my output after beginning to code (at all) March 2021.
// I learned React about two months ago. I actually was able to finish most tasks pretty quickly, but step 5 slowed me down
// I'm still learning best practices when it comes to React, but feel I have come a long way in a short amount of time
// If this line remains, it's because I wasn't able to figure out how to filter names and tags together
//Because this app and the api is small without many features, I did not use redux. 

function App() {
  const [studentInfo, setStudentInfo] = useState([])

  const addTag = (tag, index) => {
    const newTag = [...studentInfo];
    newTag[index].tags.push(tag);
    setStudentInfo(newTag)
  };

  //fetched an api using promises, added a tags array to the data from the server
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
      <div className="main">
        <StudentList studentInfo={studentInfo } addTag={addTag}/>
      </div>
    </div>
  );
}

export default App;
