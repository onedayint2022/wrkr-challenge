import React from 'react';
import { navigationList } from '../../DefaultData/Section/Navigation/navigation';
import style from './style.scss';

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Navigation: React.FC = () => {
    return (
        <div className={style.Navigation_container}>
            {navigationList.map((item, index) => (
                <div key={`navItem${index}`}>{item}</div>
            ))}
        </div>
    );
};

export default Navigation;
