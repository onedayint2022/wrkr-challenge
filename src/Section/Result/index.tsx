import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropDown from '../../Component/DropDown';
import ResultCard from '../../Component/ResultCard';
import { dropDrownList } from '../../DefaultData/Section/Result/result';
import { RootState } from '../../Store/stateManager';
import style from './style.scss';
import * as types from '../../Store/main/types';
import * as actions from '../../Store/main/actions';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Result: React.FC = () => {
    const dispatch = useDispatch();
    // get result list state
    const listState = useSelector((state: RootState) => state.mainReducer.list);
    // query state
    const query = useSelector((state: RootState) => state.mainReducer.query);

    /**
     * handle filter change
     * @param value
     * @returns
     */
    const dropDownOnChange = (value: string) =>
        dispatch(actions.updateParamsAction(query, value as types.FilterType));

    return (
        <div className={style.Result_container}>
            <div>
                <span>Filter by language:</span>
                <DropDown list={dropDrownList} onChange={dropDownOnChange} />
            </div>
            <div className={style.Result_divider}></div>
            <div className={style.Result_resultCount}>
                {listState.length == 0 ? 'No result' : `${listState.length} repository results`}
            </div>
            {listState.length != 0 && (
                <div className={style.Result_resultContainer}>
                    <div className={style.Result_divider}></div>
                    {listState.map((item) => (
                        <div key={`resultCard${item.node_id}`}>
                            <ResultCard {...item} />
                            <div className={style.Result_divider}></div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Result;
