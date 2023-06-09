import React from "react";


const Scroll = (props) => {
    return (
        <div style={{
            overflow: 'scroll',
            border: '1px solid black',
            padding: '20px',
            height: '80vh',
            scrollbarWidth: 'none',
        }}>
            {props.children}
        </div>
    );
}

export default Scroll;