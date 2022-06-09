import React, { ChangeEvent } from 'react';
import style from './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../../Store/main/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/stateManager';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Search: React.FC = () => {
    const dispatch = useDispatch();
    // language state
    const language = useSelector((state: RootState) => state.mainReducer.language);

    /**
     * input changes
     * @param e
     * @returns
     */
    const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) =>
        dispatch(actions.updateParamsAction(e.target.value, language));

    return (
        <div className={style.Search_container}>
            <h1>Search</h1>
            <div>
                <div className={style.Search_inputContainer}>
                    <input onChange={handleInputOnChange} />
                    <span>
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Search;
