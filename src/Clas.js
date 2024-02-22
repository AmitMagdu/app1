import { Component } from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";

class clas extends Component
{
    render()
    {
        return(
            <div>
                <h1>class comp</h1>
                <p>just demo</p>
                <Comp1 label="button1" sty={{"color":"blue","font-size":"20px","background":"red"}}/>&nbsp;
                <Comp2 label="button2" sty={{'color':"orange","font-size":"20px","background":"black"}}/>
            </div>
        )
    }
}
export default clas