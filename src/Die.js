import React, { Component } from "react";
import "./Die.css"
class Die extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animated: this.props.animated
        }


    }

    timer = () => {

        this.setState({
            animated: "animate",

        })


        setTimeout(() => {
            this.setState({ animated: "" })
        }, 1000);

    }

    render() {

        return (


            <i className={"Die fas fa-dice-" + this.props.number + " " + this.props.animated} style={{ fontSize: 50, padding: 30 }} ></i>



        )
    }

}
export default Die