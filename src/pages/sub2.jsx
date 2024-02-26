import React, {Component} from 'react'

class Sub2 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h1>Sub component 2</h1>
                <h2> product (a * b) = {this.props.a * this.props.b}</h2>
            </div>
        )
    }
}

export default Sub2