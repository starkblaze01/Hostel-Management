import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import studentDetailsReducer from './studentDetailsReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  studentDetails: studentDetailsReducer,
});
