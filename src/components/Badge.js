// Basic
import React from "react";

// Badge Component
function Badge(props) {
    return (
        <span className={"badge " + props.color + " text-white mx-1 my-1 text-white"}><i class={props.icon}></i> {props.text}</span>
    )
}

export default Badge;