import Constants from '../constants';

const defaultImg = require('../no-photo.png');

const initialState = [
  {
    src: defaultImg,
    tooltip: '',
    editable: false,
    id: 0,
  },
  {
    src: defaultImg,
    tooltip: '',
    editable: false,
    id: 1,
  },
  {
    src: defaultImg,
    tooltip: '',
    editable: false,
    id: 2,
  },
  {
    src: defaultImg,
    tooltip: '',
    editable: false,
    id: 3,
  },
  {
    src: defaultImg,
    tooltip: '',
    editable: false,
    id: 4,
  },
  {
    src: defaultImg,
    tooltip: '',
    editable: false,
    id: 5,
  },
  {
    src: defaultImg,
    tooltip: '',
    editable: false,
    id: 6,
  },
  {
    src: defaultImg,
    tooltip: '',
    editable: false,
    id: 7,
  }
]

export default (state = initialState, action) => {
  let pictureArr;
  switch (action.type) {
    case Constants.CHANGE_PICTURE:
      return [...state.slice(0, action.id),
      { ...state[action.id], src: action.src },
      ...state.slice(action.id + 1, state.length)]
    case Constants.ADD_NEW_PICTURE:
      pictureArr = [].concat(...state, {
        src: defaultImg,
        tooltip: '',
        editable: false, id: state[state.length - 1].id + 1, editable: true
      })
      return pictureArr;

    case Constants.DELETE_PICTURE:
      pictureArr = state.filter(item => {
        return item.id !== action.id
      })
      return pictureArr;
    case Constants.TOGGLE_EDITABLE:
      pictureArr = state.map(item => {
        if (item.id === action.id) {
          item.editable = action.bool
        }
        return item;
      })
      return pictureArr;
    case Constants.CHANGE_TOOLTIP:
      pictureArr = state.map(item => {
        if (item.id === action.id) {
          item.tooltip = action.text;
        }
        return item;
      })
      return pictureArr;
    default:
      return state
  }
}
