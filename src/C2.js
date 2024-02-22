import { Component } from "react";

class C2 extends Component
{
    render()
    {
        return(<div>
            <h1>Name:{this.props.data.name}</h1>
            <h1>Age:{this.props.data.age}</h1>
            <h1>Marks:{this.props.data.marks}</h1>
        </div>)
    }
}
export default C2