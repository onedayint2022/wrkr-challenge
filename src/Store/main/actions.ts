import * as types from './types';

const updateResultListAction = (list: Array<types.ResultListItem>): types.MainActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_RESULT_LIST_ACTION,
        payload: {
            list,
        },
    };
};

const updateParamsAction = (query: string, language: types.FilterType): types.MainActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_PARAMS_ACTION,
        payload: {
            query,
            language,
        },
    };
};

const getResultListSaga = (query?: string, language?: types.FilterType): types.MainSagaTypes => {
    return {
        type: types.SAGA_TYPE.GET_RESULT_LIST_SAGA,
        payload: {
            query,
            language,
        },
    };
};

export { updateResultListAction, getResultListSaga, updateParamsAction };
