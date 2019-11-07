import axios from "axios";

import {
    GET_STUDENT_DETAILS,
    ENABLE_STUDENT_DETAILS_LOADING,
    GET_ERRORS,
    DISABLE_STUDENT_DETAILS_LOADING,
} from "./types";

export const getStudentDetails = (batch) => dispatch => {
    dispatch(enableStudentDetailsLoading());
    axios
        .get(`/api/student/batch/${batch}`)
        .then((res) => {

            dispatch({
                type: GET_STUDENT_DETAILS,
                payload: res.data
            });
            dispatch(disableStudentDetailsLoading());
        }
        )
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: {}
            });
        });
};

export const createStudentDetails = studentData => dispatch => {
    axios
        .post("/api/student", studentData)
        .then((res) => {
            dispatch({
                type: GET_STUDENT_DETAILS,
                payload: res.data
            });
            console.log(res);
            dispatch(getStudentDetails(studentData.batch));
        }
        )
        .catch((err) => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
            err.response.data.error ? alert(err.response.data.error) : console.log(err);
        }
        );
};

export const enableStudentDetailsLoading = () => {
    return {
        type: ENABLE_STUDENT_DETAILS_LOADING
    };
};
export const disableStudentDetailsLoading = () => {
    return {
        type: DISABLE_STUDENT_DETAILS_LOADING
    };
};