import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import style from './style.scss';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface DropDownProps {
    list: Array<string>;
    onChange?: (value: string) => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const DropDown: React.FC<DropDownProps> = ({ list, onChange }) => {
    // selected value
    const [value, setValue] = useState(list.length > 0 ? list[0] : 'null');
    // open state
    const [open, setOpen] = useState(false);

    /**
     * open list
     * @returns
     */
    const handleListOnClick = () => setOpen(!open);

    /**
     * close list
     * @returns
     */
    const handleListOnClickOnBlur = () => setOpen(false);

    /**
     * item changed
     * @param value changed item
     */
    const handleListItemOnClick = (value: string) => {
        setValue(value);
        if (onChange) onChange(value);
    };

    return (
        <div
            className={style.DropDown_container}
            onClick={handleListOnClick}
            tabIndex={-1}
            onBlur={handleListOnClickOnBlur}
        >
            <span>{value}</span>

            <FontAwesomeIcon
                icon={faAngleDown}
                style={{ transform: `rotate(${open ? 180 : 0}deg)`, transition: '0.1s' }}
            />
            {open && (
                <div className={style.DropDown_listContainer}>
                    {list.map((item, index) => (
                        <div key={`dropdown${index}`} onClick={() => handleListItemOnClick(item)}>
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropDown;
