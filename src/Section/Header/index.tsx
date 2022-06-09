import React from 'react';
import style from './style.scss';
import WrkrLogo from '../../Assert/wrkr-Logo-K.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
interface HeaderProps {
    // menu state changes
    onChange: () => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const MainPage: React.FC<HeaderProps> = ({ onChange }) => {
    return (
        <div className={style.Header_container}>
            <span onClick={onChange}>
                <FontAwesomeIcon icon={faBars} />
            </span>
            <img src={WrkrLogo} alt="#" />
        </div>
    );
};

export default MainPage;
