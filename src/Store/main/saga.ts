import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { getResultListApi } from '../../Apis';
import * as types from './types';
import * as actions from './actions';

/**
 * deal with the get result api
 */
function* handleGetResultList(action: types.MainSagaTypes) {
    //get response
    const res = yield call(getResultListApi, action.payload.query, action.payload.language);

    if (res.status == 200) {
        // 200
        // get data
        const resList = res.data.items as Array<types.ResultListItem>;
        // push into redux
        yield put(actions.updateResultListAction(resList));
    } else {
        // error
        alert('Failed to search, Please try again later');
    }
}

function* watchActions() {
    yield takeLatest(types.SAGA_TYPE.GET_RESULT_LIST_SAGA, handleGetResultList);
}

const sagas = [fork(watchActions)];
export default sagas;
