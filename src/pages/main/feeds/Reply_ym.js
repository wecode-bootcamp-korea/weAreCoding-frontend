import React, {Component} from "react";

class Reply extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            this.props.replyList.map( (reply, idx) =>{
                return <li key={idx}>{reply}</li>
            })
        )
    }
}

export default Reply;