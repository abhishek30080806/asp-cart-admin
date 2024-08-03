import React, { Fragment } from 'react';
import { Col, Table } from "reactstrap";
import StatusBtn from './StatusBtn';
import ActionBtn from './ActionBtn';
import { categories, subCategory } from '../../../Route/RouteVariable';

const ActionTable = ({ tableData, tableHeading, currentUrl,changeStatus }) => {
    const getTableBody = (item) => {
        if (currentUrl === categories)
            return (
                <tr key={item.id}>
                    <td>{item.title}</td>
                    <td><StatusBtn status={item?.feature} currentUrl={currentUrl} isFeature/></td>
                    <td><StatusBtn  status={item?.status} currentUrl={currentUrl}/></td>
                    <td>
                        <ActionBtn changeStatus={changeStatus} item={item} />
                    </td>
                </tr>
            )
        else if (currentUrl === subCategory) {
            return (
                <tr key={item?.id}>
                    <td>{item?.title}</td>
                    <td>{item?.categoryName}</td>
                    <td><StatusBtn  currentUrl={currentUrl} status={item?.status} /></td>
                    <td><ActionBtn changeStatus={changeStatus}  item={item} /></td>
                </tr>
            )
        }
        else {
            return (
                <tr key={item.id}>
                    <td>{item.title}</td>
                    <td><StatusBtn status={item?.status} /></td>
                    <td><ActionBtn changeStatus={changeStatus} item={item} /></td>
                </tr>
            )
        }
    }
    return (
        <Fragment>
            <Col sm="12">
                <div className="card-block row">
                    <Col sm="12">
                        <div className="table-responsive">
                            <Table className='text-center'>
                                <thead className="table-dark">
                                    <tr>
                                        {tableHeading?.map((heading, key) => (
                                            <th key={key}>{heading}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData?.map((item) => (
                                        getTableBody(item)
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </div>
            </Col>
        </Fragment>
    )
}

export default ActionTable;
