import axios from "axios";

import {
    GET_STUDENT_DETAILS,
    ENABLE_STUDENT_DETAILS_LOADING,
    GET_ERRORS,
    DISABLE_STUDENT_DETAILS_LOADING,
} from "./types";

export const getStudentDetails = () => dispatch => {
    dispatch(enableStudentDetailsLoading());
    axios
        .get("/api/classAndsec")
        .then(res =>
            dispatch({
                type: GET_STUDENT_DETAILS,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: {}
            });
        });
    dispatch(disableStudentDetailsLoading());
};

export const deleteClass = cls => dispatch => {
    axios
        .delete(`/api/classAndsec/${cls}`)
        .then(res =>
            dispatch({
                type: GET_STUDENT_DETAILS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Create Class
export const createStudentDetails = studentData => dispatch => {
    const la = axios
        .post("/api/student/student", studentData)
        .then(res =>
            dispatch({
                type: GET_STUDENT_DETAILS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
    console.log(la)
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