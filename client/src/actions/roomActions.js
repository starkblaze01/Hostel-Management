import axios from "axios";

import {
    GET_ROOM_ACTION,
    ENABLE_ROOM_ACTION_LOADING,
    GET_ERRORS,
    DISABLE_ROOM_ACTION_LOADING,
} from "./types";

export const getRoomAction = (block) => dispatch => {
    dispatch(enableRoomActionLoading());
    axios
        .get(`/api/room/block/${block}`)
        .then((res) => {

            dispatch({
                type: GET_ROOM_ACTION,
                payload: res.data
            });
            dispatch(disableRoomActionLoading());
        }
        )
        .catch((err) => {
            dispatch({
                type: GET_ERRORS,
                payload: {}
            });
        });
};

export const createRoomAction = roomActionData => dispatch => {
    axios
        .post("/api/room/", roomActionData)
        .then((res) => {
            dispatch({
                type: GET_ROOM_ACTION,
                payload: res.data
            });
            dispatch(getRoomAction(roomActionData.block));
        }
        )
        .catch((err) => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
            err.response.data.message ? alert(err.response.data.message) : console.log(err);
        }
        );
};

export const enableRoomActionLoading = () => {
    return {
        type: ENABLE_ROOM_ACTION_LOADING
    };
};
export const disableRoomActionLoading = () => {
    return {
        type: DISABLE_ROOM_ACTION_LOADING
    };
};