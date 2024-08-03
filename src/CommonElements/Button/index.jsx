import React from 'react';
import { Button } from 'reactstrap';
import './Button.css'
const Btn = (props) => {
    const { attrBtn, children, onClick,item } = props;
    const { style, className, ...rest } = attrBtn;

    return (
        onClick ?
            <Button
                style={{ ...style, fontSize: '14px', padding: '4px', borderRadius: '5px' }}
                className={`custom-btn ${className}`}
                {...rest}
                onClick={()=>onClick(item.id)}

            >
                {children}
            </Button> :
             <Button
                style={{ ...style, fontSize: '14px', padding: '4px', borderRadius: '5px' }}
                className={`custom-btn ${className}`}
                {...rest}
            >
                {children}
            </Button>
    );
};

export default Btn;
