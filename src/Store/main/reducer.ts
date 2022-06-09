import * as types from './types';

// init reducer state
const initialState: types.mainReducer = {
    query: '',
    language: 'All',
    list: [],
};

export default (state = initialState, action: types.MainActionTypes): types.mainReducer => {
    switch (action.type) {
        case types.ACTION_TYPE.UPDATE_RESULT_LIST_ACTION:
            return {
                ...state,
                list: [...action.payload.list],
            };
        case types.ACTION_TYPE.UPDATE_PARAMS_ACTION:
            return {
                ...state,
                query: action.payload.query,
                language: action.payload.language,
            };
        default:
            return state;
    }
};
