import React from 'react';
import { Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { categoryData } from '../../../Data/ActionData/ActionData';
import ValidationMessage from '../../../CommonElements/Validation/Validation';
import { categories, review, subCategory } from '../../../Route/RouteVariable';

const CommonModal = (props) => {
    const getOption = () => {
        if (props.currentUrl === subCategory) {
            return (<>
                <option value="" disabled selected>Select Category</option>
                {categoryData?.map((obj, index) => (
                    <option key={index}>{obj?.title}</option>
                ))}
            </>
            )
        }
        else if (props.currentUrl === categories) {
            return (<>
                <option value="" disabled selected>Select</option>
                <option >Yes</option>
                <option>No</option>
            </>
            )
        }
    }
    const labelHeading = props.currentUrl === categories ? 'Feature' : props.currentUrl === subCategory ? 'Category' : ''
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggler} size={props.size} centered>
            <ModalHeader toggle={props.toggler} style={{ borderBottom: '2px solid #dee2e6' }}>
                {props.title}
            </ModalHeader>
            <ModalBody className={props.bodyClass}>
                <Label className="col-form-label" for="recipient-name">
                    {'Name'}<span style={{color:'red'}}>*</span>
                    </Label>
                <Input className="form-control" type="text" defaultValue={props.formValue.title} name='title' onChange={props.handleChange} />
                {(props.errors.title) && <ValidationMessage message='Please Enter Name' />}
                {props.currentUrl !== review && <>
                    <Label className="col-form-label mt-1" for="recipient-name">{labelHeading}<span style={{color:'red'}}>*</span></Label>
                    <Input type="select" className="form-control digits" name={'categoryName'} onChange={props.handleChange} defaultValue={props.formValue.categoryName}>
                        {getOption()}
                    </Input>
                    {(props.errors.categoryName) && <ValidationMessage message={`Please Select ${labelHeading}`} />}
                </>}
                <Label className="col-form-label mt-1" for="recipient-name">{'Status'}</Label>
                <Btn className attrBtn={{ color: 'success', className: 'btn add-subcategory-btn-active' }}>Active</Btn>
            </ModalBody>
            <ModalFooter>
                <Btn onClick={props.handleSubmit} toggler={props.toggler} attrBtn={{ color: 'primary', className: 'btn add-subcategory-btn-submit' }}>Submit</Btn>
            </ModalFooter>
        </Modal>
    );
};

export default CommonModal;