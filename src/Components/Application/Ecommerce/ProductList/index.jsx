import React, { Fragment, useEffect, useState } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { Col, Container, Row } from 'reactstrap';
import { useLocation } from 'react-router';
import { CurrentPage } from '../../../Common/CurrentPage/CurrentPage';
import { categories, review, subCategory } from '../../../../Route/RouteVariable';
import { categoryData, categoryHeading, ReviewData, reviewHeading, subCategoryData, subCategoryHeading } from '../../../../Data/ActionData/ActionData';
import ActionTable from '../../../Tables/Action/Table';
import { isRequired } from '../../../../Validation/Validation';
import ActionEditModal from '../../../Modal/Action/ActionEditModal';

const ProductListContain = () => {
    const location = useLocation();
    const [tableData, setTableData] = useState([]);
    const [tableHeading, setTableHeading] = useState([]);
    const { currentUrl } = CurrentPage();
    const getTitleName = (currentUrl === subCategory) ? 'Sub Category' : (currentUrl === categories) ? 'Categories' : 'Review';
    const initialValue = {
        id: '',
        title: '',
        categoryName: '',
        status: true,
    }
    const [formValue, setFormValue] = useState(initialValue)
    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [errors, setErrors] = useState({})
    useEffect(() => {
        if (currentUrl === categories) {
            setTableData(categoryData);
            setTableHeading(categoryHeading);
        } else if (currentUrl === subCategory) {
            setTableData(subCategoryData);
            setTableHeading(subCategoryHeading);
        } else {
            setTableData(ReviewData);
            setTableHeading(reviewHeading);
        }
    }, [location.pathname, currentUrl]);

    const changeStatus = (id) => {
        const updatedData = tableData.map(item =>
            item.id === id ? { ...item, status: !item.status } : item
        );
        setTableData(updatedData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let err = validation(formValue)
        setErrors(err);
        if (Object.keys(err).length === 0) {
            let tempData = [...tableData];
            // Find the highest id in the current array
            let highestId = tempData.reduce((max, item) => (item.id > max ? item.id : max), tempData[0].id);
            if (currentUrl === subCategory) {
                let tempObj = {};
                // Increment the id for the new object
                tempObj.id = highestId + 1;
                tempObj.title = formValue.title;
                tempObj.categoryName = formValue.categoryName
                tempObj.status = formValue.status
                // Add the new object to the beginning of the array
                tempData.unshift(tempObj);
            }
            else if (currentUrl === categories) {
                let tempObj = {};
                tempObj.id = highestId + 1;
                tempObj.title = formValue.title;
                tempObj.feature = (formValue.categoryName === 'Yes') ? true : false
                tempObj.status = formValue.status
                tempData.unshift(tempObj);
            }
            else {
                let tempObj = {};
                tempObj.id = highestId + 1;
                tempObj.title = formValue.title;
                tempObj.status = formValue.status
                tempData.unshift(tempObj);
            }

            // Update the state with the new array
            setTableData(tempData);
            // Close the modal
            toggle()
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const validation = (formValue) => {
        let error = {};
        error = isRequired(formValue?.title, { ...error }, 'title')
        if (currentUrl !== review)
            error = isRequired(formValue?.categoryName, { ...error }, 'categoryName')
        return error;
    }

    const toggle = () => {
        setModal(!modal);
        setFormValue(initialValue)
        setErrors({})
    }

    const handleEditModal = (e, item) => {
        console.log("item--------", item)

        if (editModal) {
            setEditModal(!editModal);
            setFormValue(initialValue)
            setErrors({})
        }
        else {
            setEditModal(!editModal);
            if (currentUrl === categories) {
                setFormValue((prev) => ({
                    ...prev,
                    id: item?.id,
                    title: item?.title,
                    categoryName: (item?.feature) ? 'Yes' : 'No',
                    status: item?.status
                }))
            }
            if (currentUrl === subCategory) {
                setFormValue((prev) => ({
                    ...prev,
                    id: item?.id,
                    title: item?.title,
                    categoryName: item?.categoryName,
                    status: item?.status
                }))
            }
            else {
                setFormValue((prev) => ({
                    ...prev,
                    id: item?.id,
                    title: item?.title,
                    status: item?.status
                }))
            }
        }
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        let err = validation(formValue);
        setErrors(err);

        if (Object.keys(err).length === 0) {
            let tempData = [...tableData];

            // Function to update or add an object
            const updateOrAddObject = (updatedObject) => {
                // Find the index of the object with the same id
                const index = tempData.findIndex(item => item.id === updatedObject.id);

                if (index !== -1) {
                    // Update the existing object
                    tempData[index] = { ...tempData[index], ...updatedObject };
                } else {
                    // Add the new object to the beginning of the array
                    tempData.unshift(updatedObject);
                }
            };

            if (currentUrl === subCategory) {
                const tempObj = {
                    id: formValue?.id,
                    title: formValue.title,
                    categoryName: formValue.categoryName,
                    status: formValue.status
                };
                updateOrAddObject(tempObj);
            } 
            else if (currentUrl === categories) {
                const tempObj = {
                    id: formValue?.id,
                    title: formValue.title,
                    feature: formValue.categoryName === 'Yes',
                    status: formValue.status
                };
                updateOrAddObject(tempObj);
            }
            else {
                const tempObj = {
                    id: formValue?.id,
                    title: formValue.title,
                    status: formValue.status
                };
                updateOrAddObject(tempObj);
            }

            // Update the state with the new array
            setTableData(tempData);
            // Close the modal
            handleEditModal();
        }
    };

    const modalTitleVar = currentUrl === categories ? 'Edit Category' : currentUrl === subCategory ? 'Edit Sub Category' : 'Edit Review'

    return (
        <Fragment>
            <Breadcrumbs modal={modal} toggle={toggle} errors={errors} tableData={tableData} formValue={formValue} handleSubmit={handleSubmit} handleChange={handleChange} parent="Actions" title={getTitleName} mainTitle={getTitleName} currentUrl={currentUrl} />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <ActionTable handleEditModal={handleEditModal} tableData={tableData} tableHeading={tableHeading} currentUrl={currentUrl} changeStatus={changeStatus} />
                        <ActionEditModal
                            currentUrl={currentUrl} errors={errors} tableData={tableData} ModalTitle={modalTitleVar} modal={editModal} toggle={handleEditModal} formValue={formValue} handleSubmit={handleUpdate} handleChange={handleChange}
                        />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default ProductListContain;
