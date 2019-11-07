import axios from "axios";

import {
    GET_STAFF_DETAILS,
    ENABLE_STAFF_LOADING,
    GET_ERRORS,
    DISABLE_STAFF_LOADING,
} from "./types";

export const getStaffDetails = () => dispatch => {
    dispatch(enableStaffLoading());
    axios
        .get(`/api/staff/`)
        .then((res) => {

            dispatch({
                type: GET_STAFF_DETAILS,
                payload: res.data
            });
            dispatch(disableStaffLoading());
        }
        )
        .catch((err) => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};

export const createStaffDetails = staffData => dispatch => {
    axios
        .post("/api/staff/", staffData)
        .then((res) => {
            dispatch({
                type: GET_STAFF_DETAILS,
                payload: res.data
            });
            dispatch(getStaffDetails());
        }
        )
        .catch((err) => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
        }
        );
};

export const enableStaffLoading = () => {
    return {
        type: ENABLE_STAFF_LOADING
    };
};
export const disableStaffLoading = () => {
    return {
        type: DISABLE_STAFF_LOADING
    };
};