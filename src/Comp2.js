import { Component } from "react";

class Comp2 extends Component
{
    render()
    {
        return(
            <button style={this.props.sty}>{this.props.label}</button>
        )
    }
}
export default Comp2