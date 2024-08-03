import React, { Fragment } from 'react';
import CommonEditModal from '../../Common/Modal/CommonEditModal';

const ActionEditModal = (props) => {
    return (
        <Fragment>
            <CommonEditModal currentUrl={props.currentUrl} errors={props.errors} formValue={props.formValue} handleSubmit={props.handleSubmit} handleChange={props.handleChange} tableData={props.tableData} isOpen={props.modal} title={props.ModalTitle} toggler={props.toggle} >....</CommonEditModal>
        </Fragment>
    );
};

export default ActionEditModal;