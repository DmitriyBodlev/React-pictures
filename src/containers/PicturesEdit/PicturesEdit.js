import React, { PropTypes } from 'react';
import Picture from '../../components/Picture';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNewPicture } from '../../actions/PictureActions';


const PicturesEdit = (props) => {
    return (
        <div className="picture-edit-wrap">
            {props.pictures.map((item, index) => {
                return <Picture forEdit={true} {...item} key={index}/>
            })}
            <div className="add-new-picture-wrap">
                <button type="button" onClick={props.addNewPicture} className="add-new-picture">Add new picture</button>
            </div>
        </div>
    );
};

PicturesEdit.propTypes = {
    pictures: PropTypes.array,
    addNewPicture: PropTypes.func,
};

const mapStateToProps = state => ({
  pictures: state.pictures
})

const mapDispatchToProps = dispatch => bindActionCreators({
    addNewPicture
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PicturesEdit)