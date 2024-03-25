import React from "react";
import './icon.css'

const Icon = (props) => {
    return (
        <a href="/" className="nav-link">
        <div className="icon-container">
            <i className={`fa-solid ${props.icon} icon`}></i>
            <div className="title">{props.title}</div>
        </div>
    </a>
    );
};

export default Icon;