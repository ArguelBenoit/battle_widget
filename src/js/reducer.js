import data_json from '../data';
import {DATA} from './action';
const initialState = []; 

const dataReducer = (state = initialState, action) => {

  switch (action.type) {
    case DATA :
      return action.data;
    default :
      return state;
  }
};

export default dataReducer;