import React from 'react'
import ReactDOM from 'react-dom'

class Message extends React.Component{
    //the render methods describes what you want to render in the DOM
    render(){   
        console.log(this.props)
        return(
            <div>
                <h1 style={{color:this.props.color}}>
                    {this.props.msg}
                </h1>
                <p>{this.props.age}</p>
            </div>
        )
    }
}
var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}
const title = React.createElement(
    'ul',
    {id:'title', className: 'header', style: style},
    React.createElement(
        'li',
        {},
        'item on the list'
    )
)

ReactDOM.render(
    <Message msg="How are you?" age={50} color="blue"/>, 
    document.getElementById('root')
)