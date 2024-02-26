import React from 'react'

function Doc4(props) {
    return(
        <div>
            <h1>Default Props in Functional Component</h1>
            <h3>a = {props.a}</h3>
            <h3>b={props.b}</h3>
            <h3>product ={ props.a * props.b } </h3> 
        </div>
    )
}

//default props

Doc4.defaultProps = {
    a:233,
    b:234,
    view:false,
    emp: ['Acchu', 'chiru', 'Appi'],
    user: {
        id:12,
        name:"Chipuru",
        email:"chipuru@gmail.com",
        gender:"male"
    }
}
export default Doc4;