import Constants from '../constants';


export const changePicture = (src, id) => {
  return dispatch => {
    dispatch({
      type: Constants.CHANGE_PICTURE,
      src,
      id
    })
  }
}

export const addNewPicture = () => {
  return dispatch => {
    dispatch({
      type: Constants.ADD_NEW_PICTURE,
    })
  }
}

export const deletePicture = (id) => {
  return dispatch => {
    dispatch({
      type: Constants.DELETE_PICTURE,
      id
    })
  }
}

export const toggleEditable = (bool, id) => {
  return dispatch => {
    dispatch({
      type: Constants.TOGGLE_EDITABLE,
      bool,
      id,
    })
  }
}

export const editTooltip = (text, id) => {
  return dispatch => {
    dispatch({
      type: Constants.CHANGE_TOOLTIP,
      text,
      id,
    })
  }
}
