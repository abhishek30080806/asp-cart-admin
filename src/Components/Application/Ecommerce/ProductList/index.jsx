import React, { Fragment, useEffect, useState } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { Col, Container, Row } from 'reactstrap';
import { useLocation } from 'react-router';
import { CurrentPage } from '../../../Common/CurrentPage/CurrentPage';
import { categories, subCategory } from '../../../../Route/RouteVariable';
import { categoryData, categoryHeading, ReviewData, reviewHeading, subCategoryData, subCategoryHeading } from '../../../../Data/ActionData/ActionData';
import ActionTable from '../../../Tables/Action/Table';

const ProductListContain = () => {
    const location = useLocation();
    const [tableData, setTableData] = useState([]);
    const [tableHeading, setTableHeading] = useState([]);
    const { currentUrl } = CurrentPage();
    const getTitleName = (currentUrl === subCategory) ? 'Sub Category' : (currentUrl === categories) ? 'Categories' : 'Review';

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

    return (
        <Fragment>
            <Breadcrumbs parent="Actions" title={getTitleName} mainTitle={getTitleName} currentUrl={currentUrl} />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <ActionTable tableData={tableData} tableHeading={tableHeading} currentUrl={currentUrl} changeStatus={changeStatus} />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default ProductListContain;
