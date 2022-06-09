//action types
export enum ACTION_TYPE {
    UPDATE_RESULT_LIST_ACTION = 'UPDATE_RESULT_LIST_ACTION',
    UPDATE_PARAMS_ACTION = 'UPDATE_PARAMS_ACTION',
}

//saga types
export enum SAGA_TYPE {
    GET_RESULT_LIST_SAGA = 'GET_RESULT_LIST_SAGA',
}

// update result action
interface UpdateResultListAction {
    type: ACTION_TYPE.UPDATE_RESULT_LIST_ACTION;
    payload: {
        list: Array<ResultListItem>;
    };
}

// update params action
interface UpdateParamsAction {
    type: ACTION_TYPE.UPDATE_PARAMS_ACTION;
    payload: {
        query: string;
        language: FilterType;
    };
}

// export action types
export type MainActionTypes = UpdateResultListAction | UpdateParamsAction;

// get result saga
interface GetResultListSaga {
    type: SAGA_TYPE.GET_RESULT_LIST_SAGA;
    payload: {
        query?: string;
        language?: string;
    };
}

// export saga types
export type MainSagaTypes = GetResultListSaga;

export interface ResultListItem {
    // id of the node
    node_id: string;
    // full name
    full_name: string;
    // desc
    description: string;
    // update time
    updated_at: string;
    // license
    license: { name: string } | null;
    // language
    language: string;
    // star counter
    stargazers_count: number;
    // topics array
    topics: Array<string>;
}

// filter types
export type FilterType = 'All' | 'JavaScript' | 'TypeScript' | 'HTML' | 'CSS';

// main reducer
export interface mainReducer {
    // input query
    query: string;
    // filter
    language: FilterType;
    // result list
    list: Array<ResultListItem>;
}
