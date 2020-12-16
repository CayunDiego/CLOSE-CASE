import React from 'react';

const Menu = (props) => {
    return (
        <svg
            viewBox="0 0 39 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
        <rect
            x={0.5}
            y={-0.5}
            width={38}
            height={5.828}
            rx={1.5}
            transform="matrix(1 0 0 -1 0 28.586)"
            fill="#fff"
            stroke="#202B80"
        />
        <rect
            x={0.5}
            y={-0.5}
            width={38}
            height={5.828}
            rx={1.5}
            transform="matrix(1 0 0 -1 0 17.207)"
            fill="#fff"
            stroke="#202B80"
        />
        <rect
            x={0.5}
            y={-0.5}
            width={38}
            height={5.828}
            rx={1.5}
            transform="matrix(1 0 0 -1 0 5.828)"
            fill="#fff"
            stroke="#202B80"
        />
        </svg>
    )
}

export default Menu;
