import React from 'react';
import { Btn } from '../../../AbstractElements';
import { Active, deactive, features, no, yes } from '../../../Constant';
import { categories, subCategory } from '../../../Route/RouteVariable';

const StatusBtn = ({ status, currentUrl, isFeature }) => {
    const getBtnName = () => {
        if (status) {
            if (currentUrl === categories && isFeature) {
                return yes;
            }
            else {
                return Active;
            }
        }
        else {
            if (currentUrl === categories  && isFeature) {
                return no;
            }
            else {
                return deactive;
            }
        }
    }
    return (
        <div>
            {status ? <>
                <span>
                    <Btn attrBtn={{ className: 'btn status-btn-active', type: 'button' }}> &nbsp;&nbsp;{getBtnName()}&nbsp;&nbsp;&nbsp;</Btn>
                </span>
            </> : <>
                <span>
                    <Btn attrBtn={{ className: 'btn status-btn-deactive', type: 'button' }}> {getBtnName()}</Btn>
                </span>
            </>}
        </div>

    );
};

export default StatusBtn;
