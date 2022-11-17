import React from 'react';

const List = (props) => {
    const {boxObject}=props;
    const listStyle = boxObject;
    return (
        <div className='bbb'>
            <div style={listStyle}></div>
        </div>
    )
}

export default List