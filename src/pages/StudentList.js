import React, { useState } from "react";
import "./StudentList.css";
import "../App.css";
import ExpandButton from "../components/ExpandButton";
import AddTagForm from "../components/AddTagForm";

function StudentList(props) {
  const [search, setSearch] = useState("");
  const [tagSearch, setTagSearch] = useState("");

  //simple algorithm to loop through each student's grades to find the average
  const averageGrades = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i]);
    }
    return sum / arr.length;
  };
  if (props.studentInfo !== []) {
    return (
      <div className="main">
          {/* these two inputs allow the filter conditions to compare input text with json data */}
        <input
          className="input"
          type="text"
          placeholder="Search Name"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <input
          className="input"
          type="text"
          placeholder="Search Tag"
          onChange={(e) => {
            setTagSearch(e.target.value);
          }}
        />
        {/*Before we map, we filter the data first. The three conditions allow us to filter by name and tags*/}
        {props.studentInfo
          .filter((val) => {
            if (search === "" && tagSearch === "") {
                return true
            };
            if (search !== "") {
              if (val.firstName.toLowerCase().includes(search.toLowerCase())) {
                console.log(val.firstName)
                return true;
              } else if (val.lastName.toLowerCase().includes(search.toLowerCase())) {
                console.log(val.lastName)
                return true;
              }
            }
            if (tagSearch !== "" && val.tags.some((tag) =>tag.toLowerCase().includes(tagSearch.toLowerCase()))) {
                console.log(val.firstName)
              return true;
            }
            return false;
          })
          .map((student, index) => {
            return (
              <div key={student.id} className="container">
                <img
                  alt="studentpic"
                  src={student.pic}
                  className="avatar"
                ></img>
                <h1 className="name" style={{"font-weight" : "900"}}>
                  {student.firstName} {student.lastName}
                </h1>
                <div className="content">
                  <p>Email: {student.email}</p>
                  <p>Company: {student.company}</p>
                  <p>Skill: {student.skill}</p>
                  <p>Average: {averageGrades(student.grades)} %</p>
                  {/* checks if each student has any tags then renders*/}
                  {student.tags.length > 0
                    ? student.tags.map((tag, index) => {
                        return <span className="tag" key={index}>{tag}</span>;
                      })
                    : null}
                  <ExpandButton grades={student.grades} />
                  <AddTagForm index={index} addTag={props.addTag} />
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default StudentList;
