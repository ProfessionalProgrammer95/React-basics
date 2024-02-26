import React, { Component } from  'react';
import Sub1 from './sub1'
import Sub2 from './sub2'

class Doc1 extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="test">
                <h1>props in class components</h1>
                {/*jsx attributes =>  props*/}
                <Sub1 x={20} y={45} />
                <Sub2 a= {25} b={36} />
            </div>
        )
    }
}
export default Doc1