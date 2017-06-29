import React, { PropTypes } from 'react';
import Picture from '../../components/Picture';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNewPicture } from '../../actions/PictureActions';


const PicturesEdit = (props) => {
    return (
        <div className="picture-edit-wrap">
            {props.pictures.map((item, index) => {
                return <Picture forEdit={false} {...item} key={index}/>
            })}
        </div>
    );
};

PicturesEdit.propTypes = {
    pictures: PropTypes.array
};

const mapStateToProps = state => ({
  pictures: state.pictures
})

export default connect(
  mapStateToProps,
  null
)(PicturesEdit)

// export default PicturesEdit;