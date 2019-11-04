import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import studentDetailsReducer from './studentDetailsReducer';
import roomReducer from './roomReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  studentDetails: studentDetailsReducer,
  roomData: roomReducer,
});
