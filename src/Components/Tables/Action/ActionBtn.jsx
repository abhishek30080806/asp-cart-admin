import { Btn } from "../../../AbstractElements"
import { edit, Active, deactive } from "../../../Constant"
const ActionBtn = ({ toggle, item, changeStatus,handleEditModal }) => {
    const getActionName = () => {
        if (item?.status || item?.status) {
            return deactive;
        }
        else {
            return Active;
        }
    }

    return <>
        <div>
            <span>
                <Btn isEditBtnAction={true}  onClick={handleEditModal} item={item} attrBtn={{ className: 'btn edit-btn', type: 'button' }}><i className="fa fa-pencil"></i> &nbsp; {edit}</Btn>
            </span>{' '}
            &nbsp;&nbsp;
            {item?.status ? <>
                <span>
                    <Btn item={item} onClick={changeStatus} attrBtn={{ className: 'btn feature-btn-deactive', type: 'button' }}><i className="fa fa-eye-slash"></i> &nbsp; {getActionName()}</Btn>
                </span>
            </> : <>
                <span>
                    <Btn item={item} onClick={changeStatus} attrBtn={{ className: 'btn feature-btn-active', type: 'button' }}><i className="fa fa-eye"></i> &nbsp; {getActionName()}</Btn>
                </span>
            </>}
        </div>
    </>
}

export default ActionBtn