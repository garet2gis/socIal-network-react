import authAPI from "../api/authAPI";
import {stopSubmit} from "redux-form";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';
const DELETE_USER_AUTH_DATA = 'DELETE_USER_AUTH_DATA';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case DELETE_USER_AUTH_DATA:
            return {
                ...state,
                id: null,
                login: null,
                email: null,
                isAuth: false
            }

        default:
            return state;
    }
}

export const setUserAuthData = (data) => ({type: SET_USER_AUTH_DATA, data});
export const deleteUserAuthData = () => ({type: DELETE_USER_AUTH_DATA});


export const authMe = () => async (dispatch) => {
    const data = await authAPI.authMe();
    if (data.resultCode === 0)
        dispatch(setUserAuthData(data.data));
};

export const login = (loginData) => async (dispatch) => {
    let data = await authAPI.login(loginData);
    if (data.resultCode === 0)
        dispatch(authMe());
    else {
        dispatch(stopSubmit('login', {_error: data.messages.length > 0 ? data.messages[0] : 'Some error'}));
    }
};

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();
    if (data.resultCode === 0)
        dispatch(deleteUserAuthData())
};

export default authReducer;