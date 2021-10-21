import React, {useState} from 'react'
import '../pages/StudentList.css';

function ExpandButton({grades}) {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="button-grades">
            {isActive && <div>{grades.map((grade, index) => {
               return( <ul key={index}>Test {index + 1}: {grade}%</ul>)
            })}</div>}
             <button className="expandBtn" onClick={ () => setIsActive(!isActive)}>{isActive ? '-' : '+'}</button>
        </div>
    )
}

export default ExpandButton
