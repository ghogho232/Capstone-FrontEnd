import React from "react";
import Button from "../ui/Button";

function MainPage(){
    return (
        <div>
            <h1>Main Page</h1>
            <Button name="Button1" onClick={()=>alert("Button1")}/>
        </div>
      );
}
export default MainPage;