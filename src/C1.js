import { Component } from "react";

class c1 extends Component
{
    render()
    {
        let data=this.props.data
        return(<div>
            <h1>Name:{data.name}</h1>
            <h1>Age:{data.age}</h1>
            <h1>Marks:{data.marks}</h1>
        </div>)
    }
}
export default c1