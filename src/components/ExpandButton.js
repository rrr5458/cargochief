import React, {useState} from 'react'
import '../pages/StudentList.css';

function ExpandButton({grades}) {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="button-grades">
            {/* if isActive is true after clicking the button, the div will be visible after we map through the grades array*/}
            {isActive && <div>{grades.map((grade, index) => {
               return( <ul key={index}>Test {index + 1}: {grade}%</ul>)
            })}</div>}
             <button className="expandBtn" style={{"font-size": "76px"}} onClick={ () => setIsActive(!isActive)}>{isActive ? '-' : '+'}</button>
        </div>
    )
}

export default ExpandButton
