import React, {Component} from 'react'
class Doc3 extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div>
                <h1>Default Props</h1>
                <h2>product = {this.props.a * this.props.b}</h2>
                <h2>view = {this.props.view ? " true" : " False"}</h2>

                {/* <div>
                    {
                        this.props.emp.map((item,index) => {
                            return(

                            )
                        })
                    }
                </div> */}
                <h3>Emp = {this.props.emp}</h3>
                <h3>users ={this.props.user.id}</h3>
                <h3>users ={this.props.user.name}</h3>
                <h3>users ={this.props.user.email}</h3>
                <h3>users ={this.props.user.gender}</h3>

            </div>
        )
    }
}

//default props
Doc3.defaultProps = {
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

export default Doc3