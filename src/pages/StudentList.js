import React, { useState } from 'react'
import './StudentList.css';
import '../App.css'
import ExpandButton from '../components/ExpandButton';
import AddTagForm from '../components/AddTagForm';

function StudentList(props) {
    const [search, setSearch] = useState("")
    const [tagSearch, setTagSearch] = useState("")



    const averageGrades = (arr) => {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += parseInt(arr[i])
        }
        return sum / arr.length
    }
    if (props.studentInfo !== []) {
        return (
            <div className="main">
                <input className="input" type="text" placeholder="Search Name" onChange={e => {setSearch(e.target.value) }} />
                <input className="input" type="text" placeholder="Search Tag" onChange={e => {setTagSearch(e.target.value)}} />
                {console.log(tagSearch)}
                {props.studentInfo
                    .filter((val) => {
                        {console.log(val.tags[0])}
                        if (search === "" && tagSearch === "") {
                            return val
                        } else if (val.firstName.toLowerCase().includes(search.toLowerCase())) {
                            return val
                        } else if (val.lastName.toLowerCase().includes(search.toLowerCase())) {
                            return val
                        }
                        if (val.tags[0].includes(tagSearch.toLowerCase())) {
                            console.log(tagSearch)
                            console.log(val)
                            return val
                        }
                    })
                    .map((student, index) => {
                        return (
                            <div key={student.id} className="container">
                                <img alt="studentpic" src={student.pic} className="avatar"></img>
                                <h1 className="name">{student.firstName} {student.lastName}</h1>
                                <div className="content">
                                    <p>Email: {student.email}</p>
                                    <p>Company: {student.company}</p>
                                    <p>Skill: {student.skill}</p>
                                    <p>Average: {averageGrades(student.grades)} %</p>
                                    {student.tags.length > 0
                                        ? student.tags.map((tag, index) => {
                                            return <div key={index}>{tag}</div>;
                                        })
                                        : null}
                                    <ExpandButton grades={student.grades} />
                                    <AddTagForm index={index} addTag={props.addTag}/>
                                </div>
                                {/* <button className="expandBtn" onClick={ () => setIsActive(!isActive)}>{isActive ? '-' : '+'}</button> */}
                            </div>
                        )
                    })}

            </div>
        )
    }
}

export default StudentList
