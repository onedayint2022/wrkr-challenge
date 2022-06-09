import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Section/Header';
import Navigation from '../../Section/Navigation';
import Result from '../../Section/Result';
import Search from '../../Section/Search';
import { RootState } from '../../Store/stateManager';
import style from './style.scss';
import * as actions from '../../Store/main/actions';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const MainLayout: React.FC = () => {
    // query & language state
    const query = useSelector((state: RootState) => state.mainReducer.query);
    const language = useSelector((state: RootState) => state.mainReducer.language);
    const dispatch = useDispatch();
    // width of window
    const getWidth = () => document.body.clientWidth;
    // menu state
    const [menuState, setMenuState] = useState(true);

    /**
     * mask on click
     * @returns
     */
    const handleMaskOnClick = () => setMenuState(false);

    /**
     * header on click
     * @returns
     */
    const handleHeaderOnClick = () => setMenuState(true);

    /**
     * window resize
     */
    const resizeListener = () => {
        // current width
        const currentWindowWidth = getWidth();
        // >1024 disable menu state
        currentWindowWidth > 1024 ? setMenuState(true) : setMenuState(false);
    };

    // add resize listener
    useEffect(() => {
        window.addEventListener('resize', resizeListener);
        return () => window.removeEventListener('resize', resizeListener);
    });

    // query larger then 2 can sent request
    useEffect(() => {
        query.length > 2
            ? dispatch(actions.getResultListSaga(query, language === 'All' ? undefined : language))
            : dispatch(actions.updateResultListAction([]));
    });
    return (
        <div className={style.MainLayout_layout}>
            <Header onChange={handleHeaderOnClick} />
            <div className={style.MainLayout_mainContainer}>
                {menuState && (
                    <div className={style.MainLayout_mask} onClick={handleMaskOnClick}></div>
                )}
                {menuState && <Navigation />}
                <div className={style.MainLayout_searchContainer}>
                    <Search />
                    <Result />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
