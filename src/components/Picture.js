import React, { PropTypes } from 'react';
import AditDeleteButtons from '../modules/AditDeleteButtons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { changePicture, deletePicture, toggleEditable, editTooltip } from '../actions/PictureActions';


const Picture = ({id, src, tooltip, editable, changePicture, deletePicture, toggleEditable, editTooltip, forEdit}) => {
    function SetPicture(url) {
        changePicture(url, id);
    }

    function isInvalidFileType(fileType) {
        if (fileType === 'image/jpeg' || fileType === 'image/jpg' || fileType === 'image/png') {
            return false;
        } else {
            return true;
        }
    }

    function uploadFiles(files) {
        let file = files[0];
        if (file.size > 5242880 && isInvalidFileType(file.type)) return;

        const reader = new FileReader();

        reader.onload = () => {
            SetPicture(reader.result);
        };

        reader.readAsDataURL(file);
    }

    function deleteThisPicture() {
        deletePicture(id)
    }

    function doneEdit() {
        toggleEditable(false, id)
    }

    function makeEditable() {
        toggleEditable(true, id)
    }

    function changeInputText(e) {
        editTooltip(e.target.value, id)
    }
    
    return (
        <div className="picture-wrap">
            <div className="picture">
                {editable &&
                    <div className="file-input-wrap">
                        <div className="select-image">Select Image</div>
                        <input className="file-input" type="file" onChange={(event) => uploadFiles(event.target.files)} />
                    </div>
                }
                {!editable && tooltip !== '' &&
                    <div>
                        <ReactTooltip />
                        <div data-tip={tooltip} className="tooltip">tooltip</div>
                    </div>
                }
                <img src={src} alt="" />
            </div>
            {editable &&
                <label className="tooltip-label">
                    Tooltip:
                    <input value={tooltip} onChange={changeInputText} type="text" />
                </label>
            }
            {
                forEdit &&
                <AditDeleteButtons
                    editable={editable}
                    onDoneEditPicture={doneEdit}
                    onEditPicture={makeEditable}
                    onDeletePicture={deleteThisPicture} />
            }

        </div>
    );
};

Picture.propTypes = {
    id: PropTypes.number, 
    src: PropTypes.string, 
    tooltip: PropTypes.string, 
    editable: PropTypes.bool, 
    changePicture: PropTypes.func, 
    deletePicture: PropTypes.func, 
    toggleEditable: PropTypes.func, 
    editTooltip: PropTypes.func, 
    forEdit: PropTypes.bool
};

const mapDispatchToProps = dispatch => bindActionCreators({
    changePicture,
    deletePicture,
    toggleEditable,
    editTooltip
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Picture)
