import React, { Fragment, useState } from 'react';
import CommonModal from '../../Common/Modal/CommonModal';

const ActionModal = (props) => {
    return (
        <Fragment>
            <CommonModal currentUrl={props.currentUrl} errors={props.errors} formValue={props.formValue} handleSubmit={props.handleSubmit} handleChange={props.handleChange} tableData={props.tableData} isOpen={props.modal} title={props.ModalTitle} toggler={props.toggle} >....</CommonModal>
        </Fragment>
    );
};

export default ActionModal;