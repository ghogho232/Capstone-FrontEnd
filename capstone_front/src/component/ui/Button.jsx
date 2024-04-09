import React from "react";

function Button(props){
    const{title, onClick, id, className, style} = props;
    return (
        <button className={className} id={id}onClick={onClick}style={style}>{title}</button>
      );
}
export default Button;