import React from 'react'
import Sub3 from './sub3'

let emp = ['Acchu', 'Chiru', 'Appi']

let course = {
    id:2,
    title:"Reactjs",
    duration:"1.5month"
}

function Doc2(props) {
    return (
        <div>
            <h1>props in functional component</h1>
            <Sub3 x={23} y= {34} view={true} users={emp} cT={course}/>
        </div>
    )
}
export default Doc2