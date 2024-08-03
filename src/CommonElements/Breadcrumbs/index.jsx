import React, { Fragment, useContext, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import H3 from '../Headings/H3Element';
import { categories, review, subCategory } from '../../Route/RouteVariable';
import Btn from '../Button';
import { Link } from 'react-router-dom';
import CustomizerContext from '../../_helper/Customizer';
import SvgIcon from '../../Components/Common/Component/SvgIcon';
import ActionModal from '../../Components/Modal/Action/ActionModal';

const Breadcrumbs = (props) => {
  const { layoutURL } = useContext(CustomizerContext);

  const getSideContent = () => {
    const modalTitleVar = props.currentUrl === categories ? 'Add Category' : props.currentUrl === subCategory ? 'Add Sub Category' : 'Add Review'
    if (props.currentUrl === categories || props.currentUrl === subCategory || props.currentUrl === review) {
      return (
        <div class="font-sans text-black min-h-screen bg-white gap-3 d-flex justify-content-end">
          {props.currentUrl === review ? "" :
            <div class="border rounded overflow-hidden flex">
              <input type="text" class="px-2 py-2 border" placeholder="Search..." />
              <button class="flex items-center justify-center px-2 py-2 border  ">
                <i class="fa fa-search text-gray-700"></i>
              </button>
            </div>
          }
          <div>
            <Btn attrBtn={{ className: 'btn action-add-btn', type: 'button', onClick: props.toggle }}><i className="fa fa-plus"></i> &nbsp; Add</Btn>
          </div>
          <ActionModal currentUrl={props.currentUrl} errors={props.errors} tableData={props.tableData} ModalTitle={modalTitleVar} modal={props.modal} toggle={props.toggle} formValue={props.formValue} handleSubmit={props.handleSubmit} handleChange={props.handleChange} />
        </div>
      )
    }
  }

  return (
    <Fragment>
      <Container fluid={true}>
        <div className='page-title'>
          <Row>
            <Col xs='6'>
              <H3>{props.mainTitle}</H3>
            </Col>
            {props.currentUrl ? <>
              <Col xs='6'>
                {getSideContent()}
              </Col>
            </> : <>
              <Col xs='6'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link to={`${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`}>
                      <SvgIcon iconId='stroke-home' />
                    </Link>
                  </li>
                  {props.parent ? <li className='breadcrumb-item'>{props.parent}</li> : ''}
                  {props.subParent ? <li className='breadcrumb-item'>{props.subParent}</li> : ''}
                  <li className='breadcrumb-item active'>{props.title}</li>
                </ol>
              </Col>
            </>}

          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Breadcrumbs;
