import React, { PropTypes } from 'react';


const AditDeleteButtons = ({onDoneEditPicture, onDeletePicture, onEditPicture, editable}) => {
    return (
        <div className="adit-delete-buttons-wrap">
            {editable
                ?
                <button onClick={onDoneEditPicture} className="done-button">Done</button>
                :
                <button onClick={onEditPicture} className="edit-button" type="button">Edit</button>
            }
            <button onClick={onDeletePicture} className="delete-button" type="button">Delete</button>
        </div>
    );
};

AditDeleteButtons.propTypes = {
    onDoneEditPicture: PropTypes.func, 
    onDeletePicture: PropTypes.func, 
    onEditPicture: PropTypes.func, 
    editable: PropTypes.bool
};

export default AditDeleteButtons;