import { Component } from "react";
import C2 from "./C2";
import C1 from "./C1"

class Class2 extends Component
{
    constructor()
    {
        super()
        this.data={'name':'abc',"age":20,"marks":90}
    }
    render()
    {
        return(<div>
            <C2 data={this.data}/>
            <C1 data={this.data}/>
        </div>)
    }
}
export default Class2