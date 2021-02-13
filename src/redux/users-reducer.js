import usersAPI from "../api/usersAPI";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress:
                    action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(u => u !== action.userId)
            }
        default:
            return state;
    }
}

const followSuccess = (userId) => ({type: FOLLOW, userId});
const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUserCount = (totalUsersCount) => ({type: SET_TOTAL_USER_COUNT, totalUsersCount});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});

export const follow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
}

export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
}


export const getUsers = (currentPage,pageSize) => (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleFetching(true));
    usersAPI.getUsers(currentPage,pageSize)
        .then(data => {
            dispatch(toggleFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUserCount(data.totalCount));
        })
}

export default usersReducer;