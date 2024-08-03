import React from 'react';
import { Button } from 'reactstrap';
import './Button.css'
const Btn = (props) => {
    const { attrBtn, children, onClick, item, toggler, isEditBtnAction } = props;
    const { style, className, ...rest } = attrBtn;
    const getActionEditBtn = () => {
        return (
            <Button
                style={{ ...style, fontSize: '14px', padding: '4px', borderRadius: '5px' }}
                className={`custom-btn ${className}`}
                {...rest}
                onClick={(e) => onClick(e, item)}
            >
                {children}
            </Button>
        )
    }
    return (

        !isEditBtnAction ?
            toggler ? <Button
                style={{ ...style, fontSize: '14px', padding: '4px', borderRadius: '5px' }}
                className={`custom-btn ${className}`}
                {...rest}
                onClick={(e) => onClick(e, toggler, item?.id)}
            >
                {children}
            </Button>
                : item ?
                    <Button
                        style={{ ...style, fontSize: '14px', padding: '4px', borderRadius: '5px' }}
                        className={`custom-btn ${className}`}
                        {...rest}
                        onClick={() => onClick(item.id)}
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
            : getActionEditBtn()
    );
};

export default Btn;
