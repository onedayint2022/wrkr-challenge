import { applyMiddleware, combineReducers, createStore } from 'redux';
import mainReducer from './main/reducer';
import mainSaga from './main/saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
function* rootSaga(): Generator {
    try {
        yield all([...mainSaga]);
    } catch (err) {
        // This is where error monitoring should go
        console.log('error caught in main saga::', err);
    }
}

// combine Reducer
const combineReducer = combineReducers({
    mainReducer: mainReducer,
});
// apply middleware
const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
// export root type
export type RootState = ReturnType<typeof combineReducer>;
// export store
export default store;
