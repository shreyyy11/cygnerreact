import React, { Component }  from "react";

class Visitor extends Component {

    constructor( ) {
    super()
        this.state = {
            message: 'Welcome visitor'
        }
    }
    changemessage(){
        this.setState({
            message:'Thankyou for subscribing'
        })
    }
    render() {
        return ( 
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={() => this.changemessage ()}>Subscribe</button>
                </div>
        )
    }
}

export default Visitor